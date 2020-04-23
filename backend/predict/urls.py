from django.urls import path
from . import views

urlpatterns = [
    path('commodities/', views.commodities),
    path('indices/', views.indices),
    path('currencycross/', views.currency_cross),
    path('stocktable/', views.stock_table)
]
