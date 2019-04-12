$(function() {
    //dropdown for sign up form


    $(document).ready(function() {
        $('select').formSelect();
    });


    // $("#newUser").on("click", function(event) {
    //     event.preventDefault();

    //     console.log("test1");

    // });

    //sidenav to work
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, options);
    });

    $('.sidenav').sidenav();

    // $("#createAccount").on("click", function(event) {
    //     event.preventDefault();

    //     var newUser = {
    //         name: $("#firstName").val().trim(),
    //         profile_pic: $("#lastName").val().trim(),
    //         email: $("#username").val().trim(),
    //         password: $("#password").val().trim(),
    //         location: $("#firstName").val().trim(),
    //         music_link: $("#lastName").val().trim(),
    //         musician: $("#username").val().trim(),
    //         primary_instrument: $("#password").val().trim(),
    //         secondary_instrument: $("#firstName").val().trim(),
    //         primary_genre: $("#lastName").val().trim(),
    //         secondary_genre: $("#username").val().trim()
    //     }

    //     $.post("/signup", newUser).then(function(res) {
    //         var bandBox = $("#band-cards");

    //         for (var i = 0; i < res.length; i++) {
    //             var genres = res[i].primary_genre;
    //             var instruments = res[i].primary_genre;
    //             var bandString = "";


    //             if (res[i].secondary_genre) { genres += ", " + res[i].secondary_genre }
    //             if (res[i].secondary_instrument) { instruments += ", " + res[i].secondary_instrument }

    //             bandString += '<li class="collection-item avatar">' +
    //                 '<img src= ' + res[i].profile_pic + ' alt="" class="thumbnail">' +
    //                 '<span class="title band-name">' + res[i].name + '</span>' +
    //                 '<p class="genres">Genres: ' + genres + '</p>' +
    //                 '<p class="instruments">Instruments: ' + instruments + '</p>' +
    //                 '<a href="#!" class="secondary-content"><i class="material-icons">grade</i></a></li>'

    //             bandBox.append(bandString);

    //             res.render()


    //         }
    //     });
    // });

});