from django.urls import path
from . import views

urlpatterns = [
  path('', views.index, name="home"),
  path('about', views.about, name="about"),
  path('hello/<str:username>', views.hello, name="hello"),
  path('projects', views.projects, name="projects"),
  path('tasks/', views.tasks, name="tasks"),
  path('create_task', views.create_task, name="create task"),
  path('create_project', views.create_project, name="create project"),
]