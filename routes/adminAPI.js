var express = require("express");
var router = express.Router();
var adminController = require("../controllers/adminController");

//manually type this in to see JSON format
router.get("/api/musician/guitar", function(req, res) {
    test.viewGuitar(req, res);
})

module.exports = router;