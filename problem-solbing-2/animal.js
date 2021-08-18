function animalCount(miles) {
    const animalFrist10Miles = 10;
    if (miles <= 10) {
        const count = miles * animalFrist10Miles;
        return count;
    }
    else if (miles <= 20) {
        const first10 = 10 * animalFrist10Miles;
        const restMiles = miles - 10;
        const secondDenseanimals = restMiles * animalFrist10Miles;
        const totalAnimals = first10 + secondDenseanimals;
        return totalAnimals;
    }
    else {

    }
}
const animals = animalCount(10);
console.log(animals);
