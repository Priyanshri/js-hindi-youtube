const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]); // flash



const allHeros = marvel_heros.concat(dc_heros) //(in concat can't merge more than 2 arrays)
console.log(allHeros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const all_new_heros = [...marvel_heros, ...dc_heros] // spread arrays(can merge more than 2 arrays)

console.log(all_new_heros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]



const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); 
/* [
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
  */



console.log(Array.isArray("Hitesh")) // false
console.log(Array.from("Hitesh")) // [ 'H', 'i', 't', 'e', 's', 'h' ]
//Array.from : Creates an array from an iterable object.
console.log(Array.from({name: "hitesh"})) //op : []  // need to specify which should be converted thekey or value



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ] 
//Array.of : returns a new array from set of elements