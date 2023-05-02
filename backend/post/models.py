from django.db import models

class Post(models.Model):
    username = models.CharField(max_length=255)
    created_datetime = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=255)
    content = models.CharField(max_length=255)
