from django.db import models
import random
import string

def generateUniqueCode():
    codeLength = 15
    uniqueString = string.digits + string.ascii_lowercase

    # use search algorithm for better result and faster performance.
    while True:
        code = ''.join(random.choices(uniqueString, k=codeLength))
        if(Room.objects.filter(code=code).count() == 0):
            break
    return code


# Create your models here.
class Room(models.Model):
    code = models.CharField(max_length=8, default=generateUniqueCode, unique=True)
    host = models.CharField(max_length=50, unique=True)
    canGuestPause = models.BooleanField(null=False, default=False)
    votesToSkip = models.IntegerField(null=False, default=0)
    createdAt = models.DateTimeField(auto_now_add=True)
