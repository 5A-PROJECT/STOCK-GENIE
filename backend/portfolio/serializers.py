from rest_framework import serializers
from .models import Tag, Portfolio
from stock.serializers import StockSerializer
from investpy.currency_crosses import get_currency_cross_recent_data


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'


class PortfolioSerializer(serializers.ModelSerializer):
    profits = serializers.SerializerMethodField()
    tags = TagSerializer(many=True)

    def get_profits(self, obj):
        pfs = []
        for stock in obj.stocks.all():
            sg = 1
            if stock.currency != 'KRW':
                sg = get_currency_cross_recent_data(
                    f'{stock.currency}/KRW'
                ).iloc[-2, 3]

            first = stock.count * stock.buy_price * sg
            now = stock.count * stock.current_price * sg
            diff = now - first
            data = {
                'name': stock.name,
                'totalBuyingPrice': first, 'totalCurrentPrice': now,
                'totalProfit': diff, 'totalRatio': (diff / first) * 100
            }
            pfs.append(data)
        return pfs

    class Meta:
        model = Portfolio
        fields = ['id', 'name', 'profits', 'tags', 'created_at', ]


class PortfolioDetailSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True)
    stocks = StockSerializer(many=True)
    profit = serializers.SerializerMethodField()

    def get_profit(self, obj):
        share, other = 0, 0
        usd, krw = 0, 0
        first, now = 0, 0
        for stock in obj.stocks.all():
            sg = 1
            if stock.currency != 'KRW':
                sg = get_currency_cross_recent_data(
                    f'{stock.currency}/KRW'
                ).iloc[-2, 3]
                usd += 1
            else:
                krw += 1

            if stock.category == 'stock':
                share += 1
            else:
                other += 1

            first += stock.buy_price * stock.count * sg
            now += stock.current_price * stock.count * sg

        diff = now - first
        if first == 0:
            ratio = 0
        else:
            ratio = (diff / first) * 100

        data = {
            'totalBuyingPrice': first, 'totalCurrentPrice': now,
            'totalProfit': diff, 'totalRatio': ratio,
            'exchangeRate': sg,
            'currencyRate': {
                'USD': int(usd * 100 / (usd + krw)),
                'KRW': int(krw * 100 / (usd + krw))
            },
            'categoryRate': {
                'STOCK': int(share * 100 / (share + other)),
                'DERIVATIVES': int(other * 100 / (share + other)),
            }
        }
        return data

    class Meta:
        model = Portfolio
        fields = ['id', 'name', 'tags', 'created_at', 'stocks', 'profit', ]
