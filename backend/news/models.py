from django.db import models

# Create your models here.


class News(models.Model):
    title = models.CharField(max_length=300)
    url = models.CharField(max_length=500)
    class_type = models.BooleanField()

    def __str__(self):
        return self.title[:30]
