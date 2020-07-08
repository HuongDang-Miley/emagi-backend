
let arr1 = ['1', '2', '3'] //-> a=1; b=2; c=3
let arr2 = ['a', 'b', 'c']

//-> put in ['a', 'b', 'd']. give back ['1', '2,', 'd']
// let include = arr1.includes(arr2[0])
// include;


let userArr = ['b', 'c', 'd', 'a', 'a', 'f', 'c']

let test = mapping(userArr)
test;

function mapping(arr) {
    let result = []
    for (const char of arr) {
        if (arr2.includes(char)) {
            let wordIndex = arr2.indexOf(char)
            result.push(arr1[wordIndex])
        } else {
            result.push(char)
        }
    }
    return result
}

// let arrMeal = ['breakfast', 'lunch', 'dinner']
// let arrDish = ['hotdog', 'salad', 'stake'] //-> a=1; b=2; c=3
// let arrInput = ['dog','sta', 'sa']

// function convert(str) {
//     let result =[]
//     for (const dish of arrDish) {
//         for (const abb of arrInput) {
//             if (dish.includes(abb)) {
//                 let currentIndexOfDish = arrDish.indexOf(dish)
//                 result.push(arrMeal[currentIndexOfDish])
//             }
//         }
//     }
//     return result
// }

let symbols = ['breakfast', 'lunch', 'dinner']
let words = ['hotdog', 'salad', 'stake'] //-> a=1; b=2; c=3
let str = ['hot']

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

let 

let test2 = emagiSearch(str)
test2;