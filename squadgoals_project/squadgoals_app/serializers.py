from rest_framework import serializers
from  .models import *



class AppUserSerializer(serializers.ModelSerializer):
    # goals = GoalSerializer(many=True, read_only=True)
    class Meta:
        model = AppUser
        fields = '__all__'


class GoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Goal
        fields = '__all__'


class SubgoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subgoal
        fields = '__all__'