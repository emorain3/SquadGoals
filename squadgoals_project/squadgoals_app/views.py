from django.shortcuts import render
from django.http import HttpResponse
from .models import AppUser



# Create your views here.
def index(req):
    users = AppUser.objects.all()[0]
    return HttpResponse('users: ' + users.name)