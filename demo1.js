function sum(a=0,b=0){
    return(a+b);
}
const add =(...num)=>{
    // const sum = num.reduce((i,s)=>a+b,0);
    let sum =0;
    for(let i of num){
        sum = sum+i;
    }
    return sum;
}
export {sum,add} ;