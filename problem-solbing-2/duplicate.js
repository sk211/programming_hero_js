const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fbul', 'babul', 'abul', 'dabul', 'gabul'];

function removeDuplicate(names) {
    const unique = [];
    // for (let i = 0; i < name.length; i++) {
    //     const element = name[i];
    // }
    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
const uniqueName = removeDuplicate(names);
console.log(uniqueName);