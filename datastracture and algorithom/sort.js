function findMinNumber(array) {
    if (!array.length) {
        throw new Error("Array shoud not be empty")
    } else if (array.length == 1) {
        return array[0];
    } else {
        let currentMin = array[0];
        for (let i = 1; i < array.length; i++) {
            if (array[i] < currentMin) {
                currentMin = array[i]
            }
        }
        return currentMin;
    }

}
const result = findMinNumber([2, 4, 3, 2, 6, 7, 8, 1])
console.log(result);