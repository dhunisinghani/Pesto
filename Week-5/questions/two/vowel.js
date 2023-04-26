"use strict"

function isVowel(character) {
    return 'aeiou'.includes(character);
}

function vowelCountMap(word) {
    let wordMap = new Map();

    for (const character of word) {
        let lowerCaseCharacter = character.toLowerCase();
        if(isVowel(lowerCaseCharacter)) {
            
            if(wordMap.has(lowerCaseCharacter)) {
                wordMap.set(lowerCaseCharacter, wordMap.get(lowerCaseCharacter)+1);
            } else {
                wordMap.set(lowerCaseCharacter, 1);
            }
        }
    }

    return wordMap; 
}

console.log(`Your Map:-`, vowelCountMap("Bharat"));