from rest_framework import serializers
from .models import Tag, Portfolio


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'


class PortfolioSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True)

    class Meta:
        model = Portfolio
        fields = ['id', 'name', 'tags', 'created_at', ]
