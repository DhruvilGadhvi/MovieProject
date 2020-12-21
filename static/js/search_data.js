$(document).ready(function () {
    value = window.location.href.split("?")[1].split("=")[1]
    console.log(value);
    $.post("/mymovies_app/searchbar/?search=" + value, function (response) {
        // console.log(response);
        $.each(response,function(index,value){
            console.log(value);
            $("#input").append(`<div class="col mb-3">
                <div class="card h-100" style="background-color:rgb(26,26,26);">
                    <img src="https://image.tmdb.org/t/p/w500/${value.poster_path}" class="card-img-top" alt="..." />
                    <div class="card-body"> 
                        <h5 class="card-title text-center" style="color:white;">'${value.title}'</h5>
                        <p class="card-text" style="color:white;">
                        '${value.overview}'
                        </p>
                        <p class="card-text" style="color:white;">
                        '${value.popularity}'
                        </p>
                    </div>
                </div>
            </div>`)
        });
        
    });

    // $("#search_button").on("click", function () {

    // });
});