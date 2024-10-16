# speedtest/urls.py
from django.urls import path
from .views import SpeedTestView

urlpatterns = [
    path('test/', SpeedTestView.as_view(), name='speed-test'),
]
