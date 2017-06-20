var express = require('express');
var config = require('config');
var dbConfig = config.get('DbConnection.dbConfig');

var router = express.Router();
var dishesModel = require("../models/dishes-model");
router.get('/', function (req, res) {
  var dishes = dishesModel.getDishes();
  var json = JSON.stringify(dishes);
  res.send(json);
});
router.post('/', function (req, res) {
  var item = req.body.item;
  var dishes = dishesModel.createDish(item);
  res.send(dishes);
});

module.exports = router;
