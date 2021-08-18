//problem-2 totalSales 
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

