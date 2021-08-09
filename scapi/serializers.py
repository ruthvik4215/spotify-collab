from rest_framework import serializers
from .models import Room


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'code', 'host', 'canGuestPause',
                  'votesToSkip', 'createdAt')


class HostRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('canGuestPause', 'votesToSkip')
