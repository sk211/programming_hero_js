const business = 850;
const minister = 750;
const army = 600;

if (business > minister) {
    console.log("business person ar pola is bigger");
} else {
    console.log("minister er polo is bigger");
}

if (business > minister && business > army) {
    console.log("business is bigger");
}
else if (minister > business && minister > army) {
    console.log("minister is bigger");
}
else {
    console.log("army is bigger");
}

var max = Math.max(business, minister, army);

console.log("largest is ", max);