from django.shortcuts import get_object_or_404
from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework.response import Response
from . import invest
from .models import StockInfo
from .serializers import StockInfoSerializer


@permission_classes([IsAuthenticated, ])
@authentication_classes([JSONWebTokenAuthentication, ])
@api_view(['GET'])
def commodities(request):
    if request.method == 'GET':
        name = request.GET.get('name')
        from_date = request.GET.get('from_date')
        to_date = request.GET.get('to_date')
        data = invest.get_commodities(name, from_date, to_date)
        return HttpResponse(data)
    else:
        return HttpResponse(status=405)


@permission_classes([IsAuthenticated, ])
@authentication_classes([JSONWebTokenAuthentication, ])
@api_view(['GET'])
def indices(request):
    if request.method == 'GET':
        name = request.GET.get('name')
        country = request.GET.get('country')
        from_date = request.GET.get('from_date')
        to_date = request.GET.get('to_date')
        data = invest.get_indices(name, country, from_date, to_date)
        return HttpResponse(data)
    else:
        return HttpResponse(status=405)


@permission_classes([IsAuthenticated, ])
@authentication_classes([JSONWebTokenAuthentication, ])
@api_view(['GET'])
def currency_cross(request):
    if request.method == 'GET':
        currency_cross = request.GET.get('name')
        from_date = request.GET.get('from_date')
        to_date = request.GET.get('to_date')
        data = invest.get_currency_cross(currency_cross, from_date, to_date)
        return HttpResponse(data)
    else:
        return HttpResponse(status=405)


@permission_classes([IsAuthenticated, ])
@authentication_classes([JSONWebTokenAuthentication, ])
@api_view(['GET'])
def stock_table(request):
    if request.method == 'GET':
        index = request.GET.get('index')
        filter_stocks = StockInfo.objects.filter(index=index)
        serializer = StockInfoSerializer(filter_stocks, many=True)
        return Response(serializer.data)
    else:
        return HttpResponse(status=405)


@permission_classes([IsAuthenticated, ])
@authentication_classes([JSONWebTokenAuthentication, ])
@api_view(['GET'])
def stock_detail(request):
    if request.method == 'GET':
        code = request.GET.get('code')
        country = request.GET.get('country')
        data = invest.get_stock_detail(code, country)
        stockinfo = get_object_or_404(StockInfo, code=code)
        serializer = StockInfoSerializer(stockinfo)
        result = {}
        result['base'] = data
        result['predict'] = serializer.data
        return Response(result)
    else:
        return HttpResponse(status=405)
