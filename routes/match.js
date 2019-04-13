
var Sequelize = require("sequelize");

var db = require("../models");

var Op = Sequelize.Op;

var matches = {
    
    close: function(musician) {
        db.Band.findAll({
            where: {
                [Op.or]: [

                {primary_genre: musician.primary_genre},
                {primary_genre: musician.secondary_genre},
                {primary_instrument: musician.primary_instrument},
                {primary_instrument: musician.secondary_instrument}

                ]
            },

            limit: 10

        }).then(function(data) {
            console.log("\n***CLOSE MATCHES***\n\n");

            for (var i=0; i<data.length; i++) {
                console.log("Band name: " + data[i].name);

            }
            return data;
        })
    },

    exact: function(musician) {
        db.Band.findAll({
            where: {
                [Op.or]: [

                    {primary_genre: musician.primary_genre},
                    {primary_genre: musician.secondary_genre},
                
                ],

                [Op.or]: [

                    {primary_instrument: musician.primary_instrument},
                    {primary_instrument: musician.secondary_instrument},
                ],

                availability: musician.availability,

            },

            limit: 5

        }).then(function(data) {
            console.log("\n***EXACT MATCHES***\n\n");

            for (var i=0; i<data.length; i++) {
                console.log("Band name: " + data[i].name);

            }
            return data;
        })
    }
}



module.exports = matches;
