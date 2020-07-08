const symbols = require('./emagi-symbols.js');
const words = require('./emagi-words.js');

const emagify = function (arr) {
    let result = []
    for (const word of arr) {
        if (words.includes(word)) {
            let indexOfWord = words.indexOf(word)
            result.push(symbols[indexOfWord])
        } else {
            result.push(word)
        }
    }
    return result
}

module.exports = emagify