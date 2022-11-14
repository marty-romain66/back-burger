const express = require('express');
const router = express.Router();
const commande = require('../controllers/commande.controller');

router.get('/', commande.findAll);
router.post('/test' , commande.test);

router.post('/scommande', commande.postScommande);
router.get('/selectcommande', commande.selectCommande);

router.post('/commande', commande.postCommande);

module.exports = router;



