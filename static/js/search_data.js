$(document).ready(function () {
    $("#search_button").on("click", function () {
        value = $("#search").val()
        console.log(value);
        $.post(`/mymovies_app/searchbar/?search=${value}`, function (response) {
            console.log(response);
        });
    });
});