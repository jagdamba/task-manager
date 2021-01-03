from django.contrib.auth.models import User
from .serializers import CategorySerializer,UserSerializer,TaskSerializer
from rest_framework import viewsets,pagination
from django.http import HttpResponse, JsonResponse
from .models import Category, Tasks
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from django_filters.rest_framework import DjangoFilterBackend

class TaskViewset(viewsets.ModelViewSet):
    queryset = Tasks.objects.all()
    serializer_class = TaskSerializer
    authentication_classes = (TokenAuthentication,)
    pagination_class = pagination.LimitOffsetPagination
    filter_backends = (DjangoFilterBackend,)   

    def create(self, request, *args, **kwargs):
        params = request.data if request.data else request.POST
        category = params.get('task_category', None)
        kwargs = {
            'task':  params.get('task', ''),
            'is_completed':  params.get('is_completed', False),
            'created_by': request.user.id
        }

        if not kwargs.get('task'):
            return JsonResponse({"message": "Please Provide Task ..."}, status=400)
        if category:
            kwargs['task_category'] = Category.objects.get(id=category)

        try:
            task = self.get_serializer(data=kwargs)
            task.is_valid(raise_exception=True)
            task_obj = task.save()
            return JsonResponse({"message": "Todo Task Added Successfully...", "data": task.data}, status=200)
        except Exception as e:
            return JsonResponse({"message": str(e)}, status=400)

    def update(self, request, pk=None, *args, **kwargs):
        try:
            params = request.data if request.data else request.POST
            if not params.get('task'):
                return JsonResponse({"message": "Please Provide task ..."}, status=400)
            todo = Todo.objects.get(pk=pk)
            todo.task = params.get('task', '')
            category = params.get('task_category', None)
            if category:
                todo.task_category = Category.objects.get(id=category)
            todo.is_completed = params.get('is_completed', False)
            todo.modified_by = request.user
            todo.save()
            tododata = self.serializer_class(todo).data
            return JsonResponse({"message": "Todo Task Updated Successfully...", "data": tododata}, status=200)
        except Exception as e:
            return JsonResponse({"message": str(e)}, status=400)
    
    def destroy(self, request, pk=None, *args, **kwargs):
        try:
            todo = Todo.objects.filter(id=pk).first()
            if todo:
                todo.delete()
                return JsonResponse({"message": "Todo Task deleted Successfully...", "data": {}}, status=200)
            else:
                return JsonResponse({"message": "No Such Task...", "data": {}}, status=404)
        except Exception as e:
            return JsonResponse({"message": str(e)}, status=400)


class CategoryViewset(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    authentication_classes = (TokenAuthentication,)
    pagination_class = pagination.LimitOffsetPagination
    filter_backends = (DjangoFilterBackend,)   

    def create(self, request, *args, **kwargs):
        params = request.data if request.data else request.POST
        kwargs = {
            'name':  params.get('name', ''),
            'created_by': request.user.id
        }
        if not kwargs.get('name'):
            return JsonResponse({"message": "Please Provide category Name ..."}, status=400)

        try:
            category = self.get_serializer(data=kwargs)
            category.is_valid(raise_exception=True)
            category_obj = category.save()
            return JsonResponse({"message": "category Added Successfully...", "data": category.data}, status=200)
        except Exception as e:
            return JsonResponse({"message": str(e)}, status=400)

    def update(self, request, pk=None, *args, **kwargs):
        try:
            params = request.data if request.data else request.POST
            if not params.get('name'):
                return JsonResponse({"message": "Please Provide category Name ..."}, status=400)
            category = Category.objects.get(pk=pk)
            category.name = params.get('name', '')
            category.modified_by = request.user
            category.save()
            categorydata = self.serializer_class(category).data
            return JsonResponse({"message": "Category Updated Successfully...", "data": categorydata}, status=200)
        except Exception as e:
            return JsonResponse({"message": str(e)}, status=400)


class LoginViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    # default user will get or create while login so no need to handle in frontend for now
    def create(self, request, *args, **kwargs):
        user, created = User.objects.get_or_create(
            username="jagdamba", first_name="jagdamba", last_name="gupta")
        if created:
            user.is_superuser = True
            user.is_staff = user.save()
        token, _ = Token.objects.get_or_create(user=user)
        return JsonResponse({"message": "User Added Successfully...", "user": user.username, "token": token.key}, status=200)
