// start with strings, numbers and booleans
let age = 23
let age2 = age
console.log(age, age2);
age = 24
console.log(age, age2);

let name = "Wes"
let name2 = name
console.log(name, name2);
name = "Wesley"
console.log(name, name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players
console.log(players);
console.log(team);

// You might think we can just do something like this:
// players[2] = "Sardor"
// team[2] = "Sardor"

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice()
team2[3] = "Sardor"
console.log(team2);

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players)
team3[3] = "No name"
console.log(team3);

// or use the new ES6 Spread
const team4 = [...players]
team4[3] = "Test"
console.log(team4);

const team5 = Array.from(players)

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:
// const captain = person
// captain.number = 99

console.log(person);
// console.log(captain);

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99, age: 12 })
console.log(cap2);

// We will hopefully soon see the object ...spread
const cap3 = { ...person }
cap3.name = "Sardor"
console.log(cap3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer'
  }
};

console.log(wes);

const dev = Object.assign({}, wes)
console.log(dev);

const dev2 = JSON.parse(JSON.stringify(wes))