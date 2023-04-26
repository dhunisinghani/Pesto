/**
 * Accepts a function as a Argument and returns a function
 * @param {function} fn
 * @returns {function}
 */

function memoize(fn) {
  const cache = new Map();
  return (...arguments) => {
    let key = JSON.stringify(arguments.sort());
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      let value = fn(...arguments);
      cache.set(key, value);
      return cache.get(key);
    }
  };
}
/**
 * Accepts n number of arguments and returns sum of all args
 * @param  {...any} arguments
 * @returns {number}
 */
function add(...arguments) {
  let intialValue = 0;
  return arguments.reduce((accumulator, current) => {
    return accumulator + current;
  }, intialValue);
}

let memoizeAdd = memoize(add);

console.log(memoizeAdd(100, 200, 300));
console.log(memoizeAdd(100, 200));
console.log(memoizeAdd(500, 600));
console.log(memoizeAdd(300, 100, 200));
