# Generated by Django 4.1.3 on 2023-01-08 14:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_alter_blog_title_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='read_time',
            field=models.IntegerField(default=15),
        ),
    ]