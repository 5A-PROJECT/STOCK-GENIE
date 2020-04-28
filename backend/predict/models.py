from django.db import models
from django.contrib.auth import get_user_model


class StockInfo(models.Model):
    country = models.CharField(max_length=20)
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=20)
    open = models.FloatField()
    close = models.FloatField()
    index = models.CharField(max_length=20, blank=True)
    prevpredict = models.FloatField(blank=True)
    predict = models.FloatField(blank=True)

    @property
    def rate(self):
        return round(((self.open - self.close)/self.close) * 100, 2)

    @property
    def predictpoint(self):
        if self.prevpredict < self.predict:
            return 1
        else:
            return 0

    def __str__(self):
        return self.name
