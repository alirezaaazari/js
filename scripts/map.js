//learning map method

//doubling numbers with map method

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((numbers) => numbers * 2);

console.log(doubled);
alert(doubled);

//capitalize the first letters of words

const names = ["ali", "reza", "sahar", "mobina", "sara"];

const capitalize = names.map((name) => name[0].toUpperCase() + name.slice(1));
console.log(capitalize);

//separating names in an object & adding age in an object

const users = [
  { id: 1, name: "ali", age: 23 },
  { id: 2, name: "reza", age: 30 },
  { id: 3, name: "sara", age: 19 },
];

const userName = users.map((users) => users.name);
const newUsers = users.map((user) => {
  return {
    ...users,
    age: user.age + 1,
  };
});

console.log(userName);
alert(userName);

console.log(users);

console.log(newUsers);

// IF with ternary and with the help of the map method. if the score is greater than 10, it will pass otherwise it will fail.

const scores = [10, 18, 6, 20, 14, 9];
const result = scores.map((score) => {
  return score >= 10 ? "pass" : "failed";
});

console.log(result);

// if & else without ternary



// ****
//  Can write this 
// ****
const score = [10, 18, 6, 20, 14, 9];
const results = score.map((scores) => {
  if (scores >= 10) return "pass";
  else return "failed";
});

// const score = [10, 18, 6, 20, 14, 9];
// const results = score.map((scores) => {
//   if (scores >= 10) {
//     return "pass";
//   } else {
//     return "failed";
//   }
// });
console.log(results);

//map on  object.

const user = {
  name: "ali",
  age: 25,
  city: "tehran",
};

const userResult = Object.entries(user).map(([k, v]) => `${k} : ${v}`);

console.log(userResult);



//map + show index

const fruits = ["apple", "banana", "orange"];

const fruitResult = fruits.map((item, index) => `${index + 1} - ${item}`);

console.log(fruitResult);

//again exercise for map & index


// ****
//  This is true 
// ****
// const arrFruits = []
const arrFruits = ["apple", "banana", "orange"];

const fruitResults = arrFruits.map(
  (item, index) => `fruit ${index + 1} : ${item}`
);

console.log(fruitResults);



//more exercise for warm up and learn.they probably also have repetitive exercises.



//doubling numbers
//solution-1
/*
const numbers2 = [5,10,12,15,37,44];
const doubleBergur = numbers2.map(num=>num*2);
console.log(doubleBergur);
*/

//solution-2

const numbers2 = [5,10,12,15,37,44];
const doubleBergur = numbers2.map((i)=>{
    return i*2
});
console.log(doubleBergur);




//convert temperature to fahrenheit with formula:  F = C * 9/5 + 32

const celsuis = [0,10,20,30];
const fahrenheit = celsuis.map((f)=>{
    return f*9/5+32
})
console.log(fahrenheit);



//convert string to its length

const words = ["js","react","next","typescript","frontend"];

const stringToLenght = words.map((l)=>{
    return l.length
});
console.log(stringToLenght);



//enlarge letters

const name2 = ["asal","ali","hamed","saeid"];
const upercase = name2.map((u)=>{
    return u.toUpperCase
});

console.log(upercase);




// ****
//  Continue object....
// ****


//object methods


