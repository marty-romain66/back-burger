const User =  require("../models").User
const Config =  require("../models").Config
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Create and Save a new User
exports.register = (req, res) => {
    // Validate request
    if (!req.body.pseudo) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a User
    function strRandom(o) {
        var a = 10,
            b = 'abcdefghijklmnopqrstuvwxyz',
            c = '',
            d = 0,
            e = ''+b;
        if (o) {
          if (o.startsWithLowerCase) {
            c = b[Math.floor(Math.random() * b.length)];
            d = 1;
          }
          if (o.length) {
            a = o.length;
          }
          if (o.includeUpperCase) {
            e += b.toUpperCase();
          }
          if (o.includeNumbers) {
            e += '1234567890';
          }
        }
        for (; d < a; d++) {
          c += e[Math.floor(Math.random() * e.length)];
        }
        return c;
      }
    const salt = strRandom({length: 10, includeUpperCase: true, includeNumbers: true});
        const user = {
            email : req.body.email,
        pseudo: req.body.pseudo,
        password: bcrypt.hashSync(req.body.password, 8),
        token : salt,
        adress : req.body.adress,

    };

    // Save User in the database
    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });
}
exports.login = (req, res) => {
    User.findOne({ where: { pseudo: req.body.pseudo } })
        .then(user => {
            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }

            var tokens = jwt.sign({ id: user.id }, "RANDOM_TOKEN_SECRET", {
                expiresIn: 86400 // 24 hours
            });

            res.status(200).send({
                id: user.id,
                pseudo: user.pseudo,
                tokens: tokens,
                token : user.token,
            });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
}

exports.admin = (req, res) => {
    console.log("test");
    res.send("test");
}


exports.config = (req, res) => {
   Config.findOne({ where: {token : req.headers.token}})
    .then(config => {
        if (!config) {
            return res.status(404).send({ message: "Config Not found." });
        }
        res.status(200).send({
            id: config.id,
            token: config.token,
            config: config.nameResto,
            style : config.style,
            textDR : config.textDR,
            adress : config.adress,
            orderOnline : config.orderOnline,
        });
        }
    )
    .catch(err => {
        res.status(500).send({ message: err.message });
    }
    );
}

exports.createConfig = (req, res) => {
    // Validate request
    if (!req.body.nameResto) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a User
    const config = {
        nameResto : req.body.nameResto,
        style : req.body.style,
        textDR : req.body.textDR,
        adress : req.body.adress,
        orderOnline : req.body.orderOnline,
        token : req.headers.token,
    };

    // Save User in the database
    Config.create(config)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });
}


