from rest_framework import serializers
from .models import Tag, Portfolio


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
                'totalBuyingPrice': first, 'totalCurrentPrice': now,
                'totalProfit': diff, 'totalRatio': (diff / first) * 100
            }
            pfs.append(data)
        return pfs

    class Meta:
        model = Portfolio
        fields = ['id', 'name', 'profits', 'tags', 'created_at', ]
