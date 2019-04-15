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

    $(window).on('load', function() {
        if($("#user-box").length > 0){
            $(document).ready(function(){
                $.get("/userinfo").then(function(res) {
                    console.log("Hello sir!")
                    var genres = res[0].primary_genre;
                    var instruments = res[0].primary_instrument;
        
                    if (res[0].secondary_genre) {genres += ", " + res[0].secondary_genre}
                    if (res[0].secondary_instrument) {instruments += ", " + res[0].secondary_instrument}
        
                    $('user-name').text(res[0].userName);
                    $('user-location').text(res[0].userName);
                    $('user-genre').text(genres);
                    $('user-instruments').text(instruments);
                })
            });
        }
        
    })

    $("#find-my-bands").on('click', function() {
        console.log("\nSending request...\n");

        $(this).fadeOut();
        $("#show-all-bands").fadeIn()
        
        $.get("/findmybands").then(function(res) {
        var bandContainer = $("#bands-container");
        var bandBox = $("#bands-box");
        

        console.log("\nRequest recieved...\n\n")
        console.log(res);

        for (var i = 0; i < res.length; i++) {
            var genres = res[i].primary_genre;
            var instruments = res[i].primary_instrument;

            var bandString = '';

            if (res[i].secondary_genre) {genres += ", " + res[i].secondary_genre}
            if (res[i].secondary_instrument) {instruments += ", " + res[i].secondary_instrument}

            bandString += '<li class="collection-item avatar">'
            + '<div class="row">'
            + '<div class= "col s2">'
            + '<img id="' + res[i].id + '" src= ' + res[i].profile_pic + ' alt="" class="band-image"></div>'
            + '<div class= "col s10"'
            + '<span class="title band-name">' + res[i].name + '</span>'
            + '<p class="genres"><strong>Genres: </strong>'  + genres + '</p>'
            + '<p class="instruments"><strong>In search of: </strong>' + instruments + '</p>'
            + '<a href="mailto:' + res[i].email + '" class="secondary-content"><i class="material-icons email-icon">email</i></a></div></div></li><br>'

            bandBox.append(bandString);
        }

        bandContainer.fadeIn();
    })
  })

    // $(".band-image").on('click', function () {
        
    //     var band = {
    //         id: parseInt($(this).attr('id'))
    //     }

    //     $.get("/findbyid", band).then(function(response) {
            
    //     })
    // })


});


