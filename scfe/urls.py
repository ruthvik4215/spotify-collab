from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('join', index),
    path('host', index),
    path('music', index),
    path('room/<str:roomCode>', index)
]
