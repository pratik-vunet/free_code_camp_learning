import restaurants from './restaurant';
const hour: number = new Date().getHours()
const dollarSigns: string = '$$';
const deliveryTimeMax: number = 90;
const maxDistance: number = 10;
let result: string;
const invalidLength: number = 0;

const priceBracket: number = dollarSigns.length;

const filteredRestaurants = restaurants.filter((restaurant) => (restaurant.openHour < hour || hour < restaurant.closeHour) && restaurant.priceBracket < priceBracket && restaurant.deliveryTimeMinutes < deliveryTimeMax && restaurant.distance < maxDistance)

if (filteredRestaurants.length === invalidLength) {
    result = 'There are no restaurants available right now.';
} else {
    result = `We found ${filteredRestaurants.length} restaurants, the first is ${filteredRestaurants[0].name}.`;
}

console.log(result);