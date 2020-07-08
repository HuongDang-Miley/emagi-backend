const words = require('./emagi-words.js');
const symbols = require('./emagi-symbols.js');

// const emagiSearch = function(str) {
//     let result = []
//     for (const word of words) {
//         for (const char of str) {
//             if (word.includes(char)) {
//                 let indexOfWord = words.indexOf(word)
//                 result.push(symbols[indexOfWord])
//             }
//         }
//     }
//     return result 
// }

function emagiSearch(str) {
    let result =[]
    for (const word of words) {
        for (const char of str) {
            if (word[0] === char[0]) {
                let wordIndex = words.indexOf(word)
                result.push(symbols[wordIndex])
            }
        }
    }
    return result
}


// console.log(emagiSearch('burger'))
module.exports = emagiSearch