const express = require('express');
const router = express.Router();
const admin = require('../middleware/admin');
const burger = require('../controllers/burger.controller');
const boisson = require('../controllers/boisson.controller');
const dessert = require('../controllers/dessert.controller');
const menu = require('../controllers/menu.controller');

router.get('/burgers', burger.findAll);
router.get('/burgers/:id', burger.findOne);
router.post('/burgers', burger.createBurger);
router.put('/burgers/:id', burger.update);
router.delete('/burgers/:id', burger.delete);

router.get('/boissons', boisson.findAll);
router.get('/boissons/:id', boisson.findOne);
router.post('/boissons', boisson.create);
router.put('/boissons/:id', boisson.update);
router.delete('/boissons/:id', boisson.delete);

router.get('/desserts', dessert.findAll);
router.get('/desserts/:id', dessert.findOne);
router.post('/desserts', dessert.create);
router.put('/desserts/:id', dessert.update);
router.delete('/desserts/:id', dessert.delete);

router.get('/menu', menu.findAll);
router.get('/menu/:id', menu.findOne);
router.post('/menu', menu.create);
router.put('/menu/:id', menu.update);
router.delete('/menu/:id', menu.delete);



module.exports = router;


