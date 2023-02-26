from django.urls import path
from .views import blog_detail , blog_list
urlpatterns = [
    path('blog/<str:id>', blog_detail,name='blog_detail_page'),
     path('blog/', blog_list),
   
]