let a = [1,2,3,4,5,6,7,8,9];
let b = a.filter(i=>(i%2==0))
console.log("a=",a);
console.log("even=",b);
const c =b.map(i=>(i*i));
console.log("square=",c);
