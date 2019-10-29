from rest_framework import routers
from .api import LeadViewSet

router = routers.DefaultRouter()
router.register('api/movies', LeadViewSet, 'movies')

urlpatterns = router.urls
