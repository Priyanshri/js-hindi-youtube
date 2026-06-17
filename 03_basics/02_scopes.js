// scope appears in {} when it it declared with if else or any loop statements

// var c = 300
let a = 300

//this is block scope
if (true) {
    let a = 10
    const b = 20
    // c =30
    console.log("INNER: ", a); // INNER: 10
    
}

//this is global scope
console.log(a); // 300 
// console.log(c); // 30 // because var can be accessed outside the scope still we declared c=300 before it will be changed to 30 inside if block




function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // error : can't access to website as it is in two()
     two() // prints username i.e. hitesh
}
one()





if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website); // hitesh youtube
    }
    // console.log(website); // error
}
// console.log(username); // error





// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // 6 (Here we are calling the function)
function addone(num){
    return num + 1
}



// addTwo(5) // error as we are accessing variable stored function
const addTwo = function(num){
    return num + 2
}