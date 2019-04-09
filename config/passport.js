// This file contains our passport strategies. We will use the band and musician
// models and passport.

// needed to secure passwords
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, musico, banda) {
    // Initialize the passport-local strategy, and musician and band models to be
    // passed as argument.
    var Musico = musico;
    var Banda = banda;
    var musician = require('passport-local').Strategy;
    var band = require('passport-local').Strategy;

    // Then we define our custom strategy with our instance of the musician
    // like this:
    passport.use('local-signup', new musician(

        {
        name: 'name',
        profile_pic: 'profile_pic',
        email: 'email',
        password: 'password',
        location: 'location',
        music_link: 'music_link',
        band: 'band',
        primary_instrument: 'primary_instrument',
        secondary_instrument: 'secondary_instrument',
        primary_genre: 'primary_genre',
        secondary_genre: 'secondary_genre',

        // allows us to pass the entire request to the callback, useful for
        // signing up.
        passReqToCallback: true
        },

        // Callback function to handle storing user's details
        function(req, email, password, done) {
            // First, add hashed password generating function inside the callback
            // function.
            var generateHash = function(password) {

                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);

            };

            // Using Sequelize  model we initialized earlier as
            // User, we check to see if the user already exists, and if not we
            // add them.
            Musico.findOne({
                where: {
                    email: email
                }
            }).then(function(user) {
                if (user) {
                    return done(null, false, {
                        message: 'That email is already taken'
                    });
                } else {
                    var userPassword = generateHash(password);
                    // Below, notice that the values in the data object are
                    // gotten from the req.body object which contains the input
                    // from our signup form.
                    var data =
                        {
                            email: email,

                            password: userPassword,

                            firstName: req.body.firstname,

                            lastName: req.body.lastname

                        };

                    // User.create() is a Sequelize method for adding new entries
                    // to the database. Notice that the values in the data object
                    // are gotten from the req.body object which contains the
                    // input from our signup form.
                    User.create(data).then(function(newUser, created) {
                        if (!newUser) {
                            return done(null, false);
                        }

                        if (newUser) {
                            return done(null, newUser);
                        }
                    });
                }
            });
        }
    ));

    // Serialize function to save the user id to the session
    passport.serializeUser(function(user, done) {
    done(null, user.id);
    });

    // deserialize user
    passport.deserializeUser(function(id, done) {

        User.findById(id).then(function(user) { // Gets the user
            if (user) { // If successful, an instance of the sequelize model is
            // returned
            done(null, user.get());
            } else {
            done(user.errors, null);
            }
        });
    });

    //LOCAL SIGNIN
    passport.use('local-signin', new musician(

    {
        // by default, local strategy uses username and password, we will
        // override with email
        usernameField: 'email',

        passwordField: 'password',

        passReqToCallback: true // allows us to pass back the entire request to
        // the callback, which is particularly useful for signing up.

    },

    function(req, email, password, done) {
        var User = user;

        // The isValidPassword function compares the password entered with the
        // bCrypt comparison method since we stored our password with bcrypt. If
        // details are correct, user will sign in
        var isValidPassword = function(userpass, password) {
            return bCrypt.compareSync(password, userpass);
        }

        Bando.findOne({
            where: {
                email: email
            }
        }).then(function(user) {

            if (!user) {
                Musicia.findOne({
                    where: {
                        email: email
                    }
                }).then(function(user2) {
                    if (!user2) {
                        return done(null, false, {
                            message: 'Email does not exist'
                        });
                    }
                    if (!isValidPassword(user2.password, password)) {
                        return done(null, false, {
                            message: 'Incorrect password.'
                        });
                    }
                    var userinfo = user2.get();
                    return done(null, userinfo);
                }).catch(function(err) {
                    console.log("Error:", err);
                    return done(null, false, {
                        message: 'Something went wrong with your Signin'
                    });
                });
            }

            if (!isValidPassword(user.password, password)) {
                return done(null, false, {
                    message: 'Incorrect password.'
                });
            }
            var userinfo = user.get();
            return done(null, userinfo);


        }).catch(function(err) {

            console.log("Error:", err);

            return done(null, false, {
                message: 'Something went wrong with your Signin'
            });
        });
    }));
}