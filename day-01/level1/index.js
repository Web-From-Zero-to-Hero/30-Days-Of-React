// let age = prompt("Enter your age: ");

// if (age >= 18) {
//     alert("You are old enough to drive");
// } else {
//     alert(`You are letf with ${18 - age} years to drive`);
// }

// let myAge = 21;

// if (age < myAge) {
//     alert(`You are ${myAge - age} younger than me`);
// } else if (age > myAge) {
//     alert(`You are ${age - myAge} older than me`);
// } else {
//     alert(`We have the same age!`);
// }


// let a = 4;
// let b = 3;
// let output = "";

// if (a > b) {
//     output = "a is greater than b";
// } else {
//     output = "a is less than b";
// }
// alert(output);

// output = a > b ? "a is greater than b" : "a is less than b";
// alert(output);


// let number = prompt("Enter a number: ");
// let output = number % 2 === 0 ? `${number} is an even number` : `${number} is an odd number`;
// alert(output);


let dog = {
    name: "Joba",
    legs: 4,
    color: "black",
    age: 3,
    bark: () => {
        return "woof woof";
    }
};

dog.breed = "korgi";
dog.getDogInfo = function() {
    return this;
};

console.log(dog.getDogInfo());