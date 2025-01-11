from django.shortcuts import render
from rest_framework import *
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import *
from .models import *
from django.urls import path

# Create your views here.

class UsersView(generics.ListCreateAPIView):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer


    def get(self, request):
        detail = [ {"Name": detail.Name,"Age": detail.Age,"Gender": detail.Gender,"Balance": detail.Balance} 
        for detail in Users.objects.all()]
        return Response(detail)

    def post(self, request):

        serializer = UsersSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data)

class UserLoginView(generics.ListCreateAPIView):
    queryset = UserLogin.objects.all()
    serializer_class = UserLoginSerializer

    def get(self, request):
        detail = [ {"username": detail.username,"password": detail.password,"confirmpassword": detail.confirmpassword} 
        for detail in UserLogin.objects.all()]
        return Response(detail)

    def post(self, request):

        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return  Response(serializer.data)

    
    def get_urls(self):
        urls = super().get_urls()
        url_patterns = [path("admin_profile", self.admin_view(self.profile_view))]
        return url_patterns + urls
