from django.urls import path
from rest_framework import routers
from .api import *
# from .views import *


router = routers.DefaultRouter()
router.register('api/appuser', AppUserViewset, 'appuser')
router.register('api/goal', GoalViewset, 'goal')
# How do I make this route CRUD descriptive? Where it takes in the id of a specific goal too?
router.register('api/goal/<int:id>/subgoal', SubgoalViewset, 'subgoal') 

urlpatterns = router.urls

print("Printing Routes...")
for url in router.urls: 
    print(url)
print("\n")

# Questions: 
#  - What methods are supported for sending data to my db? Body? URL Params?
#  - How do I implement my nested models?