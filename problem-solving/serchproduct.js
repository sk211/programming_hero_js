const products = [
    { name: 'sumsung s3 phone', price: 1200 },
    { name: 'lenevo laptop', price: 8000 },
    { name: 'hp laptop', price: 1200 },
    { name: 'mi router', price: 8000 },
    { name: 'google plus', price: 1200 },
    { name: 'realme wphone', price: 1200 }
]

function serchProducts(products, searchtext) {
    const matched = [];
    for (const product of products) {
        const name = product.name
        if (product.name.indexOf(searchtext) != -1) {
            matched.push(product);
        }
    }
    return matched;
}
const matched = serchProducts(products, 'phone');
console.log(matched);