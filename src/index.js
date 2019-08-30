const flattenJaggedArray = require('./flattenJaggedArray');

const jaggedArray =  [[1,2,[3]],4];
const flatArray = [];

flattenJaggedArray(jaggedArray, flatArray);

console.log(jaggedArray);
console.log(flatArray);
