var express = require("express");
var router = express.Router();
var db = require("../models");

    router.get("/musicianPage", function (req, res) {
        console.log("==========================================");
        console.log("this console.logs the current session user");
        console.log(req.session.passport.user);
        console.log(db.Musician);
        console.log("===========================================");
    })

module.exports = router;