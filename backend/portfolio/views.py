from django.shortcuts import get_object_or_404
from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from .serializers import PortfolioSerializer
from .models import Portfolio

# Create your views here.


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated, ])
@authentication_classes([JSONWebTokenAuthentication, ])
def portfolio(request):
    if request.method == 'GET':
        return JsonResponse({})
    elif request.method == 'POST':  # 현재: 동일 유저가 동일 이름으로 생성 가능
        name = request.data.get('name')
        pf = Portfolio.objects.create(name=name, user=request.user)
        return JsonResponse({'id': pf.id, 'createdAt': pf.created_at})
    else:
        return HttpResponse(status=405)
