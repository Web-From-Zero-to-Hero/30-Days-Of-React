// let score = prompt("Enter your score: ");
// let grade;

// if (score < 50) {
//     grade = "F";
// } else if (score >= 50 && score < 60 ) {
//     grade = "D";
// } else if (score >= 60 && score < 70) {
//     grade = "C";
// } else if (score >= 70 && score < 80) {
//     grade = "B";
// } else {
//     grade = "A";
// }

// alert(`Your grade is ${grade}`);

// let month = prompt("Enter month: ");

// let months = {
//     "September": "Autumn",
//     "October": "Autumn",
//     "Nobember": "Autumn",

//     "December": "Winter",
//     "January": "Winter",
//     "February": "Winter",

//     "March": "Spring",
//     "April": "Spring",
//     "May": "Spring",

//     "June": "Summer",
//     "July": "Summer",
//     "August": "Summer",
// }

// alert(months[month]);


// let day = prompt("Enter the weekday: ");

// if (day.toLowerCase() === "saturday" || day.toLowerCase() === "sunday") {
//     alert(`${day[0].toUpperCase()}${day.slice(1).toLowerCase()} is a weekend`);
// } else {
//     alert(`${day[0].toUpperCase()}${day.slice(1).toLowerCase()} is a working day`);
// }


// const users = {
//     Alex: {
//         email: 'alex@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript'],
//         age: 20,
//         isLoggedIn: false,
//         points: 30
//     },
//     Asab: {
//         email: 'asab@asab.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//         age: 25,
//         isLoggedIn: false,
//         points: 50
//     },
//     Brook: {
//         email: 'daniel@daniel.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//         age: 30,
//         isLoggedIn: true,
//         points: 50
//     },
//     Daniel: {
//         email: 'daniel@alex.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     },
//     John: {
//         email: 'john@john.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//         age: 20,
//         isLoggedIn: true,
//         points: 50
//     },
//     Thomas: {
//         email: 'thomas@thomas.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     },
//     Paul: {
//         email: 'paul@paul.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//         age: 20,
//         isLoggedIn: false,
//         points: 40
//     }
// }

// let maxSkillsNumber = 0;
// let mostSkilledUser;
// let loggedUsersNumber = 0;
// let highPointsUsersNumber = 0;
// let mernDevelopers = [];

// for (let user in users) {
//     if (users[user].skills.length > maxSkillsNumber) {
//         maxSkillsNumber = users[user].skills.length;
//         mostSkilledUser = user;
//     }

//     if (users[user].isLoggedIn) {
//         loggedUsersNumber++;
//     }

//     if (users[user].points >= 50) {
//         highPointsUsersNumber++;
//     }

//     let skills = users[user].skills;
//     if (skills.includes("MongoDB") && skills.includes("Express") && skills.includes("React") && skills.includes("Node")) {
//         mernDevelopers.push(user);
//     }
// }

// console.log(mostSkilledUser, loggedUsersNumber, highPointsUsersNumber, mernDevelopers);



// users["Dima"] = {
//     email: "matovxd@gmail.com",
//     skills: ['HTML', 'CSS', 'JavaScript', 'Express', 'React', 'Node'],
//     age: 21,
//     isLoggedIn: true,
//     points: 100
// }

// console.log(Object.keys(users));
// console.log(Object.values(users));



// function solveQuadEquation(a, b, c) {
//     let d = (b * b) - (4 * a * c);
//     console.log(d);
//     let x1 = (-b + Math.sqrt(d)) / (2 * a);
//     let x2 = (-b - Math.sqrt(d)) / (2 * a);

//     let result = new Set();
//     result.add(x1);
//     result.add(x2);

//     return result;
// }

// console.log(solveQuadEquation()) // {0}
// console.log(solveQuadEquation(1, 4, 4)) // {-2}
// console.log(solveQuadEquation(1, -1, -2)) // {2, -1}
// console.log(solveQuadEquation(1, 7, 12)) // {-3, -4}
// console.log(solveQuadEquation(1, 0, -4)) //{2, -2}
// console.log(solveQuadEquation(1, -1, 0)) //{1, 0}


// function printArray(array) {
//     array.forEach((element) => {
//        console.log(element); 
//     });
// }

// printArray([1,2,3,4,5]);


// function showDateTime() {
//     let date = new Date();
//     console.log(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`);
// }

// showDateTime();