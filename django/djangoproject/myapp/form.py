from django import forms
from .models import Project

class CreatNewTask(forms.Form):
  title = forms.CharField(label="Task tittle")
  description = forms.CharField(label="Task description", widget=forms.Textarea, required=False)
  
class CreateNewProject(forms.Form):
  name = forms.CharField(label="Project name")