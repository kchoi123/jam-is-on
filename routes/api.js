var express = require("express");
var router = express.Router();
var test = require("../controllers/test");

router.get("/", function (req, res) {
    res.render("index");
})

//manually type this in to see JSON format
router.get("/api/musician/guitar", function(req, res) {
    test.viewGuitar(req, res);
})

module.exports = router;