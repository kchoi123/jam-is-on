$(function() {
    //dropdown for sign up form
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, options);
    });



    $(document).ready(function() {
        $('select').formSelect();
    });
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

    // New user for BAND
    $("#newUser").on("submit", function (event) {
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

        $.post("/signUpB", newUser).then(function (res) {
            $("#newUserMessage").text(res);
        })
    });
    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, options);
    });

    $('.sidenav').sidenav();
    // $("#createAccount").on("click", function(e) {
    //     e.preventDefault(); 
    //     var $form = $("#updateForm");  
    // $form.append("<input type='hidden' name='link_redirect' value='" + this.href + "'>");  // This is added to the end of the form and triggers the redirect after the saving is done
    // $form.submit(); // Submitting the form saves the data, and then redirects
    // });
   
    $("#createAccount").on("click", function(e) {
        e.preventDefault();

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

        $.post("/signup", newUser).then(function (res) {
           
        });
    });

});
