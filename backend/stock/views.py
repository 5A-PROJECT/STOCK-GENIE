from django.shortcuts import get_object_or_404
from django.http import JsonResponse, HttpResponse
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from .serializers import StockSerializer
from .models import Stock


@api_view(['PATCH', 'DELETE'])
@permission_classes([IsAuthenticated, ])
@authentication_classes([JSONWebTokenAuthentication, ])
def stock(request, sc_id):
    sc = get_object_or_404(Stock, id=sc_id)
    pf = sc.portfolio

    if request.method == 'PATCH':
        serializer = StockSerializer(instance=sc, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return JsonResponse({'id': sc_id})
    elif request.method == 'DELETE':
        sc.delete()
        return JsonResponse({'id': sc_id})

    return HttpResponse(status=405)
