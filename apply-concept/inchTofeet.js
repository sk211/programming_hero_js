function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}


var myinches = 132;

var feet = inchToFeet(myinches);
console.log("myInces in feet", feet);

var dadiInches = 144;

var feet = inchToFeet(dadiInches);
console.log("dadi in feet", feet);

var naniInches = 156;

var feet = inchToFeet(naniInches);
console.log("nani in feet", feet);

var nanaInches = 168;

var feet = inchToFeet(nanaInches);
console.log("nana in feet", feet);

// mile to km 

function mileTokilometer(miles) {
    var km = miles * 1.60934;
    return km;
}
var marathon = mileTokilometer(26.2);
console.log("marathon  in km:", marathon);