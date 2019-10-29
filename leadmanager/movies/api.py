from movies.models import Movie
from rest_framework import viewsets, permissions
from .serializers import MovieSerializer

# Movie Viewset


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MovieSerializer
