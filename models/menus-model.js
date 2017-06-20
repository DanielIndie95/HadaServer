const moment = require("moment");
const dishesModel = require("./dishes-model");
const uuidv4 = require('uuid/v4');
const _ = require("lodash");
var menus = [];
function getMenus(type, startDate, endDate, expand) {
    try {
        var filteredMenus = menus.slice();
        if (startDate && endDate)
            filteredMenus = filterByDate(filteredMenus, startDate, endDate);
        if (type)
            filteredMenus = filterByType(filteredMenus, type);
        if (expand) {
            console.log("start expanding")
            filteredMenus = expandMenu(filteredMenus)
        }
        return filteredMenus;
    } catch (err) {
        console.error(error);
    }
}

function filterByDate(menus, startDate, endDate) {
    return menus.filter(menu => {
        var date = moment(menu.date);
        return date.isSameOrBefore(endDate, "day") && date.isSameOrAfter(startDate, "day")
    });
}
function filterByDate(menus, type) {
    return menus.filter(menu => {
        return menu.type == type
    });
}
function expandMenu(menus) {
    return menus.map(menu => {
        console.log(dishesModel.getDishesByIds(menu.dishes));
        var cloned = JSON.parse(JSON.stringify(menu))
        cloned.dishes = dishesModel.getDishesByIds(menu.dishes);
        return cloned;
    });
}
function createMenu(menu) {
    try {
        var id = uuidv4();
        menu.id = id;
        menus.push(menu);
    } catch (err) {
        console.error(error);
    }
}


module.exports = {
    createMenu: createMenu,
    getMenus: getMenus
};