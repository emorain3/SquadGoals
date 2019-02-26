from django.urls import path
from rest_framework import routers
from .api import *
# from .views import *


router = routers.DefaultRouter()
router.register('api/appuser', AppUserViewset)
router.register('api/goal', GoalViewset)
# How do I make this route CRUD descriptive? Where it takes in the id of a specific goal too?
router.register('api/goal/subgoal', SubgoalViewset) 

urlpatterns = [
    path('', router.urls)
]
