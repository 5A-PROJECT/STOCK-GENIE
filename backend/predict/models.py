from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.


class StockInfo(models.Model):
    country = models.CharField(max_length=20)
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=20)
    open = models.FloatField()
    close = models.FloatField()
    prevpredict = models.FloatField(blank=True)
    predict = models.FloatField(blank=True)

    @property
    def rate(self):
        return round(((self.close - self.open)/self.open) * 100, 2)

    @property
    def predictpoint(self):
        if self.prevpredict < self.predict:
            return 1
        else:
            return 0

    def __str__(self):
        return self.name
