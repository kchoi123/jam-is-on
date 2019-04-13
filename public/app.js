$(function() {
    //dropdown for sign up form

    $(document).ready(function() {
        $('select').formSelect();

        // Initialize profile modal in musicianPage.handlebars.
        $('.modal').modal();
    });

    //sidenav to work
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, options);
    });

    $('.sidenav').sidenav();

    $("#find-my-bands").on('click', function() {
        console.log("\nSending request...\n")
        
        $.get("/findmybands").then(function (res) {
        var bandBox = $("#bands-box");

        console.log("\nRequest recieved...\n\n")
        console.log(res);

        // for (var i = 0; i < 20; i++) {
        //     var genres = res[i].primary_genre;
        //     var instruments = res[i].primary_genre;
        //     var bandString = "";


        //     if (res[i].secondary_genre) {genres += ", " + res[i].secondary_genre}
        //     if (res[i].secondary_instrument) {instruments += ", " + res[i].secondary_instrument}

        //     bandString += '<li class="collection-item avatar">'
        //     + '<img src= ' + res[i].profile_pic + ' alt="" class="thumbnail">'
        //     + '<span class="title band-name">' + res[i].name + '</span>'
        //     + '<p class="genres">Genres: '  + genres + '</p>'
        //     + '<p class="instruments">Instruments: ' + instruments + '</p>'
        //     + '<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a></li>'

        //     bandBox.append(bandString);
        // }
    })
  })
});