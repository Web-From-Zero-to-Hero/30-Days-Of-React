// let months = {
//     "September": 30,
//     "October": 31,
//     "November": 30,

//     "December": 31,
//     "January": 31,
//     "February": "28 (or 29)",

//     "March": 31,
//     "April": 30,
//     "May": 31,

//     "June": 30,
//     "July": 31,
//     "August": 31,
// }

// let month = prompt("Enter a month: ");
// month = month[0].toUpperCase() + month.slice(1).toLowerCase();

// alert(`${month} has ${months[month]} days.`);



// let personalAccount = {
//     firstName: "Dima",
//     lastName: "Matov",
//     incomes: new Set(),
//     expenses: new Set(),
//     totalEncome: function() {
        
//     },
//     totalExpense: function() {

//     },
//     accountInfo: function() {
//         return this;
//     },
//     addIncome: function() {

//     },
//     addExpense: function() {

//     }
// }


// const users = [
//     {
//       _id: 'ab12ex',
//       username: 'Alex',
//       email: 'alex@alex.com',
//       password: '123123',
//       createdAt: '08/01/2020 9:00 AM',
//       isLoggedIn: false,
//     },
//     {
//       _id: 'fg12cy',
//       username: 'Asab',
//       email: 'asab@asab.com',
//       password: '123456',
//       createdAt: '08/01/2020 9:30 AM',
//       isLoggedIn: true,
//     },
//     {
//       _id: 'zwf8md',
//       username: 'Brook',
//       email: 'brook@brook.com',
//       password: '123111',
//       createdAt: '08/01/2020 9:45 AM',
//       isLoggedIn: true,
//     },
//     {
//       _id: 'eefamr',
//       username: 'Martha',
//       email: 'martha@martha.com',
//       password: '123222',
//       createdAt: '08/01/2020 9:50 AM',
//       isLoggedIn: false,
//     },
//     {
//       _id: 'ghderc',
//       username: 'Thomas',
//       email: 'thomas@thomas.com',
//       password: '123333',
//       createdAt: '08/01/2020 10:00 AM',
//       isLoggedIn: false,
//     },
// ];
  
// const products = [
//     {
//       _id: 'eedfcf',
//       name: 'mobile phone',
//       description: 'Huawei Honor',
//       price: 200,
//       ratings: [
//         { userId: 'fg12cy', rate: 5 },
//         { userId: 'zwf8md', rate: 4.5 },
//       ],
//       likes: [],
//     },
//     {
//       _id: 'aegfal',
//       name: 'Laptop',
//       description: 'MacPro: System Darwin',
//       price: 2500,
//       ratings: [],
//       likes: ['fg12cy'],
//     },
//     {
//       _id: 'hedfcg',
//       name: 'TV',
//       description: 'Smart TV:Procaster',
//       price: 400,
//       ratings: [{ userId: 'fg12cy', rate: 5 }],
//       likes: ['fg12cy'],
//     },
// ];


// function signUp(userName, email, password) {
//     for (let user in users) {
//         if (user.username === userName) {
//             return "You already have and account.";
//         }
//     }

//     let newUser = {
//         _id: '123124',
//         username: userName,
//         email: email,
//         password: password,
//         createdAt: new Date(),
//         isLoggedIn: false,
//     }

//     users.push(newUser);
//     return "You have signedUp successfully!";
// }

// function sighnIn(userName, password) {
//     for (let user in users) {
//         if (user.username === userName) {
//             if (user.password === password) {
//                 return "You have signedIn successfully!";
//             } else {
//                 return "Invalid password!";
//             }
//         }
//     }

//     return "Invalid username of password!";
// }



// function userIdGeneratedByUser(numberOfCharacter, numberOfIds) {
//     let ids = [];

//     for (let i = 0; i < numberOfIds; i++) {
//         ids.push(generateId(numberOfCharacter));
//     }

//     return ids;
// }


// function generateId(idLength) {
    // let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@#$%^&*~";
    // let id = "";

    // for (let i = 0; i < idLength; i++) {
    //     id += characters[Math.floor(Math.random() * (characters.length - 1))];
    // }

    // return id;
// }

// console.log(userIdGeneratedByUser(5, 6));
// console.log(userIdGeneratedByUser(8, 10));


// function generateColors(format, numberOfColors) {
//     let colors = [];

//     for (let i = 0; i < numberOfColors; i++) {
//         colors.push(generateColor(format));
//     }

//     return colors;
// }

// function generateColor(format) {
//     let hexValues = "ABCDEF1234567890";
//     let color = "";

//     if (format === "hexa") {
//         color += "#";
//         for (let i = 0; i < 6; i++) {
//             color += String(hexValues[Math.floor(Math.random() * (hexValues.length - 1))]);
//         }
//     } else if (format === "rgb") {
//         color += "rgb(";
//         for (let i = 0; i < 3; i++) {
//             color += `${Math.floor(Math.random() * 255)}, `;
//         }

//         color = color.slice(0, color.length - 2);
//         color += ")";
//     }

//     return color;
// }


// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'



const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
];

let result = 0;
products.forEach( (element) => {
    result += Number(element.price);
});

let prices = products.map( (item) => Number(item.price) );
console.log(prices);

console.log(products.filter( (item) => Number(item.price) ));

console.log(products.reduce( (acc, curr) => {
    acc.price += Number(curr.price);
    return acc;
} ).price);


console.log(products.find( (item) => !Number(item.price) ));

console.log(products.findIndex( (item) => !Number(item.price) ));

console.log(products.some( (item) => !Number(item.price) ));

console.log(products.every( (item) => Number(item.price) ));
