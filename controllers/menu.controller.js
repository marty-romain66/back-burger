const Menu = require('../models').Menu;

// Create and Save a new Menu

exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Menu
    const menu = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        //image: req.body.image,
    };

    // Save Menu in the database
    Menu.create(menu)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Menu."
            });
        });
}

// Retrieve all Menus from the database.

exports.findAll = (req, res) => {
    Menu.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving menus."
            });
        });
}

// Find a single Menu with an id

exports.findOne = (req, res) => {
    const id = req.params.id;

    Menu.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Menu with id=" + id
            });
        });
}

// Update a Menu by the id in the request

exports.update = (req, res) => {
    const id = req.params.id;

    Menu.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Menu was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Menu with id=${id}. Maybe Menu was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Menu with id=" + id
            });
        });
}

// Delete a Menu with the specified id in the request

exports.delete = (req, res) => {
    const id = req.params.id;

    Menu.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Menu was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Menu with id=${id}. Maybe Menu was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Menu with id=" + id
            });
        });
}

