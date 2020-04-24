from rest_framework import serializers
from .models import Tag, Portfolio
from stock.serializers import StockSerializer
from investpy.currency_crosses import get_currency_cross_recent_data as gccrd


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'


class PortfolioSerializer(serializers.ModelSerializer):
    total_ratio = serializers.SerializerMethodField(method_name='get_total')
    tags = TagSerializer(many=True)

    def get_total(self, obj):
        first, now = 0, 0
        for stock in obj.stocks.all():
            sg = 1
            if stock.currency != 'KRW':
                sg = gccrd(f'{stock.currency}/KRW').iloc[-1, 3]
            first += stock.count * stock.buy_price * sg
            now += stock.count * stock.current_price * sg
        return 0 if first == 0 else (now - first) * 100 / first

    class Meta:
        model = Portfolio
        fields = ['id', 'name', 'total_ratio', 'tags', 'created_at', ]


class PortfolioDetailSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True)
    stocks = StockSerializer(many=True)
    profit = serializers.SerializerMethodField()

    def get_profit(self, obj):
        s, o, usd, krw = 0, 0, 0, 0
        first, now, sg = 0, 0, 1
        for stock in obj.stocks.all():
            if stock.currency != 'KRW':
                sg = gccrd(f'{stock.currency}/KRW').iloc[-1, 3]
                usd += 1
            else:
                krw += 1

            if stock.category == 'STOCK':
                s += 1
            else:
                o += 1
            first += stock.buy_price * stock.count * sg
            now += stock.current_price * stock.count * sg

        ratio = 0 if first == 0 else (now - first) * 100 / first
        share_ratio = 0 if s + o == 0 else s * 100 / (s + o)
        other_ratio = 0 if s + o == 0 else o * 100 / (s + o)
        usd_ratio = 0 if usd + krw == 0 else usd * 100 / (usd + krw)
        krw_ratio = 0 if usd + krw == 0 else krw * 100 / (usd + krw)

        data = {
            'totalBuyingPrice': first, 'totalCurrentPrice': now,
            'totalProfit': now - first, 'totalRatio': ratio,
            'exchangeRate': sg,
            'currencyRate': {'USD': int(usd_ratio), 'KRW': int(krw_ratio)},
            'categoryRate': {'STOCK': int(share_ratio), 'DERIVATIVES': int(other_ratio)}
        }

        return data

    class Meta:
        model = Portfolio
        fields = ['id', 'name', 'tags', 'created_at', 'stocks', 'profit', ]
