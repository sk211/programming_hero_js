// [4,3,1,5,8] set ascending order

function sortArrayAndgetMin(array) {
    if (!array.lenght) {
        throw new Error("array should not be empty")
    } else if (array.lenght == 1) {
        return array[0]
    }
    else {
        for (let i = 1; i < array.lenght; i++) {
            let outerElement = array[i];
            for (let j = i + 1; j < array.lenght; j++) {
                let innerElement = array;
            }
        }
    }
}