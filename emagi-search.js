const words = require('./emagi-words.js');
const symbols = require('./emagi-symbols.js');

function emagiSearch(str) {
    let result =[]
    for (const word of words) {
            if (word.includes(str)) {
                let wordIndex = words.indexOf(word)
                result.push(symbols[wordIndex])
            }
        }
    return result
}

module.exports = emagiSearch