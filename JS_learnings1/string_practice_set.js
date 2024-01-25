Q1
let str= "har\""
console.log(str.length)

Q2
 let girl = "harshu"
console.log(girl.toUpperCase())

Q3
let str1 = "please give Rs 1000"
// let amount = str1.slice("please give Rs".length)
let amount = Number.parseInt(str1.slice(15))  
console.log(amount)
console.log(typeof amount)

Q4
let friend = "sakura"
friend[1]= "k"
console.log(friend)
//can not be changed because strings are immutable 