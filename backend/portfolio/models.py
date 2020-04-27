from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.


class Tag(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name


class Portfolio(models.Model):
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    tags = models.ManyToManyField(Tag, related_name='portfolios')
    user = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE, related_name='portfolios'
    )

    def __str__(self):
        return self.name


class Profit(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    money = models.FloatField()
    portfolio = models.ForeignKey(
        Portfolio, on_delete=models.CASCADE, related_name='profits')

    def __str__(self):
        return f'{self.date} + {self.portfolio.name}'
