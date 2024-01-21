//age guessing QUIZ//
let age = prompt ("what's your age? ");
if ("a>10 && a<20"){
  console.log("your age is between 10 and 20")
}
else{
  console.log("your age is not between 10 and 20")
}


let sum = 0
let n = prompt("enter the value of n ")
n= Number.parseInt(n)
for (let i = 0 ; i<n; i++){
  sum+= (i+1)
}

console.log("sum of first" +n+"natural number is "+ sum)

let n= prompt("enter the value of n")
n = Number.parseInt(n)

 
// while loops
let i = 0
while(i<n){
    console.log(i)
    i++ ;
}

//do while loops
let i = 0
do{ 
    console.log(i)
    i++ 
}while(i<n)


///functions in JS
function onePlusAvg(x,y){
return 1+(x+y)/2
}

a=1
b=2
c=3

console.log("one plus average of a and b is",onePlusAvg(a,b))
console.log("one plus average of b and c is",onePlusAvg(b,c))
console.log("one plus average of a and c is",onePlusAvg(a,c))

const sum = (p,q)=>{
    return(p+q)
}
console.log(sum(1999999990,128983774666672))