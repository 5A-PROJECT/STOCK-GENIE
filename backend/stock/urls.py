from django.urls import path
from . import views

urlpatterns = [
    path('<int:sc_id>/', views.stock),
]
