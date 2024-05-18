from django.http import JsonResponse
from .models import * 
from .serializers import userSerializer 
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET', 'POST'])
def user_list(request): 

    if request.method == 'GET': 
        users = user.objects.all()
        serializer = userSerializer(users, many = True)
        return JsonResponse({"user":serializer.data})
    
    if request.method == 'POST': 
        serializer = userSerializer(data=request.data)
        if serializer.is_valid(): 
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_created)

@api_view(['GET', 'PUT', 'DELETE'])
def user_details(request, username):

    try: 
        userObj = user.objects.get(pk=username)
    except user.DoesNotExist: 
        return Response(status= status.HTTP_404_NOT_FOUND)

    if request.method == 'GET': 
        serializer = userSerializer(userObj)
        return Response(serializer.data)

    elif request.method == "PUT": 
        pass
    
    elif request.method == 'DELETE': 
        pass