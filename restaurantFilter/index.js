"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var restaurant_1 = require("./restaurant");
var hour = new Date().getHours();
var dollarSigns = '$$';
var deliveryTimeMax = 90;
var maxDistance = 10;
var result;
var invalidLength = 0;
var priceBracket = dollarSigns.length;
var filteredRestaurants = restaurant_1.default.filter(function (restaurant) { return (restaurant.openHour < hour || hour < restaurant.closeHour) && restaurant.priceBracket < priceBracket && restaurant.deliveryTimeMinutes < deliveryTimeMax && restaurant.distance < maxDistance; });
if (filteredRestaurants.length === invalidLength) {
    result = 'There are no restaurants available right now.';
}
else {
    result = "We found ".concat(filteredRestaurants.length, " restaurants, the first is ").concat(filteredRestaurants[0].name, ".");
}
console.log(result);
