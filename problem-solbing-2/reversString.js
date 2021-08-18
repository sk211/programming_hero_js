function reverseString(text) {
    let reverse = "";
    for (const latter of text) {
        console.log(latter);
        reverse = latter + reverse;
    }
}
const reversed = reverseString("sujan");
console.log(reversed);