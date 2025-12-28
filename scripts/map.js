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
const arrfruits = ["apple", "banana", "orange"];

const fruitResults = arrfruits.map(
  (item, index) => `fruit ${index + 1} : ${item}`
);

console.log(fruitResults);


// ****
//  Continue object....
// ****