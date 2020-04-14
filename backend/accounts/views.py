from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import check_password
from django.http import JsonResponse, HttpResponse
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_jwt.settings import api_settings
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from .serializers import UserSerializer

# Create your views here.

jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
jwt_decode_handler = api_settings.JWT_DECODE_HANDLER


@api_view(['POST'])
@permission_classes([AllowAny, ])
def register(request):
    global jwt_payload_handler, jwt_encode_handler

    # validation username conflict
    username = request.data.get('username')
    users = get_user_model().objects.filter(username__exact=username)
    if len(users) > 0:
        return HttpResponse(status=409)

    # password validation will be needed
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        password = request.data.get('password')
        user = serializer.save()
        user.set_password(password)
        user.save()

        payload = jwt_payload_handler(user)
        token = jwt_encode_handler(payload)

        user_id = user.id

        return JsonResponse({'token': token, 'id': user_id})
    return HttpResponse(status=400)


@api_view(['POST'])
@permission_classes([AllowAny, ])
def login(request):
    global jwt_payload_handler, jwt_encode_handler

    username = request.data.get('username')
    password = request.data.get('password')

    user = get_object_or_404(get_user_model(), username=username)
    if check_password(password, user.password) == True:
        payload = jwt_payload_handler(user)
        token = jwt_encode_handler(payload)

        user_id = user.id

        return JsonResponse({'token': token, 'id': user_id})
    return HttpResponse(status=400)


@api_view(['GET'])
@permission_classes([IsAuthenticated, ])
@authentication_classes([JSONWebTokenAuthentication, ])
def check(request):
    global jwt_decode_handler

    token = request.headers.get('Authorization', None)
    if token == None:
        return HttpResponse(status=401)

    token = token.split(' ')[-1]
    user = jwt_decode_handler(token)

    user_id = user.get('user_id')
    username = user.get('username')
    return JsonResponse({'id': user_id, 'username': username})
