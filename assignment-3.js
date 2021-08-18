// problem - 1 convart seer To Mon

function seerToMon(seer) {
    let mon = seer / 40;
    if (seer <= 0 || typeof seer != 'number') {
        return "Enter only positive number";
    }
    return mon;
}
const resultSeerMon = seerToMon(80);

console.log(resultSeerMon);



//problem-2 totalSales  - find total shoping card price

function totalSales(shirtQuanty, pantQuanty, shoeQuanty) {

    if (shirtQuanty <= 0 || pantQuanty <= 0 || shoeQuanty <= 0) {
        return "Enter any prositive number";
    }
    else if (typeof shirtQuanty != "number" || typeof pantQuanty != "number" || typeof shoeQuanty != "number") {
        return "Enter any number not string";
    }
    else {
        const perShirtPrice = 100;
        const perPantPrice = 200;
        const perShoePrice = 500;


        /* product quantity calculation is here */
        const mythShirtQuantity = perShirtPrice * shirtQuanty;
        const mythPantQuantity = perPantPrice * pantQuanty;
        const mythShoeQuantity = perShoePrice * shoeQuanty;

        /* total product quantity is here */
        const totalProductQuantity = mythShirtQuantity + mythPantQuantity + mythShoeQuantity;
        return totalProductQuantity;
    }
}

console.log(totalSales(1, 1, 1));



// // problem - 3
function deliveryCost(quantity) {
    //Assigning Essenial Variables
    const first100TshirtDeliver = 100;
    const second100TshirtDeliver = 80;
    const third100TshirtDeliver = 50;

    if (quantity <= 0) {
        return "Enter any prositive number";
    }
    else if (typeof quantity != "number") {
        return "Enter any number not string";
    }
    else {

        if (quantity <= 100) {
            const count = quantity * first100TshirtDeliver
            return count;
        }
        else if (quantity <= 200) {
            const first100ProductDeliver = 100 * first100TshirtDeliver;
            const extraPruduct = quantity - 100;
            const secondDeliveryCharge = extraPruduct * second100TshirtDeliver;
            const totalDeliveryCharge = first100ProductDeliver + secondDeliveryCharge
            return totalDeliveryCharge;
        }
        else {
            const first100ProductDeliver = 100 * first100TshirtDeliver;
            const secondDeliveryCharge = 100 * second100TshirtDeliver;
            const extraProduct = quantity - 200;
            const thirdDeliverCharge = extraProduct + third100TshirtDeliver;
            const totalDeliveryCharge = first100ProductDeliver + secondDeliveryCharge + thirdDeliverCharge;
            return totalDeliveryCharge;
        }

    }
}
const deliveryCharge = deliveryCost(100);
console.log(deliveryCharge);


// problem-4  Find big srting in array 

function perfectFriend(friend) {
    let bigChar = friend[0];
    for (let i = 0; i < friend.length; i++) {
        const element = friend[i]
        if (element.length > bigChar.length) {
            bigChar = friend[i];
        }
    }
    return bigChar;
}
const friends = ['sujan', 'akbo', 'rakib', 'Abdur Rahaman', 'tanvir'];

const bigNamefriend = perfectFriend(friends);
console.log(bigNamefriend);
