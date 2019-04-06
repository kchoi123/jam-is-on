// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html or main.handlebars
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/something.html"));
  });

  // login
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/something.html"));
  });

  // band route
  app.get("/band", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/something.html"));
  });

  // musician route
  app.get("/musician", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/something.html"));
  });

};
