# Generated by Django 4.1.3 on 2023-01-08 13:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_alter_blog_content'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='title_image',
            field=models.ImageField(default='static/blogimgs/mf9', upload_to='static/blogimgs'),
        ),
    ]
