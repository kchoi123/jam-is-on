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
    app.get("/signin", function (req, res) {
        res.render("signin");
    });
    app.post("signin", passport.authenticate('local-signin', {
        successRedirect: 'band-box',
        failureRedirect: '/signup',
    }));
    app.get("/signup", function (req, res) {
        res.render("signup");
    });
    app.post("/signup", passport.authenticate('local-signup', {
        successRedirect: '/band-box',
        failureRedirect: '/signup'
    }));
    //logout
    app.get('/logout', authController.logout);

    // Get route for retrieving a single post

        // POST route for saving a new post
    app.post("/api/posts", function (req, res) {
        // Add sequelize code for creating a post using req.body,
        // then return the result using res.json
        matches.exact.create({

        }).then(function (dbPost) {
            // We have access to the new dbPost as an argument inside of the callback function
            res.render(dbPost);
        });

    });

};
