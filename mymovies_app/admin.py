from django.contrib import admin
from .models import Movie_Data, Searched_Movies


# Register your models here.

admin.site.register(Movie_Data)
admin.site.register(Searched_Movies)