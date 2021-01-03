from django.contrib import admin
from .models import *

# Register your models here.
class TasksAdmin(admin.ModelAdmin):
    list_per_page=25
    list_display=('id','name','task_category','is_completed','created','created_by')
    list_filter=("is_completed",)

class CategoryAdmin(admin.ModelAdmin):
    list_per_page=25
    list_display=("id", "name", "created_by")

admin.site.register(Tasks,TasksAdmin)
admin.site.register(Category,CategoryAdmin)