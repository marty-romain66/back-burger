const Burger = require('../models').Burger ;

// Create and Save a new Burger
exports.createBurger = (req, res) => {
    // console.log(req.body.name);
    // // Validate request
    // if (!req.body.name) {
    //     res.status(400).send({
    //         message: "Content can not be empty!"
    //     });
    //     return;
    // }

    // // Create a Burger
    // const burger = {
    //     name: req.body.name,
    //     price: req.body.price,
    //     description: req.body.description,
    //     //image: req.body.image,
    // };

    // // Save Burger in the database
    // Burger.create(burger)
    //     .then(data => {
    //         res.send(data);
    //     })
    //     .catch(err => {
    //         res.status(500).send({
    //             message:
    //                 err.message || "Some error occurred while creating the Burger."
    //         });
    //     });
   console.log(req.headers.token);
    const burger = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        token : req.headers.token
        //image: req.body.image,
    };
    Burger.create(
        burger
    )
    .then(data => {
        res.send(data);
    }
    )
    .catch(err => {

        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Burger."
        });
    }
    );

}

// Retrieve all Burgers from the database.
exports.findAll = (req, res) => {
    Burger.findAll( {
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
                    err.message || "Some error occurred while retrieving burgers."
            });
        });
}

// Find a single Burger with an id

exports.findOne = (req, res) => {
    const id = req.params.id;

    Burger.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Burger with id=" + id
            });
        });
}

// Update a Burger by the id in the request

exports.update = (req, res) => {
    const id = req.params.id;

    Burger.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Burger was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Burger with id=${id}. Maybe Burger was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Burger with id=" + id
            });
        });
}

// Delete a Burger with the specified id in the request

exports.delete = (req, res) => {
    const id = req.params.id;

    Burger.destroy({
        where: { 
            id: id,
            token : req.headers.token
        
        }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Burger was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Burger with id=${id}. Maybe Burger was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Burger with id=" + id
            });
        });
}

