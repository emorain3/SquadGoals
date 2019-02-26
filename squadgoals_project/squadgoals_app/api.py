from rest_framework import viewsets, permissions
from  .models import *
from .serializers import *



## Establish Full CRUD for each Serializer

class AppUserViewset(viewsets.ModelViewSet):
    queryset = AppUser.objects.all()
    serializer_class = AppUserSerializer
    permission_classes = [
        permissions.AllowAny
    ]


class GoalViewset(viewsets.ModelViewSet):
    queryset = Goal.objects.all()
    serializer_class = GoalSerializer
    permission_classes = [
        permissions.AllowAny
    ]

class SubgoalViewset(viewsets.ModelViewSet):
    queryset = Subgoal.objects.all()
    serializer_class = SubgoalSerializer
    permission_classes = [
        permissions.AllowAny
    ]
