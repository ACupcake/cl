from django.urls import path, include
from post.urls import router as routerPost

urlpatterns = [
    path("", include(routerPost.urls)),
]
