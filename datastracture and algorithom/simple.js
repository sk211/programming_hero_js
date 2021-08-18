// const name = ["sujan", "akbor", "tanvir", "rakib"];

// // output the name 1 number index 
// console.log(name[1]);

// // how many element 

// console.log(name.length);

// for (const el of name) {
//     console.log(el);
// }

// name.push("akbor");
// console.log(name);
// // const rev = name.reverse().join(" ");
// // console.log(rev);

// // remove the dupilacate array 

// const akborIndex = name.findIndex(el => el == "akbor");
// name.splice(2, 1);
// console.log(name);

// not duplicate in array 

const ids = new Set();

ids.add("sujan");
ids.add("rakib");
ids.add("anik");
ids.add("sujan");

for (const el of ids) {
    console.log(el);
}
