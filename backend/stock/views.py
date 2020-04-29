from django.shortcuts import get_object_or_404
from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from .models import Stock


@api_view(['PATCH', 'DELETE'])
@permission_classes([IsAuthenticated, ])
@authentication_classes([JSONWebTokenAuthentication, ])
def stock(request, sc_id):
    sc = get_object_or_404(Stock, id=sc_id)

    if request.method == 'PATCH':
        sc.name = sc.name or request.data.get('name')
        sc.code = sc.code or request.data.get('code')
        sc.count = sc.count or request.data.get('count')
        sc.buy_price = sc.buy_price or request.data.get('buy_price')
        sc.current_price = sc.current_price or request.data.get(
            'current_price'
        )
        sc.currency = sc.currency or request.data.get('currency')
        sc.category = sc.category or request.data.get('category')
        sc.save(update_fields='__all__')
        return JsonResponse({'id': sc_id})
    elif request.method == 'DELETE':
        sc.delete()
        return JsonResponse({'id': sc_id})

    return HttpResponse(status=405)
