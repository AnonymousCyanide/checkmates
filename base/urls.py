from django.urls import path
from .views import contact , home , about , portfoilio , seo , team

urlpatterns = [
    path('contact/', contact , name='contact_page'),
    path('about/', about , name='about_page'),
    path('portfolio/', portfoilio , name='portfolio_page'),
    path('seo/', seo , name='seo_page'),
    path('team/', team , name='team_page'),
    path('', home , name='home_page'),
]
