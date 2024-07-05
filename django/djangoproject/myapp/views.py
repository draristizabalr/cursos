from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from .form import CreatNewTask, CreateNewProject
from .models import Project, Task

# Create your views here.
def index(request):
    return render(request, 'index.html')

def hello(request, username):
    return HttpResponse('<h1>Hello %s</h1>' % username)

def about(request):
    return HttpResponse('<h1>About Page</h1>')

def projects(request):
  projects = Project.objects.all()
  return render(request, 'projects.html', {
    'projects': projects
  })
  
def tasks(request):
  task = Task.objects.all()
  return render(request, 'tasks.html', {
    'tasks': task
  })
  
def create_task(request):
  if request.method == 'GET':
    # show interface
    return render(request, 'create_task.html', {
      'form': CreatNewTask()
    })
  else:
    title = request.POST['title']
    description = request.POST['description']
    
    print(title)
    print(description)
    Task.objects.create(title=title, description=description, project_id=2)
    return redirect('tasks')
    
def create_project(request):
  if request.method == 'GET':
    return render(request, 'create_project.html', {
      'form': CreateNewProject()
    })
  else:
    name = request.POST['name']
    
    print(name)
    Project.objects.create(name=name)
    return redirect('projects')