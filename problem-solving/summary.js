// const number = 1.2345

// const floor = Math.floor(number);

// console.log(floor);
// math cile
// const number = 1.2345

// const cile = Math.cile(number);

// console.log(cile);

// math the random 

// const rounded = Math.ceil(Math.random() * 6);

// console.log(rounded);

// lottery 

// const random = Math.random();
// const between10 = random * 100;
// const rounded = Math.round(between10);
// console.log(rounded);

const selected = [];
for (let i = 0; i < 10; i++) {
    const random = Math.random() * 100;
    const picked = Math.round(random);
    if (selected.indexOf(picked) == -1) {
        selected.push(picked);

    }
    else {
        console.log("found the duplicate", selected, picked);
    }
}
console.log(selected);