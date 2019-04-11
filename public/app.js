$(function() {


    // New user for MUSICIAN
    $("#newUser").on("submit", function(event) {
        event.preventDefault();

        var newUser = {
            userName: $("#name").val().trim(),
            profile_pic: $("#profile_pic").val().trim(),
            email: $("#email").val().trim(),
            userPassword: $("#userPassword").val().trim(),
            location: $("#location").val().trim(),
            music_link: $("#music_link").val().trim(),
            on_lookout: $("#on_lookout").val().trim(),
            primary_instrument: $("#primary_instrument").val().trim(),
            secondary_instrument: $("#secondary_instrument").val().trim(),
            primary_genre: $("#primary_genre").val().trim(),
            secondary_genre: $("#secondary_genre").val().trim(),
            availability: $("#availability").val().trim(),
            bio: $("#bio").val().trim()
        }

        $.post("/signup", newUser).then(function(res) {
            $("#newUserMessage").text(res);
        })
    });

});