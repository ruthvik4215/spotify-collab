from django.urls import path
from . import views

urlpatterns = [
    path('home/', views.main, name="home")
]
