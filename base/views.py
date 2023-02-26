from django.shortcuts import render , redirect
from .models import Contact
from blog.models import Blog

# Create your views here.
def home(request):
    return render(request , 'Base/index.html')

def about(request):
    return render(request , 'Base/about.html')

def portfoilio(request):
    return render(request , 'Base/portfolio.html')

def seo(request):
    return render(request , "Base/seo.html")
def team(request):
    return render(request , 'Base/team.html')
def contact(request):
    if request.method == 'POST':
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        email = request.POST['email']
        number = request.POST['number']
        message = request.POST['message']
        contact = Contact.objects.create(
            first_name = first_name ,
            last_name = last_name,
            email = email,
            phone = number , 
            message = message
             )
        contact.save()
   
    return render(request , 'Contact/contact.html')

