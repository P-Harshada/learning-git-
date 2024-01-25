///array map method
let arr= [12,13,14,15]
let a= arr.map((value,index,array)=>{
  console.log(value,index,array)
  return value + index
})
console.log(a)


///array filter method
let arr2=[1,2,3,4,5,7,7,7,8,8,9,9,0,775]
let a2=arr2.filter((b)=>{
  return b>5
})
console.log(a2) 

///array reduce method
let arr3=[10,11,12,13,14,15]
const reduce_func =(h1,h2)=>{
  return h1+h2
}
let newarr3=arr3.reduce(reduce_func)
console.log(newarr3)