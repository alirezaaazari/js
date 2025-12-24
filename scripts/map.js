//learning map method


//doubling numbers with map method

const numbers = [1,2,3,4,5];
const doubled = numbers.map(numbers => numbers*2);

console.log(doubled);
alert(doubled);



//capitalize the first letters of words

const names = ["ali","reza","sahar","mobina","sara"];

const capitalize = names.map(
    name => name[0].toUpperCase() + name.slice(1)
);
console.log(capitalize);



//separating names in an object & adding age in an object

const users =  [
    {id: 1 , name: "ali" , age: 23},
    {id: 2 , name: "reza" , age: 30},
    {id: 3 , name: "sara" , age: 19}
];

const userName = users.map(users => users.name);
const newUsers = users.map(user =>{
    return{
        ...users,
        age:user.age + 1
    }
});

console.log(userName);
alert(userName);

console.log(users);

console.log(newUsers);
