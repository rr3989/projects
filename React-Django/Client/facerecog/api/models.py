from django.db import models

# Create your models here.

class Users(models.Model):
    
    Name = models.CharField(max_length=255, null='true')
    Age = models.CharField(max_length=5, null='true')
    Gender = models.CharField(max_length=5, null='true') 
    Balance = models.CharField(max_length=10, null='true')

class UserLogin(models.Model):
    
    username = models.CharField(max_length=20, null='true')
    password = models.CharField(max_length=20, null='true')
    confirmpassword = models.CharField(max_length=20, null='true')