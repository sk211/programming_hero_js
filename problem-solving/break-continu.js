const products = [
    { name: 'sumsung s3 phone', price: 12000 },
    { name: 'lenevo laptop', price: 18000 },
    { name: 'hp laptop', price: 1200 },
    { name: 'mi router', price: 80000 },
    { name: 'google plus', price: 10200 },
    { name: 'realme wphone', price: 100 }
]

// for (const product of products) {
//     if (product.price < 10000) {
//         break;
//     }
//     console.log(product);
// }
for (const product of products) {
    if (product.price < 10000) {
        continue;
    }
    console.log(product);
}