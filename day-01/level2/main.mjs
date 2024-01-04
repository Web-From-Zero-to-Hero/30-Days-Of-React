'use strict'

import countries from "./counties.mjs";
import webTechs from "./webTech.mjs";

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

let words = text.split(/[\s,.]+/);
if (words[words.length - 1] === '') {
  words.pop();
}

console.log(words)
console.log(words.length)



const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

if (shoppingCart.includes('Meat') != -1) {
  shoppingCart.unshift('Meat');
}

if (shoppingCart.includes('Sugar') != -1) {
  shoppingCart.push('Sugar');
}

shoppingCart[3] = 'Green Tea';

console.log(shoppingCart);


if (countries.includes('Ethiopia')) {
  console.log('ETHIOPIA');
} else {
  countries.push('Ethiopia');
}


if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess');
} else {
  webTechs.push('Sass');
  console.log(webTechs);
}


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

let fullStack = [...frontEnd, ...backEnd];

console.log(fullStack)