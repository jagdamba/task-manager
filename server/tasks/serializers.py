from django.contrib.auth.models import User
from .models import Category, Tasks
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer, SerializerMethodField


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'username')


class CategorySerializer(serializers.ModelSerializer):
    created_name = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ("id", "name", "created_by", "created_name", "created", "modified")

    def get_created_name(self, obj):
        return obj.created_by.username if obj.created_by else ''


class TaskSerializer(serializers.ModelSerializer):
    created_name = serializers.SerializerMethodField()
    category_name = serializers.SerializerMethodField()

    class Meta:
        model = Tasks
        fields = ("id", "name", "created_by", "created_name", "created", "modified", "category_name", "task_category", "is_completed")

    def get_created_name(self, obj):
        return obj.created_by.username if obj.created_by else ''

    def get_category_name(self, obj):
        return obj.task_category.name if obj.task_category else ''
