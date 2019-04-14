// needed to secure passwords
var bCrypt = require('bcrypt-nodejs');

module.exports = function (passport, musician) {
    // Inside this block, we initialize the passport-local strategy, and the user model, which will be passed as an argument.
    var Musician = musician;
    var LocalStrategy = require('passport-local').Strategy;

    // Serialize function to save the user id to the session
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    // deserialize user 
    passport.deserializeUser(function (id, done) {
        Musician.findAll({
            where: {
                id: id
            }
        }).then(function (user) {
              if (user) {
                done(null, user);
            } else {
                done(user.errors, null);
            }
        });
    });

    // Then we define our custom strategy with our instance of the LocalStrategy like this:
    passport.use('local-signup', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass the entire request to the callback, which is particularly useful for signing up.
        },
        // Callback function to handle storing user's details
        function (req, email, password, done) {
            // First, we add our hashed password generating function inside the callback function.
            var generateHash = function (password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };
            // Then, using the Sequelize user model we initialized earlier as User, we check to see if the user already exists, and if not we add them.
            Musician.findOne({
                where: {
                    email: email
                }
            }).then(function (musician) {
                if (musician) {
                    return done(null, false, {
                        message: 'That email is already taken'
                    });
                } else {
                    var musicianPassword = generateHash(password);
                    // Below, notice that the values in the data object are gotten from the req.body object which contains the input from our signup form. 
                    var data =
                    {
                        userName: req.body.userName,
                        profile_pic: req.body.profile_pic,
                        email: email,
                        userPassword: musicianPassword, //referencing password above
                        location: req.body.location,
                        music_link: req.body.music_link,
                        on_lookout: req.body.on_lookout,
                        primary_instrument: req.body.primary_instrument,
                        secondary_instrument: req.body.secondary_instrument,
                        primary_genre: req.body.primary_genre,
                        secondary_genre: req.body.secondary_genre,
                        availability: req.body.availability,
                        bio: req.body.bio
                    };
                    // User.create() is a Sequelize method for adding new entries to the database. Notice that the values in the data object are gotten from the req.body object which contains the input from our signup form. 
                    Musician.create(data).then(function (newMusician, created) {
                        if (!newMusician) {
                            return done(null, false);
                        }

                        if (newMusician) {
                            return done(null, newMusician);
                        }
                    });
                }
            });
        }
    ));


    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy(
        {
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback, which is particularly useful for signing up.
        },
        function (req, email, password, done) {

            var Musician = musician;

            // The isValidPassword function compares the password entered with the bCrypt comparison method since we stored our password with bcrypt. If details are correct, user will sign in
            var isValidPassword = function (userpass, password) {
                return bCrypt.compareSync(password, userpass);
            }
            Musician.findOne({
                where: {
                    email: email
                }
            }).then(function (musician) {
               
                if (!musician) {
                    return done(null, false, {
                        message: 'Email does not exist'
                    });
                }
                if (!isValidPassword(musician.userPassword, password)) {
                    return done(null, false, {
                        message: 'Incorrect password.'
                    });
                }

                var musicianInfo = musician.get();
                
                return done(null, musicianInfo);

            }).catch(function (err) {
                console.log("Error:", err);
                return done(null, false, {
                    message: 'Something went wrong with your Signin'
                });
            });
        }));
}