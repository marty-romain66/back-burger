const Boisson = require('../models').Boisson;

// Create and Save a new Boisson

exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Boisson
    const boisson = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        //image: req.body.image,
    };

    // Save Boisson in the database
    Boisson.create(boisson)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Boisson."
            });
        });
};

// Retrieve all Boissons from the database.

exports.findAll = (req, res) => {
    Boisson.findAll(
        {
            where: {
                token : req.headers.token
            }
        }
    )
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving boissons."
            });
        });
};

// Find a single Boisson with an id

exports.findOne = (req, res) => {
    const id = req.params.id;

    Boisson.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Boisson with id=" + id
            });
        });
}

// Update a Boisson by the id in the request

exports.update = (req, res) => {
    const id = req.params.id;

    Boisson.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Boisson was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Boisson with id=${id}. Maybe Boisson was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Boisson with id=" + id
            });
        });
}

// Delete a Boisson with the specified id in the request

exports.delete = (req, res) => {

    const id = req.params.id;

    Boisson.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Boisson was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Boisson with id=${id}. Maybe Boisson was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Boisson with id=" + id
            });
        });
}

