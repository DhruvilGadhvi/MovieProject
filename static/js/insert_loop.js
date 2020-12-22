$(document).ready(function () {
    $.post("/mymovies_app/", function (response) {
        // alert(response);
        // console.log(response);

        //async & await method
        // const loadchar = async () =>{
        //     let array = await response;
        //     // displaydata(array);
        // };

        // loadchar();
        // $("#img0").attr('src', 'https://image.tmdb.org/t/p/w500/' + (response.results[4].poster_path)).height(250).width(250)
        // $("#original_title0").append(response.results[4].original_title)
        // $("#popularity0").append(response.results[4].popularity)
        // $("#overview0").append(response.results[4].overview)

        //using .each with counter
        // var index = 0;
        // $.each(response, function (i, value) {
        //     // console.log(value)
        //     // console.log(index,value.title)
        //     $("#name" + index).append(value.title)
        //     $("#date" + index).append(value.release_date)
        //     $("#overview" + index).append(value.overview)
        //     $("#popularity" + index).append(value.popularity)
        //     $("#img" + index).attr('src', 'https://image.tmdb.org/t/p/w500/' + (value.poster_path)).height(250).width(250)
        //     index++;
        // });

        //using loop
        // for (index = 0; index < 20; index++) {
        //     // console.log(value_new.results[index].title);
        //     $("#name" + index).append(response.movie_data[index].title)
        //     $("#date" + index).append(response.movie_data[index].release_date)
        //     $("#overview" + index).append(response.movie_data[index].overview)
        //     $("#popularity" + index).append(response.movie_data[index].popularity)
        //     $("#img" + index).attr('src', 'https://image.tmdb.org/t/p/w500/' + (response.movie_data[index].poster_path))
        // };

        //sort data 
        var array = [];
        $.each(response, (index, value) => {
            array.push(value);
            // console.log(value);
        });

        array.sort(function (a, b) {
            return b.popularity - a.popularity;
        });

        //search movie
        // var searchbar = document.getElementById("search");
        // // console.log(searchbar);

        // searchbar.addEventListener('keyup', (e) => {
        //     const searchstring = e.target.value;
        //     console.log(searchstring);
        //     const filteredchar = array.filter(character => {
        //         // return character.title;
        //         return character.title.includes(searchstring);
        //     });
        //     // console.log(filteredchar);
        //     displaydata(filteredchar);
        //     // $.each(filteredchar,(index,value)=>{
        //     //     console.log(value);
        //     //     $("#fil").append(`<div class="card card1">
        //     //     <img src='https://image.tmdb.org/t/p/w500/${value.poster_path}' alt="No photo">
        //     //     <div class="descriptions">
        //     //         <h1>'${value.title}'</h1>
        //     //         <p>
        //     //             '${value.overview}'
        //     //             <h5>Popularity:'${value.popularity}'</h5>
        //     //         </p>
        //     //     </div>
        //     //     <h5>Popularity:'${value.popularity}'</h5>
        //     // </div>`)
        //     // })
        // });



        const displaydata = (char) => {
            console.log(char);

            //Appending
            $.each(char, function (index, value) {
                console.log(value);
                // console.log(value.popularity);
                // console.log(value.overview);

                // var img=$(this).attr('src', 'https://image.tmdb.org/t/p/w500/' + (response.results[index].poster_path));
                // console.log(img[0])
                // console.log(value.poster_path)
                
                //For index.html
                //     $("#input").append(`<div class="card card1">
                //     <img src='https://image.tmdb.org/t/p/w500/${value.poster_path}' alt="No photo">
                //     <div class="descriptions">
                //         <h1>'${value.title}'</h1>
                //         <p>
                //             '${value.overview}'
                //             <h5>Popularity:'${value.popularity}'</h5>
                //         </p>
                //     </div>
                //     <h5>Popularity:'${value.popularity}'</h5>
                // </div>`)

                //For scam1.html
                $("#input").append(`<div class="col mb-3" style="padding:3px;">
                <div class="card h-100" style="background-color:rgb(26,26,26);">
                    <img src="https://image.tmdb.org/t/p/w500/${value.poster_path}" class="card-img-top" style="height:40vh;" alt="..." />
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
        };

        displaydata(array);
    });

});