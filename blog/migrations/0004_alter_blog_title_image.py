# Generated by Django 4.1.3 on 2023-01-08 13:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_blog_title_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='title_image',
            field=models.ImageField(default='static/blogimgs/mf9.png', upload_to='static/blogimgs'),
        ),
    ]