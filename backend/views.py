from django.http import JsonResponse
from django.shortcuts import render
from .models import * 
from .serializers import userSerializer 
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

#renders react app as front page 
def front(request): 
    context = {}
    return render(request, "index.html", context)

#request for getting entire user list 
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
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE'])
def user_details(request, username):
    """
    Gets account details for a specific username. 
    @param username - the username of the accounts whose information you are trying to recieve 
    """
    try: 
        userObj = user.objects.get(pk=username)
    except user.DoesNotExist: 
        return Response(status= status.HTTP_404_NOT_FOUND)

    if request.method == 'GET': 
        serializer = userSerializer(userObj)
        return Response(serializer.data)

    elif request.method == "PUT": 
        serializer = userSerializer(userObj, data=request.data)
        if serializer.is_valid(): 
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE': 
        pass

@api_view(['GET', 'POST'])
def user_conversations(request, username):
    try: 
        userObj = user.objects.get(pk= username)
    except user.DoesNotExist: 
        return Response(status=status.HTTP_404_NOT_FOUND)