from django.urls import path
from . import views

urlpatterns = [
    path('', views.portfolio),
    path('<int:pf_id>/', views.portfolio_detail),
    path('<int:pf_id>/stock/', views.add_stock),
]
