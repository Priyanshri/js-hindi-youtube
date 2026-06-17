// const tinderUser = new Object() // singleton object
const tinderUser = {} //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname); // { userfullname: { firstname: 'hitesh', lastname: 'choudhary' } }
console.log(regularUser.fullname.userfullname.firstname); // hitesh
console.log(regularUser.fullname?.userfullname.firstname); // hitesh  // optional chaining :checks whether the fullname exists or not


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj3 = {...obj1, ...obj2}
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }




const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true   //checks if there is any property or not in the object



//********Destructuring*******


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course //Destructuring the value courseInstructor by using {}
console.log(instructor);  // hitesh



// JSON format types when api fetches

/*
1.
{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}
*/
/*
2.
[
    {},
    {},
    {}
]
    */


// we can see randomuser api that is free and break down that and see the json structure in json formatter website.