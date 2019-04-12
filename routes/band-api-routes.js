var db = require("../models");

var matches = require("./match.js");

var Sequelize = require("sequelize");

var Op = Sequelize.Op;

var passport = require("passport");

var authController = require("../controllers/authcontroller.js");

var band = {
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
// =============================================================
module.exports = function (app) {


  // GET route for getting all of the posts
  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/band", function (req, res) {
  matches.exact(band);
  matches.close(band);
})


  //Get route for signin
  app.get("/signin", function (req, res) {
    res.render("signin");
  });

  // Post route to verify login
  // app.post("signin", passport.authenticate('local-signin', {
  //   successRedirect: 'bandPage',
  //   failureRedirect: '/signup'
  // }));


  // Get route for signup
  app.get("/signup", function (req, res) {
    res.render("signup");
  });

  // Post route from signup to db
  // app.post("/signup", passport.authenticate('local-signup', {
  //   successRedirect: '/bandPage',
  //   failureRedirect: '/signup'
  // }));

  //logout
  app.get('/logout', authController.logout);
  //
  // //get bands
  // app.get("/bandPage", isLoggedIn, authController.bandPage);

  // Get route for returning posts for musician
  // app.get("/api/posts/band/:band", function (req, res) {
  //   matches.exact(band);
  // });
 
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/signin');
}
};
