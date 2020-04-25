from django.shortcuts import get_object_or_404
from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework.response import Response
from django.core.paginator import Paginator
from . import invest
from .models import StockInfo
from .serializers import StockInfoSerializer
from .collectstock import get_stock_data

# Create your views here.


@permission_classes([IsAuthenticated, ])
@authentication_classes([JSONWebTokenAuthentication, ])
@api_view(['GET'])
def commodities(request):
    if request.method == 'GET':
        name = request.GET.get("name")
        from_date = request.GET.get("from_date")
        to_date = request.GET.get("to_date")
        data = invest.get_commodities(name, from_date, to_date)
        return HttpResponse(data)
    else:
        return HttpResponse(status=405)


@permission_classes([IsAuthenticated, ])
@authentication_classes([JSONWebTokenAuthentication, ])
@api_view(['GET'])
def indices(request):
    if request.method == 'GET':
        name = request.GET.get("name")
        country = request.GET.get("country")
        from_date = request.GET.get("from_date")
        to_date = request.GET.get("to_date")
        data = invest.get_indices(name, country, from_date, to_date)
        return HttpResponse(data)
    else:
        return HttpResponse(status=405)


@permission_classes([IsAuthenticated, ])
@authentication_classes([JSONWebTokenAuthentication, ])
@api_view(['GET'])
def currency_cross(request):
    if request.method == 'GET':
        currency_cross = request.GET.get("name")
        from_date = request.GET.get("from_date")
        to_date = request.GET.get("to_date")
        data = invest.get_currency_cross(currency_cross, from_date, to_date)
        return HttpResponse(data)
    else:
        return HttpResponse(status=405)


@permission_classes([IsAuthenticated, ])
@authentication_classes([JSONWebTokenAuthentication, ])
@api_view(['GET'])
def stock_table(request):
    if request.method == 'GET':
        # stocks = StockInfo.objects.all()
        # page = request.GET.get("page")
        # paginator = Paginator(stocks, 10)
        # data = paginator.get_page(page)
        index = request.GET.get("index")
        filter_stocks = StockInfo.objects.filter(index=index)
        serializer = StockInfoSerializer(filter_stocks, many=True)
        return Response(serializer.data)
    else:
        return HttpResponse(status=405)


def test(request):
    # get_stock_data("nasdaq", "united states", "NASDAQ")
    KOSPI = [
        '삼성전자', 'SK하이닉스', '삼성바이오로직스', 'NAVER', '셀트리온', 'LG화학', '현대자동차', 'LG생활건강', '삼성SDI', '삼성물산',
        '현대모비스', 'SK텔레콤', '엔씨소프트', '포스코', '카카오', '신한지주', 'KB금융', '한국전력공사', '삼성에스디에스', '기아자동차',
        'SK', '케이티앤지', 'LG', '아모레퍼시픽', 'SK이노베이션', 'LG전자', '삼성생명', '삼성화재해상보험', '넷마블', 'S-Oil'
    ]  # KOSPI

    KOSDAQ = ["셀트리온헬스케어", "에이치엘비", "펄어비스", "셀트리온제약", "케이엠더블유", "CJ ENM", "씨젠", "스튜디오드래곤", "휴젤", "SK머티리얼즈", "제넥신", "에코프로비엠", "헬릭스미스", "파라다이스", "메지온",
              "알테오젠", "원익IPS", "컴투스", "코미팜", "아이티엠반도체", "솔브레인", "리노공업", "에스에프에이", "고영", "NICE평가정보", "RFHIC", "SKC코오롱PI", "에이치엘비생명과학", "신라젠", "젬백스"]

    NASDAQ = [
        'Microsoft', 'Apple', 'Amazon.com', 'Alphabet', 'Facebook', 'Intel', 'PepsiCo', 'Cisco Systems', 'Comcast', 'NVIDIA',
        'Netflix,', 'Adobe', 'Costco Wholesale', 'Amgen', 'PayPal', 'ASML', 'Charter Communications', 'T-Mobile', 'Broadcom', 'Texas Instruments',
        'Tesla', 'Gilead Sciences', 'Starbucks', 'QUALCOMM', 'Mondelez International', 'Fiserv', 'Vertex Pharmaceuticals', 'Intuit', 'JD.com', 'Intuitive Surgical'
    ]  # NASDAQ
    stocks = StockInfo.objects.all()
    for stock in stocks:
        if stock.name in KOSPI:
            stock.index = "KOSPI"
            stock.save()
        elif stock.name in KOSDAQ:
            stock.index = "KOSDAQ"
            stock.save()
        elif stock.name in NASDAQ:
            stock.index = "NASDAQ"
            stock.save()

    return HttpResponse(status=200)


@permission_classes([IsAuthenticated, ])
@authentication_classes([JSONWebTokenAuthentication, ])
@api_view(['GET'])
def stock_detail(request):
    if request.method == 'GET':
        code = request.GET.get("code")
        country = request.GET.get("country")
        data = invest.get_stock_detail(code, country)
        stockinfo = get_object_or_404(StockInfo, code=code)
        print(stockinfo)
        serializer = StockInfoSerializer(stockinfo)
        result = {}
        result["base"] = data
        result["predict"] = serializer.data
        return Response(result)
    else:
        return HttpResponse(status=405)
