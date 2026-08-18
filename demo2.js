const a = [1,2,3,4,5];
const b =[ 6,7,8,9,10];
const c =[...a,...b];
console.log("a=",a);
console.log("b=",b);
console.log("c=",c);
const student ={
    name:"shivam",
    age:99,
    grade:"A+"

}
const newstudent={
    ...student,age:"20"
}
console.log("student",student);
console.log("new student",newstudent);