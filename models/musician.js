module.exports = function (sequelize, DataTypes) {
    var Musician = sequelize.define("Musician", {
        name: {
            type: DataTypes.STRING,
            // AllowNull is a flag that restricts a burger from being entered if it doesn't
            // have a text value
            allowNull: false,
            // len is a validation that checks that our burger is between 1 and 140 characters
            validate: {
                len: [1, 140]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        }, 
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,20]
            }
        },
        band: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }, 
        primary_instrument: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        }, 
        secondary_instrument: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        }, 
        primary_genre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        }, 
        secondary_genre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        }, 
    });
    return Musician;
};
