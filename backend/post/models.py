from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    created_datetime = models.DateTimeField(auto_created=True)
    title = models.CharField(max_length=255)
    content = models.CharField(max_length=255)
