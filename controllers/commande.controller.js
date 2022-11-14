const Commande = require('../models').Commande;
const Scommande = require('../models').Souscommande;
const Burger = require('../models').Burger;
const Boisson = require('../models').Boisson;
const Dessert = require('../models').Dessert;
const Menu = require('../models').Menu; 


const { Op } = require("sequelize");
const { QueryTypes } = require('sequelize');
const sequelize = require('../models').sequelize;

exports.findAll = (req, res) => {
    let date = new Date().toLocaleString("us", { timeZone: "Europe/Paris" });
    let date2 = date.slice(12, 14);
    let date3 = date.slice(15, 17);
    console.log("ok" + date3);
    let date4 = date2 + "h" + date3;
    if (date3 >= 0 && date3 <= 15) {
      date3 = 15;
      console.log("si 1" + date3);
    } else if (date3 >= 16 && date3 <= 30) {
      date3 = 30;
      console.log("si 2" + date3);
    } else if (date3 >= 31 && date3 <= 45) {
      date3 = 45;
      console.log("si 3" + date3);
    } else if (date3 >= 46 && date3 <= 59  && date2 < 23) {
      date3 = 00;
      date2++;
      console.log("si 4" + date3);
    }
    else if (date3 >= 46 && date3 <= 59  && date2 == 23) {
        date3 = 00;
        date2 = 00;
        console.log("si 5" + date3);
        }

    date4 = date2 + "h" + date3;
    console.log("ok" + date2);
    console.log(date4);
  
    Commande.findAll({
      where: {
        horaire: date4,
        token: req.headers.token,
      },
      include: [
        {
            model: Scommande,
            include: [
                {
                    model: Boisson,
                },
                {
                    model: Dessert,
                },
                {
                    model: Burger,
                },
              
            ]
        }
    ]
    })
        .then((commandes) => res.status(200).json(commandes))
        .catch((error) => res.status(400).json({ error }));
};

exports.test = (req, res) => {
  const newCommande = {
    horaire : req.body.horaire,
    clientName : req.body.clientName
  }
  Commande.create(newCommande)
  .then((commande) => res.status(201).json(commande))
  .catch((error) => res.status(400).json({ error }));
};

// post Souscommande

exports.postScommande = (req, res) => {
  const newScommande = {
    burgerId : req.body.burgerId,
    boissonId : req.body.boissonId,
    dessertId : req.body.dessertId,
    commandeId : req.body.commandeId,
    token : req.body.token
  }
  Scommande.create(newScommande)
  .then((scommande) => res.status(201).json(scommande))
  .catch((error) => res.status(400).json({ error }));
}

exports.selectCommande = (req, res) => {
  const horaire = req.headers.horaire;
  sequelize
    .query(
      `SELECT * FROM reservation.commandes where createdAt >= "${new Date()
        .toISOString()
        .slice(0, 10)
        .replace("T", " ")} 00:00:00  " and createdAt <= "${new Date()
        .toISOString()
        .slice(0, 10)
        .replace("T", " ")} 23:59:59  " and horraire = "${horaire}" and token = "${req.headers.token}"`,
      { type: QueryTypes.SELECT }
    )

    .then((commandes) => {
      const maxCommande = 2;
      console.log(commandes.length);
      if (commandes.length > maxCommande) {
        res
          .status(200)
          .json({
            message: `Il y a deja ${maxCommande} commandes pour cette horaire`,
          });
        return;
      } else {
        res.status(200).json(commandes);
      }
    })
    .catch((error) => res.status(400).json({ error }));
};
exports.postCommande = (req, res) => {
  const commande = req.body;
  Commande.create(commande)
    .then((commande) => res.status(201).json(commande))
    .catch((error) => res.status(400).json({ error }));
};