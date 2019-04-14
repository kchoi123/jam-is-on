var exports = module.exports = {}

// Controller route for signup
exports.signup = function (req, res) {
    res.render('signup');
}

// Controller route for signin
exports.signin = function (req, res) {
    res.render('signin');
}

// Controller route for index
exports.musicianPage = function (req, res) {
    res.render('musicianPage');
}

// Controller route for godView
exports.godView = function (req, res) {
    res.render('godView');
}

// Controller route for godView
exports.godViewAll = function (req, res) {
    db.Musician.findAll({}).then(function (results) {

        var placeHolder = [];
  
        for (var i = 0; i < results.length; i++) {
          placeHolder.push(results[i].dataValues);
        }
  
        var hbsObject = {
          musicians: placeHolder
        };
    
        res.render('godViewAll', hbsObject);
      });
}

// Controller route for godView
exports.godViewNew = function (req, res) {
    res.render('godViewNew');
}

// Controller route for logout
exports.logout = function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/');
    });
}