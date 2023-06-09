from rest_framework.routers import DefaultRouter
from post.views import PostViewSet

router = DefaultRouter()
router.register(r"post", PostViewSet, basename="post")
