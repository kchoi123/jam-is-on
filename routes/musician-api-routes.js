var db = require("../models");

var matches = require("../public/match.js");

var passport = require("passport");

var authController = require("../controllers/authcontroller.js");
// Routes
// =============================================================
module.exports = function (app) {

<<<<<<< HEAD
    // GET route for getting all of the posts
    app.get("/", function(req, res) {

        res.render("index");
=======
  // GET route for getting all of the posts
  app.get("/", function (req, res) {
    res.render("index");
  });

  //Get route for signin
  app.get("/signin", function (req, res) {
    res.render("signin");
  });
>>>>>>> 2f3830299ca4514c8aaad39aeee58dfa44c611e2

  // Post route to verify login
  app.post("signin", passport.authenticate('local-signin', {
    successRedirect: 'musicianBox',
    failureRedirect: '/signup'
  }));

<<<<<<< HEAD
    });

    //get musicians
    app.get("/musician", function(req, res) {
        db.Band.findAll({}).then(function(results) {
            res.render("musicianBox", results);
        })
    })

    // Get route for returning posts for musician
    app.get("/api/posts/musician/:musician", function(req, res) {
        // Add sequelize code to find all posts where the musician is equal to req.params.musician,
        // return the result to the user with res.json
        db.Band.findAll({

        }, {
            where: {
                band: req.body.band
            },
        }).then(function(dbPost) {
            res.render("musicianBox", dbPost);
        });
    });

    // Get route for retrieving a single post
    app.get("/api/posts/:id", function(req, res) {
        // Add sequelize code to find a single post where the id is equal to req.params.id,
        // return the result to the user with res.json
        db.Musician.findAll({

        }, {
            where: {
                id: req.body.id
            },
        }).then(function(dbPost) {
            res.render(dbPost);
        });

    });

    // POST route for saving a new post
    app.post("/api/posts", function(req, res) {
        // Add sequelize code for creating a post using req.body,
        // then return the result using res.json
        db.Musician.create({

        }).then(function(dbPost) {
            // We have access to the new dbPost as an argument inside of the callback function
            res.render(dbPost);
        });

    });

    // DELETE route for deleting posts
    app.delete("/api/posts/:id", function(req, res) {
        // Add sequelize code to delete a post where the id is equal to req.params.id, 
        // then return the result to the user using res.json
        console.log("Post ID:");
        console.log(req.params.id);
        db.Musician.destroy({
            where: {
                id: req.params.id
            }
        }).then(function() {
            res.end();
        });
    });

    // PUT route for updating posts
    app.put("/api/posts", function(req, res) {
        // Add code here to update a post using the values in req.body, where the id is equal to
        // req.body.id and return the result to the user using res.json

        db.Musician.update({
            name: req.body.name,
            email: req.body.email,
            location: req.body.location,
            password: req.body.password,
            band: req.body.band,
            primary_instrument: req.body.primary_instrument,
            primay_genre: req.body.primay_genre
        }, {
            where: {
                id: req.body.id
            },
        }).then(function(dbPost) {
            // We have access to the new dbPost as an argument inside of the callback function
            res.render("musicianBox", dbPost);
        });
    });
};
=======
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
  app.get("/musicianBox", isLoggedIn, authController.musicianBox);

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


  
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/signin');
}
};

>>>>>>> 2f3830299ca4514c8aaad39aeee58dfa44c611e2
