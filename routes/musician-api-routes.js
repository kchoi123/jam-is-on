
var matches = require("./match.js");

var authController = require("../controllers/authcontroller.js");

var musician = {
  userName: 'Al Smith',
  profile_pic: '#',
  email: 'alpal@123.com',
  userPassword: 'password',
  location: 'San Francisco',
  music_link: '#',
  on_lookout: true,
  primary_instrument: "guitar",
  secondary_instrument: "piano",
  primary_genre: 'folk',
  secondary_genre: "pop",
  availability: "weekends",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sollicitudin sem, sed ullamcorper elit. Duis ultrices laoreet mauris, ac imperdiet nibh blandit nec. Cras ultricies dictum ullamcorper. Nulla blandit pretium nunc eget lacinia. Vivamus ac erat venenatis, pulvinar orci eu, accumsan quam. Nulla vitae pretium velit. Donec in turpis urna. Aliquam ultricies posuere est, vulputate faucibus risus ornare sed. In consectetur sed risus sit amet volutpat. In mauris ante, commodo iaculis feugiat sed, cursus sed nibh. Vestibulum sodales a orci sit amet scelerisque. Aliquam leo magna, suscipit id molestie eu, vehicula tincidunt dui. Vivamus ac molestie mauris. Integer eget condimentum nisl. Ut quam est, tempor at ultrices vitae, vulputate vel ligula."
}

// Routes
module.exports = function (app, passport) {

  // ==========================MUSICIAN - START====================================
  // ==========================MUSICIAN - START====================================


  //Get route for signin
  app.get("/signin", function (req, res) {
    res.render("signin");
  });

  // Post route to verify login
  app.post("/signin", passport.authenticate('local-signin', {
    successRedirect: 'musicianPage',
    failureRedirect: '/signup',
    failureFlash: true
  }
  ));

  // Get route for signup
  app.get("/signup", function (req, res) {
    res.render("signup");
  });

  // Post route from signup to db
  app.post("/signup", passport.authenticate('local-signup', {
    successRedirect: '/musicianPage',
    failureRedirect: '/signup'
  }
  ));

  //get musicianPage
  app.get("/musicianPage", isLoggedIn, authController.musicianPage);

  app.get("findmyband", function(req, res) {

    res.json(matches.close(musician));

  })

  // ==========================MUSICIAN - END====================================
  // ==========================MUSICIAN - END====================================


  // ==========================ADMIN - START====================================
  // ==========================ADMIN - START====================================


  //Get route for admin
  app.get("/admin", function (req, res) {
    res.render("admin");
  });

  //admin auth
  app.post("/admin", passport.authenticate('local-signin', {
    successRedirect: '/godView',
    failureRedirect: '/admin',
    failureFlash: true
  }
  ));

  //get godView
  app.get("/godView", isLoggedIn, authController.godView);

  // ==========================ADMIN - END====================================
  // ==========================ADMIN - END====================================

  //logout
  app.get("/logout", authController.logout);

  //GET route for any unknown destination
  app.get("*", function (req, res) {
    res.render("index");
  });

  //function for auth
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.redirect('/signin');
  }
};