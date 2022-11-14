const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require("cors");
// const test = require('./routes/test');
// const admin = require('./routes/admin');
const user = require('./routes/user');
const app = express();

app.use(cors(
    {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin', 'Access-Control-Allow-Origin', 'horaire','token'],
        credentials: true,
      
      
    }
));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*", "Authorization", "admin", "Horaire", "horaire",'token');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept", "Authorization", "horaire", "Horaire","token"  );
    next();
  });
  app.use(bodyParser.json());
//   app.use("/api/test",test);
app.use("/api/user",user);
app.use('/api/products', require('./routes/product'));
app.use('/api/commandes', require('./routes/commandes'));
console.log("test");

  module.exports = app;