//learning filter method



// filtering even numbers

const numbers = [1,2,3,4,5,6];
const result = numbers.filter((num)=>{
    return num % 2 === 0
});

console.log(result);



//filtering names with its lenght

const names = ["ali","reza","sara","nima","hamed"];
const longName = names.filter(name => name.length > 3);
console.log(longName);




//filtering adult user(+18)

const users = [
    {name:"saman", age:17},
    {name:"abbas", age:54},
    {name:"yalda", age:26},
    {name:"sahel", age:14}
];

const adults = users.filter(user => user.age >= 18);

console.log(adults);





//holding numbers larger than 10

const numbers1 = [10,5,8,20,3,15];
const results = numbers1.filter(filtering => filtering > 10);

console.log(results);





//isolation of active users

const users1 = [
    {id:1, name:'ali', isActive:false},
    {id:2, name:'reza', isActive:true},
    {id:3, name:'sasan', isActive:false},
    {id:1, name:'dany', isActive:true}
];

const isolate = users1.filter((isole)=>{
    return isole.isActive===true
});

console.log(isolate);





//filtering price >= 30

const products = [
  { name: "Laptop", price: 50 },
  { name: "Phone", price: 20 },
  { name: "Tablet", price: 30 }
];

const price = products.filter(p=>p.price >= 30);
console.log(price);



//filtering words that contain the letter a

const words = ["apple", "banana", "kiwi", "watermelon"];

const wordWithA = words.filter((a)=>{
    return !a.includes("a");
});

console.log(wordWithA);
