// Apply helps to provide the arguments in array format
// For example we want to find the min or max number
// So we have to pass number as arguments 
// So we use .apply function and pass array to it as argument

let numArray = [1,2,4,5,6,7]
let min = Math.min.apply(null, numArray);
let max = Math.max.apply(null, numArray);

console.log(`MIN:${min} and MAX:${max}`);