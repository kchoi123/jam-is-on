var db = require("../models");

module.exports = {
    viewGuitar: function (req, res) {
        
        console.log("BLAH: ", req.session.passport);
        
        db.Musician
            .findAll({
                where: {
                    primary_instrument: "guitar"
                }
            })
            .then(function (result) {
                console.log(result);
                res.json(result)
            })
    }
}
