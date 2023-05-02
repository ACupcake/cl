from rest_framework import serializers

from backend.post.models import Post

class PostSerializer(serializers.ModelSerializer):
        class Meta:
            model = Post
            fields = ['username', 'created_datetime', 'title', 'content']