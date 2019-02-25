from django.db import models

# Create your models here.



class AppUser(models.Model):
    name = models.CharField(max_length=100)
    contact = models.CharField(max_length=300, blank=True)
    # assigned_goals = models.ForeignKey(Goal)
    def __str__(self):
        # This makes the name of an instance show up as the actual name instead of the name of the model + "(#)"
        return self.name 

class Goal(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    collaborators = models.ManyToManyField(AppUser)
    def __str__(self):
        return self.title 


class Subgoal(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=300, blank=True)
    collaborators = models.ManyToManyField(AppUser)
    associatedGoal = models.ForeignKey(Goal, on_delete=models.CASCADE)
    isComplete = models.BooleanField(default=False)
    def __str__(self):
        return self.title 