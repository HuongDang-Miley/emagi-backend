const randomElement = function(arr) {
  let randomNumber = Math.floor(Math.random() * arr.length)
return arr[randomNumber]
}

module.exports = randomElement