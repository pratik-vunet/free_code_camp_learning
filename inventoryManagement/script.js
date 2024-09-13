const popup = document.getElementById("popup");
const tableBody = document.getElementById("tableBody");
const totalCost = document.getElementById("totalCost");
const averagePrice = document.getElementById("averagePrice");
const filterOption = document.getElementById("filterOption");
const sortAsc = document.getElementById("asc");
const sortDesc = document.getElementById("desc");
const rangeSubmit = document.getElementById("rangeSubmit");
const minimum = document.getElementById("minimum");
const maximum = document.getElementById("maximum");
const form = document.getElementById("form");
const products = [
    { productName: "ZTE nubia Z9", brand: "ZTE", price: 220, quantity: 8 },
    { productName: "Motorola A810", brand: "Motorola", price: 897, quantity: 46 },
    { productName: "vivo X20 Plus", brand: "vivo", price: 455, quantity: 50 },
    { productName: "LG Q6", brand: "LG", price: 311, quantity: 59 },
    { productName: "Samsung Z370", brand: "Samsung", price: 331, quantity: 65 },
    { productName: "Micromax Q372 Unite 3", brand: "Micromax", price: 646, quantity: 10 },
    { productName: "Samsung A411", brand: "Samsung", price: 205, quantity: 97 },
    { productName: "LG KP105", brand: "LG", price: 532, quantity: 93 },
    { productName: "Lava A82", brand: "Lava", price: 221, quantity: 83 },
    { productName: "Sony Xperia M5 Dual", brand: "Sony", price: 82, quantity: 96 },
    { productName: "Nokia Asha 500 Dual SIM", brand: "Nokia", price: 128, quantity: 47 },
    { productName: "Nokia 7900 Crystal Prism", brand: "Nokia", price: 169, quantity: 23 },
    { productName: "Philips 755", brand: "Philips", price: 503, quantity: 25 },
    { productName: "Lenovo C2 Power", brand: "Lenovo", price: 684, quantity: 98 },
    { productName: "verykool R16", brand: "verykool", price: 801, quantity: 57 },
    { productName: "Philips X703", brand: "Philips", price: 215, quantity: 42 },
    { productName: "Siemens A50", brand: "Siemens", price: 410, quantity: 75 },
    { productName: "Tecno Camon iACE2", brand: "Tecno", price: 227, quantity: 13 },
    { productName: "Micromax Bolt A82", brand: "Micromax", price: 447, quantity: 9 },
    { productName: "Huawei Ascend D quad", brand: "Huawei", price: 501, quantity: 98 },
    { productName: "Allview X1 Soul Mini", brand: "Allview", price: 25, quantity: 90 },
    { productName: "Sony Ericsson K800", brand: "Sony", price: 457, quantity: 64 },
    { productName: "Huawei Y5 (2019)", brand: "Huawei", price: 36, quantity: 29 },
    { productName: "Siemens S10", brand: "Siemens", price: 468, quantity: 13 },
    { productName: "Infinix Hot 8 Lite", brand: "Infinix", price: 354, quantity: 16 },
    { productName: "ZTE Grand S II", brand: "ZTE", price: 602, quantity: 49 },
    { productName: "Samsung Galaxy Watch Active2 Aluminum", brand: "Samsung", price: 147, quantity: 50 },
    { productName: "Philips 892", brand: "Philips", price: 612, quantity: 60 },
    { productName: "Pantech G200", brand: "Pantech", price: 702, quantity: 42 },
    { productName: "ZTE Style Q", brand: "ZTE", price: 158, quantity: 93 },
    { productName: "Celkon A75", brand: "Celkon", price: 57, quantity: 15 },
    { productName: "BlackBerry Keyone", brand: "BlackBerry", price: 610, quantity: 13 }
];

let filteredProducts = [...products];

function showPopup() {
    popup.style.display = "flex";
}



function closePopup() {
    popup.style.display = "none";
    form.reset();
}

function displayTotalCost() {
    const totalAmount = products.reduce((total, product) => total + (product.price * product.quantity), 0);
    totalCost.innerHTML = `<h1>Total Inventory Cost: ${totalAmount}</h1>`;
}





function calculateAverage() {
    if (filteredProducts.length === 0) {
        averagePrice.innerHTML = `<h1>Average Cost on your selections: N/A</h1>`;
        return;
    }
    const totalAmount = filteredProducts.reduce((total, product) => total + product.price, 0);
    const average = Math.ceil(totalAmount / filteredProducts.length);
    averagePrice.innerHTML = `<h1>Average Cost on your selections: ${average}</h1>`;
}

function updateTable() {
    tableBody.innerHTML = filteredProducts.map(product => `
        <tr>
            <td>${product.productName}</td>
            <td>${product.brand}</td>
            <td>${product.price}</td>
            <td>${product.quantity}</td>
        </tr>
    `).join('');
    calculateAverage();
}




function sortByFilter() {
    const option = filterOption.value;
    filteredProducts = products.filter(product => product.brand === option || option === "All Brands");
    updateTable();
}

sortAsc.addEventListener("click", () => {
    filteredProducts.sort((a, b) => a.price - b.price);
    updateTable();
});

sortDesc.addEventListener("click", () => {
    filteredProducts.sort((a, b) => b.price - a.price);
    updateTable();
});



rangeSubmit.addEventListener("click", () => {
    const min = parseFloat(minimum.value) || 0;
    const max = parseFloat(maximum.value) || Infinity;
    filteredProducts = filteredProducts.filter(product => product.price >= min && product.price <= max);
    updateTable();
    closePopup();
});

window.addEventListener("load", () => {
    displayTotalCost();
    sortByFilter();
});
