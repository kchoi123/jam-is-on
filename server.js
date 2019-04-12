// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var exphbs = require("express-handlebars");
var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');
var session = require('express-session');
var db = require("./models");
// var env = require('dotenv').load()

// Sets up the Express App
// =============================================================
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Initialize passport, express session and passport session.
app.use(session({
  key: 'user_sid',
  secret: 'goN6DJJC6E287cC77kkdYuNuAyWnz7Q3iZj8',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Static directory
app.use(express.static("public"));

// Connect flash
app.use(flash());

// Global variables for flash
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
// load bandapiroutes not being used yet
// require("./routes/band-api-routes.js")(app, passport);
// load musicianapiroutes
// require("./routes/musician-api-routes.js")(app, passport);
require('./routes/musician-api-routes.js')(app,passport);
// load passport strategies
require('./config/passport.js')(passport, db.Musician);

// Setup server information
var PORT = process.env.PORT || 8080;

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});
