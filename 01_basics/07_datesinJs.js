// Dates

let myDate = new Date()
console.log(myDate); //2026-06-16T18:05:10.531Z
console.log(myDate.toString()); // Tue Jun 16 2026 18:05:10 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Tue Jun 16 2026
console.log(myDate.toLocaleString()); // 6/16/2026, 6:05:10 PM
console.log(typeof myDate);//object



// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString()); // 1/14/2023, 12:00:00 AM




let myTimeStamp = Date.now()

console.log(myTimeStamp); //1781633110554
console.log(myCreatedDate.getTime()); //1673654400000
console.log(Math.floor(Date.now()/1000)); //1781633110



let newDate = new Date()
console.log(newDate); //2026-06-16T18:05:10.554Z
console.log(newDate.getMonth() + 1); //6
console.log(newDate.getDay()); //2

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    
})) //Tuesday

