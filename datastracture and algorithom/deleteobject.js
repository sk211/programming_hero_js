const person = {
    firstName: "sujan",
    age: 25,
    hobbies: [
        "sports",
        "cooking"
    ],

}
person.lastName = "majumder"
console.log(person);

delete person.age;
console.log(person);