from django.shortcuts import render
from .models import Blog
# Create your views here.

def blog_detail(request,id):
    blog = Blog.objects.get(id = id)
    blogs = Blog.objects.all()
    context = {
        'blog' : blog,
        'blogs' : blogs
    }
    return  render(request,'Blog/blog_detail_view.html',context)

def blog_list(request):
    blogs = Blog.objects.all()
    context = {
        'blogs' : blogs
    }
    return  render(request,'Blog/mainblog.html',context)


