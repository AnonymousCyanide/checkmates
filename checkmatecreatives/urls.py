
from django.contrib import admin
from django.urls import path , include
from base import urls as base_urls
from blog import urls as blog_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include(base_urls)),
    path('',include(blog_urls)),
]
