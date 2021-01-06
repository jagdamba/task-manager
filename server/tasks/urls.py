from django.urls import include,path
from rest_framework import routers 
from . import views


router = routers.DefaultRouter()
router.register(r'todo',views.TaskViewset)
router.register(r'bucket',views.CategoryViewset)
router.register(r'login',views.LoginViewset)

urlpatterns = [
    path('', include(router.urls)),
]