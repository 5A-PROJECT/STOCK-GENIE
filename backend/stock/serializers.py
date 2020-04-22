from rest_framework import serializers
from .models import Stock


class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = [
            'id', 'name', 'count', 'code',
            'buy_price', 'current_price', 'currency', 'category'
        ]
