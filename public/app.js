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

});