from django.db import models
from django.contrib.auth.models import User


class Movie(models.Model):
    movie_id = models.IntegerField()
    title = models.CharField(max_length=100, blank=False)
    watch_date = models.DateField(auto_now=False, auto_now_add=False)
    rating = models.DecimalField(max_digits=2, decimal_places=1)
    review = models.CharField(max_length=5000, blank=True)
    owner = models.ForeignKey(
        User, related_name="movies", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
