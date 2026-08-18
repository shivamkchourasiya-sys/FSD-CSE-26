function register(){
    waitfordelay(10000);
    console.log("register here")
}
function login(){
    waitfordelay(5000);
    console.log("login here")
}
function getData(){
    waitfordelay(4000);
    console.log("fetch data from DB")
}
function displayData(){
    waitfordelay(6000);
    console.log("user view data")
}
function waitfordelay(delay){
    const mt = Date.now() +delay;
    while(Date.now()< mt){

    }
}
register();
login();
getData();
displayData();
console.log("call another application")