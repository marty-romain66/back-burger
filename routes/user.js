const express = require('express');
const router = express.Router();
const admin = require('../middleware/admin');

const user = require('../controllers/user.controller');
// const admin = require("../middleware/admin");

router.post('/register',user.register);
router.post('/login', user.login);
// router.get("/test", user.test);
// router.post('/login', user.login);
router.get('/admin', admin, user.admin);

router.get("/config" , user.config);
router.post("/config" , user.createConfig);

console.log("test");

module.exports = router;