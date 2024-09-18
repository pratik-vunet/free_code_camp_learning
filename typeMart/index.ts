import products from "./products"
let productName: string = "fanny pack"
let shipping: number = 0;
let taxPercent: number;
let taxTotal: number;
let total: number;
const freeShoppingAmount = 25;
const cityTax = "New York";
const newYorkTaxPerc = 0.10;
const otherCityTaxPerc = 0.05;
const shippingAddress: string = "575 Broadway, New York City, New York";
const product = products.filter(product => product.name === productName)[0];
if (product.preOrder === "true") {
    console.log('We will send you a message when your product is on its way.');
}

if (Number(product.price) > freeShoppingAmount) {
    shipping = 0;
    console.log("we provide free shipping for this product");
}
if (shippingAddress.match(cityTax)) {
    taxPercent = newYorkTaxPerc;
}
else {
    taxPercent = otherCityTaxPerc;
}
taxTotal = Number(product.price) * taxPercent;
total = taxTotal + Number(product.price) + shipping

console.log(`
Product name: ${product.name}
Shipping address: ${shippingAddress}
Price of the product: ${Number(product.price)}
Tax total: ${taxTotal}
Shipping: ${shipping}
Total amount: ${total}

`)

