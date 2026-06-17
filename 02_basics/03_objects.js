// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", //to access symbol we use []
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email) // hitesh@google.com
console.log(JsUser["email"]) // hitesh@google.com // another method to access object members
console.log(JsUser["full name"]) //Hitesh Choudhary
console.log(JsUser[mySym]) // mykey1

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) //this will freeze all the members of that object and we further can't change it.
JsUser.email = "hitesh@microsoft.com"
//after freezing
// console.log(JsUser);
/*
{
  name: 'Hitesh',
  'full name': 'Hitesh Choudhary',
  age: 18,
  location: 'Jaipur',
  email: 'hitesh@chatgpt.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'
}
*/ 




JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
/* 
Hello JS user
undefined
*/
console.log(JsUser.greetingTwo());
/*
Hello JS user, Hitesh
undefined
*/