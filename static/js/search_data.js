$(document).ready(function () {
    $("#search_button").on("click", function () {
        value = $("#search").val()
        console.log(value);
        $.post("/mymovies_app/searchbar/" + value, function (response) {
            console.log(response);
        });
    });
});