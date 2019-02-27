from rest_framework import serializers
from  .models import *

#  This file is used to convert Models to native Python data type

class AppUserSerializer(serializers.ModelSerializer):
    # goals = GoalSerializer(many=True, read_only=True)
    class Meta:
        model = AppUser
        fields = '__all__'


class GoalSerializer(serializers.ModelSerializer):
    collaborators = AppUserSerializer(many=True, read_only=True)
    class Meta:
        model = Goal
        fields = {"id", "title", "description", "collaborators"}


class SubgoalSerializer(serializers.ModelSerializer):
    collaborators = AppUserSerializer(many=True, read_only=True)
    goal = GoalSerializer(many=False, read_only=True)
    class Meta:
        model = Subgoal
        fields = {"id", "title", "description", "collaborators", "associatedGoal", "isComplete"}


