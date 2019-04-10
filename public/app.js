$(function() {


    // New user for MUSICIAN
    $("#newUser").on("submit", function(event) {
        event.preventDefault();

        var newUser = {
            name: $("#name").val().trim(),
            profile_pic: $("#profile_pic").val().trim(),
            email: $("#email").val().trim(),
            password: $("#password").val().trim(),
            location: $("#location").val().trim(),
            music_link: $("#music_link").val().trim(),
            band: $("#band").val().trim(),
            primary_instrument: $("#primary_instrument").val().trim(),
            secondary_instrument: $("#secondary_instrument").val().trim(),
            primary_genre: $("#primary_genre").val().trim(),
            secondary_genre: $("#secondary_genre").val().trim()
        }

        $.post("/signUpM", newUser).then(function(res) {
            $("#newUserMessage").text(res);
        })
    });

    // New user for BAND
    $("#newUser").on("submit", function(event) {
        event.preventDefault();

        var newUser = {
            name: $("#firstName").val().trim(),
            profile_pic: $("#lastName").val().trim(),
            email: $("#username").val().trim(),
            password: $("#password").val().trim(),
            location: $("#firstName").val().trim(),
            music_link: $("#lastName").val().trim(),
            musician: $("#username").val().trim(),
            primary_instrument: $("#password").val().trim(),
            secondary_instrument: $("#firstName").val().trim(),
            primary_genre: $("#lastName").val().trim(),
            secondary_genre: $("#username").val().trim()
        }

        $.post("/signUpB", newUser).then(function(res) {
            $("#newUserMessage").text(res);
        })
    });




});