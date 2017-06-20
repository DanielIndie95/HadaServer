var express = require('express');
var config = require('config');
var dbConfig = config.get('DbConnection.dbConfig');

var router = express.Router();
var menusModel = require("../models/menus-model");

router.get('/', function (req, res) {
    var startDate = req.query.startDate;
    var endDate = req.query.endDate;
    var type = req.query.type;
    var expand = req.query.expand;
    console.log(startDate,endDate,type,expand);
    var menus = menusModel.getMenus(type, startDate, endDate, expand);
    res.send(menus);
})

router.post('/', function (req, res) {
    var item = req.body.item;
    var menus = menusModel.createMenu(item);
    res.send(menus);
});

module.exports = router;