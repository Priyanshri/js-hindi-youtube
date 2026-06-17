
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName // function reference
sayMyName() // function execution
/*
H
I
T
E
S
H
 */



// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers() // NaN
// addTwoNumbers(3,4) // 7
// addTwoNumbers(3,"4") // 34
// addTwoNumbers(3,"a") // 3a
// addTwoNumbers(3, null) //3


function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
console.log("Result: ", result); // Result:  8


function loginUserMessage(username = "sam"){ // given a default value "sam"
    if(!username){  // or : username === undefined (here undefined is false)
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("hitesh")) // hitesh just logged in
console.log(loginUserMessage()) // sam just logged in





function calculateCartPrice(val1, val2, ...num1){ // here ... is called rest operator that allows multiple parameter pass in a function
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000)) //  [ 500, 2000 ]




const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user) // Username is hitesh and price is undefined (because in user there is attribute prices but in concole we are accessing price. so price becomes undefined)
handleObject({
    username: "sam",
    price: 399
}) // Username is sam and price is 399




const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)); // 400
console.log(returnSecondValue([200, 400, 500, 1000])); // 400