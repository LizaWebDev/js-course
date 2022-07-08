//global scope
let a
let b
function myFn() {
   //function scope
   let b
   a = true
   b = 10
   console.log(b)
}

myFn()

console.log(a)
console.log(b)