// problem - 1

function seerToMon(seer) {
    let mon = seer / 40;
    if (seer <= 0 || typeof seer != 'number') {
        return "Enter only positive number";
    }
    return mon;
}
const resultSeerMon = seerToMon(true);

console.log(resultSeerMon);
