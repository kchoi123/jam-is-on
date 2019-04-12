var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    var Musician = sequelize.define("Musician", {
        userName: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 140]
            }
        },
        profile_pic: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 140]
            }
        },
        userPassword: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1,20]
            }
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 140]
            }
        }, 
        music_link: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        on_lookout: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }, 
        primary_instrument: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 140]
            }
        }, 
        secondary_instrument: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 140]
            }
        }, 
        primary_genre: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 140]
            }
        }, 
        secondary_genre: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 140]
            }
        }, 
        availability: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 140]
            }
        },
        bio: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [1]
            }
        }, 
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    });

    // Musician.associate = function(models) {

    //     Musician.belongsTo(models.Band, {
    //       foreignKey: {
    //         allowNull: true
    //       }
    //     });
    //   };
    
    return Musician;
};
