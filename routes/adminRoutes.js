var authController = require("../controllers/authcontroller.js");

module.exports = function (app, passport) {

    // ==========================ADMIN - START====================================
    // ==========================ADMIN - START====================================


    //Get route for admin
    app.get("/adminSignin", function (req, res) {
        res.render("adminSignin");
    });

    //admin auth
    app.post("/admin", passport.authenticate('local-signin', {
        successRedirect: '/godView',
        failureRedirect: '/adminSignin',
        failureFlash: true
    }
    ));

    //get godView
    app.get("/godView", isLoggedIn, authController.godView);


    // ==========================ADMIN - END====================================
    // ==========================ADMIN - END====================================
};