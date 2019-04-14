
var Sequelize = require("sequelize");

var db = require("../models");

var Op = Sequelize.Op;

var matches = require("./match.js");

var authController = require("../controllers/authcontroller.js");

// var musician = {
//   userName: 'Al Smith',
//   profile_pic: '#',
//   email: 'alpal@123.com',
//   userPassword: 'password',
//   location: 'San Francisco',
//   music_link: '#',
//   on_lookout: true,
//   primary_instrument: "guitar",
//   secondary_instrument: "piano",
//   primary_genre: 'folk',
//   secondary_genre: "pop",
//   availability: "weekends",
//   bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sollicitudin sem, sed ullamcorper elit. Duis ultrices laoreet mauris, ac imperdiet nibh blandit nec. Cras ultricies dictum ullamcorper. Nulla blandit pretium nunc eget lacinia. Vivamus ac erat venenatis, pulvinar orci eu, accumsan quam. Nulla vitae pretium velit. Donec in turpis urna. Aliquam ultricies posuere est, vulputate faucibus risus ornare sed. In consectetur sed risus sit amet volutpat. In mauris ante, commodo iaculis feugiat sed, cursus sed nibh. Vestibulum sodales a orci sit amet scelerisque. Aliquam leo magna, suscipit id molestie eu, vehicula tincidunt dui. Vivamus ac molestie mauris. Integer eget condimentum nisl. Ut quam est, tempor at ultrices vitae, vulputate vel ligula."
// }

// Routes
module.exports = function (app, passport) {

  // ==========================MUSICIAN - START====================================
  // ==========================MUSICIAN - START====================================
  // Get route for signup
  app.get("/signup", authController.signup);

  //Get route for signin
  app.get("/signin", authController.signin);

  // Post route from signup to db
  app.post("/signup", passport.authenticate('local-signup', {
    successRedirect: '/musicianPage',
    failureRedirect: '/signup'
  }
  ));

  // Post route to verify login
  app.post("/signin", passport.authenticate('local-signin', {
    successRedirect: '/musicianPage',
    failureRedirect: '/signin'
  }
  ));

  app.get("/findmybands", function (req, res) {

    // console.log(matches);
    // console.log(req.session.passport);
    // console.log((matches.findMusician(req.session.passport.user)));
    // res.send(matches.close(musician));

    db.Musician.findAll({
      where: {
          id: req.session.passport.user
      }
    }).then(function(data) {
      db.Band.findAll({
        where: {
            [Op.or]: [

            {primary_genre: data[0].primary_genre},
            {primary_genre: data[0].secondary_genre},
            {primary_instrument: data[0].primary_instrument},
            {primary_instrument: data[0].secondary_instrument}

            ]
        },

        limit: 10

        }).then(function(data) {
            // console.log("\n***CLOSE MATCHES***\n\n");

            // for (var i=0; i<data.length; i++) {
            //     console.log("Band name: " + data[i].name);

            // }

            res.json(data);
        })
    })

  })

  //get musicianPage
  app.get("/musicianPage", isLoggedIn, authController.musicianPage);

  //logout
  app.get("/logout", authController.logout);



  // ==========================MUSICIAN - END====================================
  // ==========================MUSICIAN - END====================================


  //function for auth
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.redirect('/signin');
  };
};