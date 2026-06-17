//we can use this in objects only

const user = {
    username: "hitesh",
    price: 999,
    // this refers currecnt context
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage() 
/* 
hitesh , welcome to website
{
  username: 'hitesh',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
*/
user.username = "sam"
user.welcomeMessage()
/*
sam , welcome to website
{
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
  */

console.log(this); // {} as global scope have no context





//this can;t be used in functions
// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //undefined
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }




//Arrow function
const chai =  () => {
    let username = "hitesh"
    console.log(this); // {}
}
chai()



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }        // if we use {} we have to write return statement . and is return is used that is called explicit return

// console.log(addTwo(3, 4)) // 7

// const addTwo = (num1, num2) =>  num1 + num2      //implicit return

// console.log(addTwo(3, 4)) // 7

// const addTwo = (num1, num2) => ( num1 + num2 )       //by using () we don't have to write return

// console.log(addTwo(3, 4)) // 7

const addTwo = (num1, num2) => ({username: "hitesh"}) // we can't return object directly we have to wrap it in ()

console.log(addTwo(3, 4)) // { username: 'hitesh' }



// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach()