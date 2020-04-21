from django.shortcuts import get_object_or_404
from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from .serializers import PortfolioSerializer, PortfolioDetailSerializer
from .models import Portfolio
from stock.models import Stock

# Create your views here.


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated, ])
@authentication_classes([JSONWebTokenAuthentication, ])
def portfolio(request):
    if request.method == 'GET':
        pfs = Portfolio.objects.filter(user=request.user)
        serializer = PortfolioSerializer(pfs, many=True)
        return JsonResponse({'count': len(pfs), 'data': serializer.data})
    elif request.method == 'POST':  # 현재: 동일 유저가 동일 이름으로 생성 가능
        name = request.data.get('name')
        pf = Portfolio.objects.create(name=name, user=request.user)
        return JsonResponse({'id': pf.id, 'created_at': pf.created_at})
    else:
        return HttpResponse(status=405)


@api_view(['GET'])
@permission_classes([IsAuthenticated, ])
@authentication_classes([JSONWebTokenAuthentication, ])
def portfolio_detail(request, pf_id):
    pf = get_object_or_404(Portfolio, id=pf_id)
    if pf.user != request.user:
        return HttpResponse(status=401)

    serializer = PortfolioDetailSerializer(pf)
    return JsonResponse(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated, ])
@authentication_classes([JSONWebTokenAuthentication, ])
def add_stock(request, pf_id):
    pf = get_object_or_404(Portfolio, id=pf_id)
    if pf.user != request.user:
        return HttpResponse(status=401)
    data = request.data
    stock = Stock.objects.create(
        name=data.get('name'), count=int(data.get('count')),
        buy_price=float(data.get('buy_price')), current_price=float(data.get('current_price')),
        currency=data.get('currency'), user=request.user, portfolio=pf
    )
    # pf.stocks.add(stock)
    return JsonResponse({'id': stock.id})
