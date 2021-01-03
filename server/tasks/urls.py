from django.urls import include,path
from rest_framework import routers 
from . import views


router = routers.DefaultRouter()
router.register(r'task',views.TaskViewset)
router.register(r'category',views.CategoryViewset)
router.register(r'login',views.LoginViewset)

urlpatterns = [
    path('', include(router.urls)),
]