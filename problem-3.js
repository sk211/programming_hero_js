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
const deliveryCharge = deliveryCost(20);
console.log(deliveryCharge);

// //  Problem 3 deliveryCost
// function deliveryCost(quantity) {
//     //Assigning Essenial Variables
//     const costLvl1 = 100 * 100;
//     const costLvl2 = costLvl1 + (quantity - 100) * 80;
//     const costLvl3 = costLvl1 + 100 * 80 + (quantity - 200) * 50;
//     //Conditions for unwanted input and the functions condition
//     if (quantity < 0 || typeof quantity == 'string') {
//         return 'Input cannot be negative number or a string';
//     }
//     else if (quantity <= 100) {
//         return quantity * 100;
//     }
//     else if (quantity > 100 && quantity <= 200) {
//         return costLvl2;
//     }
//     else if (quantity > 100 && quantity <= 200) {
//         return costLvl2;
//     }
//     else {
//         return costLvl3;
//     }
// }
// const variable = deliveryCost(50);
// console.log(variable);
