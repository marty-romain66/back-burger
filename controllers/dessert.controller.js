const Dessert = require('../models').Dessert;

// Create and Save a new Dessert

exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Dessert
    const dessert = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        //image: req.body.image,
    };

    // Save Dessert in the database
    Dessert.create(dessert)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Dessert."
            });
        });
}

// Retrieve all Desserts from the database.

exports.findAll = (req, res) => {
    Dessert.findAll( {
        where: {
            token : req.headers.token
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving desserts."
            });
        });
}

// Find a single Dessert with an id

exports.findOne = (req, res) => {
    const id = req.params.id;

    Dessert.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Dessert with id=" + id
            });
        });
}

// Update a Dessert by the id in the request

exports.update = (req, res) => {
    const id = req.params.id;

    Dessert.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Dessert was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Dessert with id=${id}. Maybe Dessert was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Dessert with id=" + id
            });
        });
}

// Delete a Dessert with the specified id in the request

exports.delete = (req, res) => {
    const id = req.params.id;

    Dessert.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Dessert was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Dessert with id=${id}. Maybe Dessert was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Dessert with id=" + id
            });
        });
}

