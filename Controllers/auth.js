// Import our auth controller
var authController = require('./authcontroller.js');

module.exports = function(app, passport) { // We need Passport for these
    // operations. Rather than require it in this script, we put passport as a
    // parameter to this function to have it passed from server.js.

    // Define signup route
    app.get('/signup', authController.signup);

    // Define signin route
    app.get('/signin', authController.signin);

    // Define route to post to signup
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/dashboard',
            failureRedirect: '/signup'
        }
    ));

    // Define route for dashboard if user is logged in
    app.get('/dashboard', isLoggedIn, authController.dashboard);

    // Define route that logs user out
    app.get('/logout', authController.logout);

    // Define route to sign in
    app.post('/signin', passport.authenticate('local-signin', {
            successRedirect: '/dashboard',

            failureRedirect: '/signin'
        }
    ));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
}

