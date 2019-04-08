var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the posts
    app.get("/", function(req, res) {
        res.render("index");
    });

// Get route for retrieving a single post
app.get("/api/posts/:id", function(req, res) {
    // Add sequelize code to find a single post where the id is equal to req.params.id,
    // return the result to the user with res.json
    db.Post.findAll({

    }, {
        where: {
            id: req.body.id
        },
    }).then(function(dbPost){
        res.render(dbPost);
    });

});

// POST route for saving a new post
app.post("/api/posts", function(req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    db.Post.create({

    }).then(function(dbPost) {
        // We have access to the new dbPost as an argument inside of the callback function
        res.render(dbPost);
    });

});

// DELETE route for deleting posts
app.delete("/api/posts/:id", function(req, res) {
    // Add sequelize code to delete a post where the id is equal to req.params.id,
    // then return the result to the user using res.json
    console.log("Post ID:");
    console.log(req.params.id);
    db.Post.destroy({
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.end();
    });

});

// PUT route for updating posts
app.put("/api/posts", function(req, res) {
    // Add code here to update a post using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json

    db.Post.update({

    }, {
        where: {
            id: req.body.id
        },
    }).then(function(dbPost) {
        // We have access to the new dbPost as an argument inside of the callback function
        res.render(dbPost);
    });
});
};
