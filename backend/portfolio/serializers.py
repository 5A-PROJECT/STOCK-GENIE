from rest_framework import serializers
from stock.models import Currency
from .models import Tag, Portfolio
from stock.serializers import StockSerializer


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'


class PortfolioSerializer(serializers.ModelSerializer):
    total_ratio = serializers.SerializerMethodField(method_name='get_total')
    tags = TagSerializer(many=True)

    def get_total(self, obj):
        buy, now = 0, 0
        for stock in obj.stocks.all():
            if stock.currency == 'KRW':
                sg = 1
            elif stock.currency == 'USD':
                sg = Currency.objects.get(name='USD/KRW')
            buy += stock.count * stock.buy_price * sg
            now += stock.count * stock.current_price * sg
        return 0 if buy == 0 else (now - buy) * 100 / buy

    class Meta:
        model = Portfolio
        fields = ['id', 'name', 'total_ratio', 'tags', 'created_at', ]


class PortfolioDetailSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True)
    stocks = StockSerializer(many=True)
    profit = serializers.SerializerMethodField()

    def get_profit(self, obj):
        s, o, us, kr, buy, now = 0, 0, 0, 0, 0, 0

        for stock in obj.stocks.all():
            if stock.currency == 'KRW':
                sg = 1
                kr += stock.current_price * sg
            elif stock.currency == 'USD':
                sg = Currency.objects.get(name='USD/KRW')
                us += stock.current_price * sg

            if stock.category == 'STOCK':
                s += stock.current_price * sg
            else:
                o += stock.current_price * sg

            buy += stock.count * stock.buy_price * sg
            now += stock.count * stock.current_price * sg

        ratio = 0 if buy == 0 else (now - buy) * 100 / buy
        share_ratio = 0 if s + o == 0 else s * 100 / (s + o)
        other_ratio = 0 if s + o == 0 else o * 100 / (s + o)
        usd_ratio = 0 if us + kr == 0 else us * 100 / (us + kr)
        krw_ratio = 0 if us + kr == 0 else kr * 100 / (us + kr)

        data = {
            'totalBuyingPrice': buy, 'totalCurrentPrice': now,
            'totalProfit': now - buy, 'totalRatio': ratio,
            'exchangeRate': sg,
            'currencyRate': {'USD': int(usd_ratio), 'KRW': int(krw_ratio)},
            'categoryRate': {'STOCK': int(share_ratio), 'DERIVATIVES': int(other_ratio)}
        }

        return data

    class Meta:
        model = Portfolio
        fields = ['id', 'name', 'tags', 'created_at', 'stocks', 'profit', ]
