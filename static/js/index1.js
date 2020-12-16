$(document).ready(function () {
    $.post("/mymovies_app/", function (response) {
        // alert(response);
        // console.log(response[1]);
        // $("#img0").attr('src', 'https://image.tmdb.org/t/p/w500/' + (response.results[4].poster_path)).height(250).width(250)
        // $("#original_title0").append(response.results[4].original_title)
        // $("#popularity0").append(response.results[4].popularity)
        // $("#overview0").append(response.results[4].overview)

        //using .each with counter
        var index = 0;
        $.each(response, function (i, value) {
            // console.log(value)
            // console.log(index,value.title)
            $("#name" + index).append(value.title)
            $("#date" + index).append(value.release_date)
            $("#overview" + index).append(value.overview)
            $("#popularity" + index).append(value.popularity)
            $("#img" + index).attr('src', 'https://image.tmdb.org/t/p/w500/' + (value.poster_path)).height(250).width(250)
            index++;
        });

        //using loop
        // for (index = 0; index < 20; index++) {
        //     // console.log(value_new.results[index].title);
        //     $("#name" + index).append(response.movie_data[index].title)
        //     $("#date" + index).append(response.movie_data[index].release_date)
        //     $("#overview" + index).append(response.movie_data[index].overview)
        //     $("#popularity" + index).append(response.movie_data[index].popularity)
        //     $("#img" + index).attr('src', 'https://image.tmdb.org/t/p/w500/' + (response.movie_data[index].poster_path))
        // };


        //Appending
        // $.each(response, function (index, value) {
        //     // console.log(value.original_title);
        //     // console.log(value.popularity);
        //     // console.log(value.overview);

        //     // var img=$(this).attr('src', 'https://image.tmdb.org/t/p/w500/' + (response.results[index].poster_path));
        //     // console.log(img[0])
        //     // console.log(value.poster_path)
        //     $(".wrapper").append(`<div class="card">
        //         <img src='https://image.tmdb.org/t/p/w500/${value.poster_path}' alt="No photo">
        //         <div class="descriptions">
        //             <h1>'${value.title}'</h1>
        //             <p>
        //                 '${value.overview}'
        //             </p>
        //         </div>
        //     </div>`)
        // });
    });

});