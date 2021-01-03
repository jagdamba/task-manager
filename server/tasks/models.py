from django.db import models
from datetime import datetime
from django.contrib.auth.models import User
# Create your models here.


class Base(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(
        User, null=True, blank=True, on_delete=models.SET_NULL, related_name="basecreated")
    modified_by = models.ForeignKey(
        User, null=True, blank=True, on_delete=models.SET_NULL, related_name="basemodified")


class Category(Base):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Tasks(Base):
    name = models.TextField()
    task_category = models.ForeignKey(Category, null=True, blank=True, on_delete=models.CASCADE)
    is_completed = models.BooleanField(default=False)

    def __str__(self):
        return self.name
