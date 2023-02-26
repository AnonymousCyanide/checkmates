from django.db import models
from datetime import date
from django.core.validators import MaxValueValidator, MinValueValidator
# Create your models here.

class Contact(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length = 60)
    phone = models.CharField(max_length=12)
    message = models.CharField(max_length= 400)
    date = models.DateTimeField( auto_now_add=True)

    def __str__(self) -> str:
        return self.email + ' - ' + str(self.date)

class TimeOfDay(models.Model):
    hours = models.IntegerField(
        default=1,
        validators=[
            MaxValueValidator(12),
            MinValueValidator(1)
        ]
     )
    mins = models.IntegerField(
        default=1,
        validators=[
            MaxValueValidator(59),
            MinValueValidator(0)
        ]
     )

    def __str__(self) -> str:
        return f'{self.hours} : {self.mins}'
class Service(models.Model):
    service_name = models.CharField(max_length=100)
    service_description = models.TextField() 

    def __str__(self) -> str:
        return f'{self.service_name}' 
class Appointment(models.Model):
   
    service = models.ForeignKey(Service, on_delete=models.SET_NULL , null=True , blank=True)
    day = models.DateField(default=date.today())
    time = models.ForeignKey(TimeOfDay, on_delete=models.SET_NULL , null=True , blank=True)
    #time = models.CharField(max_length=10, choices=TIME_CHOICES, default="3 PM")
    class Meta:
        unique_together = ('time', 'day')
    def __str__(self):
        return f"{self.service} | day: {self.day} | time: {self.time}"

