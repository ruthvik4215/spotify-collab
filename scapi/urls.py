from django.urls import path
from . import views

urlpatterns = [
    path('all', views.RoomView.as_view()),
    path('hostroom', views.HostRoomView.as_view()),
    path('broadcastroom', views.BroadCastRoom.as_view())
]
