function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}
const myYear = 2087;
const ismylipeYear = isLeapYear(myYear);
console.log(ismylipeYear);

const yourYear = 2024;
const isyourlipeYear = isLeapYear(yourYear);
console.log(isyourlipeYear);