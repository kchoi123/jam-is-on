
module.exports = function (sequelize, DataTypes) {
    var Band = sequelize.define("Band", {
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
        profile_pic: {
            type: DataTypes.TEXT,
            allowNull: true,
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
        music_link: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        on_lookout: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
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
            allowNull: false,
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
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        bio: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    Band.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Band.hasMany(models.Musician, {

        });
      };

    return Band;
};


