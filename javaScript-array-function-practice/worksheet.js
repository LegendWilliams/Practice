const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
const characterNames = characters.map((character) => character.name);
console.log("Character Name Return " + characterNames)

//2. Get array of all heights
const characterHeights = characters.map((character) => character.height)
console.log("Character Height Return" + characterHeights)

//3. Get array of objects with just name and height properties
// look-up how to reformate an data set using the map method

const characterHeightAndName = characters.map(({name,height}) => 
({[name]: height}))

console.log((characterHeightAndName))

//4. Get array of all first names
const firstNames = characters.map((character) => character.name.split(" ")[0]);
console.log("first Names Results " + firstNames)


//***REDUCE***
//1. Get total mass of all characters

let totalMass = characters.reduce((total,character) => {
    return total + character.mass
}, 0)
console.log("total mass: ", totalMass)
//2. Get total height of all characters

let totalHeight = characters.reduce ((total, character) => {
 return total + character.height
}, 0)

console.log("total charater height: ",totalHeight)
//3. Get total number of characters by eye color


//4. Get total number of characters in all the character names
let allLetters = characters.reduce((total,character) => {
   return  total + character.name.length
}, 0)

console.log("Total number of charaters: ", allLetters)
//***FILTER***
//1. Get characters with mass greater than 100
let overHundred = characters.filter((character) => character.mass <= 100)

// Syntax example let result = parks.filter((park) => park.rating >= 4.5)

console.log("overHundred Results: ")
console.log(overHundred)

//2. Get characters with height less than 200

let LessTwoHundred = characters.filter((character) => character.mass < 200)
console.log("LessTwoHundred Results")
console.log(LessTwoHundred)

//3. Get all male characters

let allMale = characters.filter((character) => character.gender === "male")

console.log(allMale)

//4. Get all female characters
let allFemale = characters.filter((character) => character.gender === "female")
console.log("allFemale Results: ")
console.log(allFemale)

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?

let allBlueEyes = characters.every((character) => character.eye_color === "blue" )
console.log(allBlueEyes)

//2. Does every character have mass more than 40?
let overFourty = characters.every((character) => character.mass > 40)
console.log(overFourty)

//3. Is every character shorter than 200?
let shorter200 = characters.every((character) => character.height < 200)
console.log(shorter200)

//4. Is every character male?
let everyMale = characters.every((character) => character.gender === "male")
console.log(everyMale)

//***SOME***
//1. Is there at least one male character?

let oneMan = characters.some((character) => character.gender === "male")
console.log(oneMan)
//2. Is there at least one character with blue eyes?
let oneBlueEye = characters.some((character) => character.eye_color === "blue")
console.log(oneBlueEye)
//3. Is there at least one character taller than 210?
let twoHundredTall = characters.some((character) => character.height > 210)
console.log(twoHundredTall)
//4. Is there at least one character that has mass less than 50?
let massLessFifty = characters.some((character) => character.mass < 50)
console.log(massLessFifty)
