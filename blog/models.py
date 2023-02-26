from django.db import models
from ckeditor.fields import RichTextField
# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.name
STATUS = (
    (0,"Draft"),
    (1,"Publish")
)
class Blog(models.Model):
    title = models.CharField(max_length=100)
    title_image = models.ImageField(upload_to='static/blogimgs' ,default= 'static/blogimgs/mf9.png')
    read_time = models.IntegerField(default=15)
    category = models.ForeignKey(Category , on_delete= models.SET_NULL , null=True , blank=True)
    author = models.CharField(max_length=100)
    content = RichTextField(config_name='default')
    updated_on = models.DateTimeField(auto_now= True)
    created_on = models.DateTimeField(auto_now_add=True)
    read_by = models.CharField(max_length=5 , default='10k')
    
    def __str__(self) -> str:
        return str(self.title) + ' - ' + str(self.category.name)