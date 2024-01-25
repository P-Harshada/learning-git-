let marks = [90,98,91,44,53,76,53,null,"false", "absent"]
marks[11]=100
marks[0]=101
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
console.log(marks[5])
console.log(marks[6])
console.log(marks[7])
console.log(marks[8])
console.log(marks[9])
console.log(marks[10])
console.log(marks[11])
console.log("length of marks is ", marks.length)

marks = [90,98,91,44,53,76,53,null,"false", "absent"]
console.log("using loops")
for(let i=0, i< marks.length,i++ ){
  console.log(marks[i])
}

let num = [1,2,3,4,5,6]
let b =num.toString()
console.log(b,typeof b)

let c = num.join(" and ")
console.log(c, typeof c)

num.pop()
console.log(num)
let r = num.pop()
console.log(num,r)

let r = num.push(999)
console.log(num,r)

let r = num.shift()
console.log(r)

let r = num.unshift(28765)
console.log(r)

let numbers = [1,2,3,4,5]
console.log(numbers.length)
numbers[0].delete

let num1=[1,2,3,4,5,6,6]
let num2=[8,6,5,46,4,76556,0,98860]
let num3=[111,222,333,444,555,666,777,888,999]
let newArray = num1.concat(num2,num3)
console.log(newArray)

let compare =(a,b)=>{
  return a-b
}
// newArray.sort(compare)
// console.log(newArray)

num2.sort(compare)
console.log(num2)

let compare =(a,b)=>{
  return b -a
}
num2.sort(compare)
num2.reverse()
console.log(num2)

let num= [10,2,34,55,200,23]
// num.splice(4,2,111,222,333,444,555)
// console.log(num)

let newNum =num.slice(1,4)
console.log(newNum)



//////////loops in Arrays///////////
let num= [1,2,3,4,5,5,6,7,7,77,77777777,775444,888]
// for (let i=0; i<num.length;i++){
//   console.log(num[i])
// }
//for loop/////////////
num.forEach((element)=> {
  console.log(element*element)
})

/array from////
let name1 = 'harry'
let arr=Array.from(name1)
console.log(arr)

from ..of ///
let num= [11,22,33,44,566,777]
for (let i of num ){
  console.log(i)
}
