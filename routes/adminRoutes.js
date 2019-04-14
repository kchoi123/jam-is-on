var authController = require("../controllers/authcontroller.js");

module.exports = function (app, passport) {

  // ==========================ADMIN - START====================================
  // ==========================ADMIN - START====================================


  //Get route for admin
  app.get("/adminSignin", function (req, res) {
    res.render("adminSignin");
  });

  //admin auth
  app.post("/adminSignin", passport.authenticate('local-signin', {
    successRedirect: '/godView',
    failureRedirect: '/adminSignin',
    failureFlash: true
  }
  ));

  //get godView
  app.get("/godView", isLoggedIn, authController.godView);

  //get godView
  app.get("/godViewAll", isLoggedIn, authController.godView);

  //get godView
  app.get("/godViewNew", isLoggedIn, authController.godView);



  // ==========================ADMIN - END====================================
  // ==========================ADMIN - END====================================


  //function for auth
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.redirect('/signin');
  };
};