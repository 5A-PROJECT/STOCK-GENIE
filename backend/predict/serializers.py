from rest_framework import serializers
from .models import StockInfo


class StockInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = StockInfo
        fields = [
            'id', 'name', 'code', 'open', 'close', 'rate', 'predictpoint'
        ]
