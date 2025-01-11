from django.contrib import admin
from django.urls import path, include
from django.urls import re_path as url
from .views import *
from api.views import *
from rest_framework import routers


urlpatterns = [
   path('users',UsersView.as_view(),name='anything'),
   path('login',UserLoginView.as_view(),name='anything'),
]
