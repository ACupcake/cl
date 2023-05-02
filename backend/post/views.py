from backend.post.models import Post
from rest_framework import viewsets

from backend.post.serializers import PostSerializer

class PostViewSet(viewsets.ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
