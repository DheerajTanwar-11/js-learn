// Strings are the most important topic for any programming languages.

let name = "Dheeraj"
let email = "dheeraj@gmail.com"

let info = "Hi! My name is " + name + " and my email id is " + email

console.log(info)

/*The above method that we have used is not a good practise. Instead of this we can use string interpolation method.*/

let info2 = `Hi! My name is ${name} and my email id is ${email}`

console.log(info2)

/*Another way of declaring string...*/

let name2 = new String("Dheeraj")

console.log(name2)

/*Strings have many methods like length, toUpperCase, toLowerCase, includes etc*/

console.log(name2.length)
console.log(name2.toLowerCase())
console.log(name2.toUpperCase())
console.log(name2.includes('D'))
