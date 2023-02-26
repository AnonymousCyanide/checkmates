from django.contrib import admin
from .models import Contact , Appointment , TimeOfDay , Service
# Register your models here.

admin.site.register(Contact)
admin.site.register(Appointment)
admin.site.register(TimeOfDay)
admin.site.register(Service)