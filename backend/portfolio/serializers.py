from rest_framework import serializers
from .models import Tag, Portfolio
from stock.serializers import StockSerializer


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
            first = stock.count * stock.buy_price
            now = stock.count * stock.current_price
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
        first, now = 0, 0
        for stock in obj.stocks.all():
            first += stock.buy_price * stock.count
            now += stock.current_price * stock.count
        diff = now - first
        if first == 0:
            ratio = 0
        else:
            ratio = (diff / first) * 100

        data = {
            'totalBuyingPrice': first, 'totalCurrentPrice': now,
            'totalProfit': diff, 'totalRatio': ratio
        }
        return data

    class Meta:
        model = Portfolio
        fields = ['id', 'name', 'tags', 'created_at', 'stocks', 'profit', ]
