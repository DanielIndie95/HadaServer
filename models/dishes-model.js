const uuidv4 = require('uuid/v4');
const _ = require("lodash")
var dishes = [];

function getDishes() {
    try {
        console.log(dishes)
        return dishes;
    } catch (err) {
        console.error(err);
    }
}

function getDishesByIds(ids) {
    try {
        console.log(ids)
        if (ids && ids.length)
            return dishes.filter(dish => _.some(ids, id => dish.id == id));
        return [];
    } catch (err) {
        console.error(err);
    }
}

function createDish(dish) {
    var id = uuidv4();
    dish.id = id;
    console.log(dish.image);
    dishes.push(dish);
}

module.exports = {
    createDish: createDish,
    getDishes: getDishes,
    getDishesByIds: getDishesByIds
}
