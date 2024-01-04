import countries from './countries.mjs';

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort( (a, b) => a - b );
let minAge = ages[0];
let maxAge = ages[ages.length - 1];
console.log(minAge, maxAge);

let middleItem = ages[ages.length / 2];
console.log(middleItem);

let sumAges = ages.reduce( (a, b) => a + b );
let averageAge = sumAges / ages.length;
console.log(sumAges, averageAge);

let range = maxAge - minAge;
console.log(range);

console.log(Math.abs(minAge - averageAge) > Math.abs(maxAge - averageAge));

let array = countries.slice(0, 10);
console.log(array);

let middleCountry = countries[Math.floor(countries.length / 2)];
console.log(middleCountry);

let firstHalf = countries.slice(0, countries.length / 2 + 1);
let secondHalf = countries.slice(countries.length / 2 + 1);
console.log(firstHalf.length, secondHalf.length);