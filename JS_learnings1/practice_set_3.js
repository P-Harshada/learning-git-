add number in array by input
Q1
let arr= [1,2,3,4,5,6,7,8,9,10]
let a = prompt("enter a number: ")
a= Number.parseInt(a)
arr.push(a)
console.log(arr)

Q2-add number until 0 comes and break 

let arr= [1,2,3,4,5,6,7,8,9,10]
let a;
do{
a=prompt("enter a number: ")
a= Number.parseInt(a)
arr.push(a)
}while (a!=0);
console.log(arr)

Q3 filter for no. of array divisible by 10 from a given array
let arr=[10,12,15,13,30,4,40,5,50,60,7,70,8,80,100]
let n =arr.filter((x)=>{
    return x%10==0
})
console.log(n)

Q4 squares
let arr=[1,2,34,4]
let n =arr.map((x)=>{
 return x*x
})
console.log(n)


//Q5
let arr=[1,2,34,4]
let n =arr.reduce((x1,x2)=>{
 return x1*x2
})
console.log(n)







