var db = require("../models");

var matches = require("../public/match.js");

var passport = require("passport");

var authController = require("../controllers/authcontroller.js");
// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the posts
  app.get("/", function (req, res) {
    res.render("index");
  });

  //Get route for signin
  app.get("/signin", function (req, res) {
    res.render("signin");
  });

  // Post route to verify login
  app.post("signin", passport.authenticate('local-signin', {
    successRedirect: 'musicianBox',
    failureRedirect: '/signup'
  }));

  // Get route for signup
  app.get("/signup", function (req, res) {
    res.render("signup");
  });

  // Post route from signup to db
  app.post("/signup", passport.authenticate('local-signup', {
    successRedirect: '/musicianBox',
    failureRedirect: '/signup'
  }));

  //logout
  app.get('/logout', authController.logout);

  //get musicians
  app.get("/musicianBox", function (req, res) {
    matches.close({
    }).then(function (results) {
      res.render("musicianBox", results);
    });
  });

  // Get route for returning posts for musician
  app.get("/api/posts/musician/:musician", function (req, res) {
    // Add sequelize code to find all posts where the musician is equal to req.params.musician,
    // return the result to the user with res.json
    matches.exact.findAll({

    }, {
        where: {
          band: req.body.band
        },
      }).then(function (dbPost) {
        res.render("musicianBox", dbPost);
      });
  });
};

