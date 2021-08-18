const phones = [
    {
        name: 'sumsung',
        price: 4500,
        camera: 10,
        storeg: 32
    },
    {
        name: 'walton',
        price: 2000,
        camera: 16,
        storeg: 32
    },
    {
        name: 'xhaomi',
        price: 4000,
        camera: 11,
        storeg: 64
    },
    {
        name: 'realme',
        price: 50000,
        camera: 22,
        storeg: 32
    }
    ,
    {
        name: 'oppo',
        price: 2500,
        camera: 32,
        storeg: 10
    }
]
let cheapest = phones[0];
for (const phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest = phone
    }
}
console.log(cheapest.name);
