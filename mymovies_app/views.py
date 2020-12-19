import requests
import json
from django.http import HttpResponse
from django.shortcuts import render
from .models import Movie_Data
from django.views.decorators.csrf import csrf_exempt



@csrf_exempt
def index(request):
    if request.method == 'GET':
        return render(request, 'scam1.html')

    # save to data to database
    '''response = requests.get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=4d8f107a19366ff018ab05901d44eb84&language=en-US&page=1')
    json_str = json.dumps(response.json(), indent=2)
    data = json.loads(json_str)
    for i in range(len(data['results'])):
        movie_id = data['results'][i]['id']
        title = data['results'][i]['title']
        overview = data['results'][i]['overview']
        popularity = data['results'][i]['popularity']
        poster_path = data['results'][i]['poster_path']

        if not Movie_Data.objects.filter(title=title).exists():
            Movie_Data.objects.create(
                title=title, poster_path=poster_path, overview=overview, popularity=popularity)
            print("Data Created")

            else:
                print("Data Exists...")
    movie_data = {}
    for i in range(len(data['results'])):
        movie_data[data['results'][i]['id']] = {"poster_path": data['results'][i]['poster_path'],
                                                "title": data['results'][i]['title'],
                                                "overview": data['results'][i]['overview'],
                                                "popularity": data['results'][i]['popularity'],
                                                }
    movie_data = Movie_Data.objects.all()
    context = {
        'movie_data': movie_data,
    }
    return HttpResponse("Hello")
    context = json.dumps(context.json(), indent=2)'''

    #Fetch data from database
    movie_data=Movie_Data.objects.all()
    movie_info={}
    
    for i in movie_data:
        # print(i.movie_id)
        movie_info[i.movie_id]={
            "poster_path":i.poster_path,
            "title":i.title,
            "overview":i.overview,
            "popularity":i.popularity
        }
    context=json.dumps(movie_info,indent=2)

    # print(context)
    return HttpResponse(context, content_type="application/json")
