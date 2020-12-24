from django.db import models

# Create your models here.
class Movie_Data(models.Model):
    movie_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    poster_path = models.CharField(max_length=100)
    overview = models.CharField(max_length=1000)
    popularity = models.FloatField()

    def __str__(self):
        return self.title

class Searched_Movies(models.Model):
    movie_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    poster_path = models.CharField(max_length=100)
    overview = models.CharField(max_length=1000)
    popularity = models.FloatField()

    def __str__(self):
        return self.title

    # class Meta:
    #     app_label = 'mymovies_app' 