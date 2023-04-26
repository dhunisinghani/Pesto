"use strict"

function hasDuplicate(array) {
    return new Set(array).size !== array.length
}

let ARRAY = [1,2,3,4,1,2];


console.log(`Conains Duplicate values:-`, hasDuplicate(ARRAY));
