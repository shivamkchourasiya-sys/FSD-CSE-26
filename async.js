function register(cb) {
    setTimeout(() => {
        console.log("register here");
        cb();
    }, 10000);
    
}

function login(cb) {
    setTimeout(() => {
        console.log("login here");
        cb();
    }, 5000);
}

function getData(cb) {
    setTimeout(() => {
        console.log("fetch data from DB");
        cb();
    }, 4000);
}

function displayData() {
    setTimeout(() => {
        console.log("user view data");
    }, 6000);
}
register(()=>{
    login(()=>{
        getData(()=>{
            displayData();
        });
    });
});



console.log("call another application");