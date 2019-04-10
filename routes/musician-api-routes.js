var db = require("../models");

var matches = require("../public/match.js");

var passport = require("passport");


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
  app.post("signin", passport.authenticate('local-signin'), {
    successRedirect: 'musician-box',
    failureRedirect: '/signup'
  });
  app.get("/signup", function (req, res) {
    res.render("signup");
  });
  app.post("/signup", passport.authenticate('local-signup'), {
    successRedirect: '/musician-box',
    failureRedirect: '/signup'
  });
  //logout
  app.get('/logout', authController.logout);

  //get musicians
  app.get("/musician", function (req, res) {
    matches.close({
    }).then(function (results) {
      res.render("musician-box", results);
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
        res.render("musician-box", dbPost);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function (req, res) {
    // Add sequelize code to find a single post where the id is equal to req.params.id,
    // return the result to the user with res.json
    db.Musician.findAll({

    }, {
        where: {
          id: req.body.id
        },
      }).then(function (dbPost) {
        res.render(dbPost);
      });

  });

  // POST route for saving a new post
  app.post("/api/posts", function (req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    db.Musician.create({

    }).then(function (dbPost) {
      // We have access to the new dbPost as an argument inside of the callback function
      res.render(dbPost);
    });

  });
};