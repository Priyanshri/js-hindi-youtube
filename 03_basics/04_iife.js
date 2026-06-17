// Immediately Invoked Function Expressions (IIFE): function that executes immediately and to reduce global scope pollution for variable declaration problem


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // DB CONNECTED

//syntax: ()();   : 1st () is definition , 2nd () is function execution

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');  // DB CONNECTED TWO hitesh

