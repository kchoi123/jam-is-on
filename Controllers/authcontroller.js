var exports = module.exports = {}

// Controller route for signup
exports.signup = function(req, res) {
    res.render('signup');
}

// Controller route for signin
exports.signin = function(req, res) {
    res.render('signin');
}

// Controller route for index
exports.musician-box = function(req, res) {
    res.render('musician-box');
}

// Controller route for logout
exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
}