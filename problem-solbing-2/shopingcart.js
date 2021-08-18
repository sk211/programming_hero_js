const products = [
    { name: "laptop", price: 43000 },
    { name: "Shirt", price: 500 },
    { name: "watch", price: 3600 },
    { name: "phone", price: 55000 }
]
let totalPrice = 0;

for (const product of products) {
    totalPrice = totalPrice + product.price
}
// console.log(totalPrice);


const cart = [
    { name: "laptop", price: 43000, quantity: 1 },
    { name: "Shirt", price: 500, quantity: 8 },
    { name: "watch", price: 3600, quantity: 3 },
    { name: "phone", price: 55000, quantity: 1 }
];
let cartTotal = 0;
for (const product of cart) {
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal
}
console.log(cartTotal);