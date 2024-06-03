from django.shortcuts import render, HttpResponse # type: ignore
# Create your views here.
from .models import Post
from django.shortcuts import get_object_or_404, render

def post_detail(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    return render(request, 'post_detail.html', {'post': post})

def home(request):
    return render(request, "./html/index.html")

def about(request):
    return render(request, './html/about.html')
def contact(request):
    return render(request, './html/form.html')
def blogs(request):
    return render(request, './html/blogs.html')  
def chatbot(request):
    return render(request, './html/chatbot1.html')
def greece(request):
    return render(request, './html/greece.html')
def bucharest(request):
    return render(request, './html/bucharest.html')  
def denmark2(request):
    return render(request, './html/denmark2.html')
def england(request):
    return render(request, './html/england.html')
def netherlands(request):
    return render(request, './html/netherlands.html')
