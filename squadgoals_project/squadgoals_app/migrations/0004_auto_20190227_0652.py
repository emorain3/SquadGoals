# Generated by Django 2.1.5 on 2019-02-27 06:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('squadgoals_app', '0003_goal_subgoal'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appuser',
            name='contact',
            field=models.CharField(blank=True, max_length=300),
        ),
        migrations.AlterField(
            model_name='goal',
            name='collaborators',
            field=models.ManyToManyField(related_name='collaborators', to='squadgoals_app.AppUser'),
        ),
        migrations.AlterField(
            model_name='subgoal',
            name='description',
            field=models.CharField(blank=True, max_length=300),
        ),
    ]
