// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require('express');
var exphbs = require('express-handlebars');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var db = require('./models');
// var env = require('dotenv').load()

// Setup server information
var PORT = process.env.PORT || 8080;

// Sets up the Express App
// =============================================================
var app = express();

// Static directory
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.cookieParser());
// app.use(express.bodyParser());

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Initialize passport, express session and passport session.
app.use(session({
  key: 'user_sid',
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: {
    expires: 600000,
    httpOnly: false
  }
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions



// Routes
// =============================================================
// Landing page
var api = require("./routes/api.js");
app.use(api);
// load musicianapiroutes
require('./routes/adminRoutes.js')(app,passport);
// load musicianapiroutes
require('./routes/musician-api-routes.js')(app,passport);
// load passport strategies
require('./config/passport.js')(passport, db.Musician);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
