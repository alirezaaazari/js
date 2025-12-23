
console.log("hello world")
console.log(typeof "dave");
console.log(typeof 42);


const myVariables = "mathematics"
console.log(myVariables.length);


console.log(myVariables.indexOf("ma"));

const myNumber = 42;

const myFloat = 42.0;

const myString = "42";

console.log(Number(true) );

console.log(Math.floor(Math.random()*100)+1);
console.log(Math.floor(Math.random()*100)+1);
console.log(Math.floor(Math.random()*100)+1);
console.log(Math.floor(Math.random()*100)+1);
console.log(Math.floor(Math.random()*100)+1);


let anyName = "alireza"

console.log(anyName.charAt(Math.floor(Math.random()*anyName.length)));
console.log(anyName.charAt(Math.floor(Math.random()*anyName.length)));
console.log(anyName.charAt(Math.floor(Math.random()*anyName.length)));
console.log(anyName.charAt(Math.floor(Math.random()*anyName.length)));
console.log(anyName.charAt(Math.floor(Math.random()*anyName.length)));
console.log(anyName.charAt(Math.floor(Math.random()*anyName.length)));


let testScore = 59;
let collegestudent = true;
let grade;

if (testScore >= 90){
    grade = "A";
}else if(testScore >= 80){
    grade = "B"
}
else if(testScore >= 70){
    grade = "C"
}else if(testScore >= 60){
    grade = "D"
}else{
    if(collegestudent){
        grade = "U";
    }
}
console.log(grade);





let soup = "chicken noudle soup";
let isCustomerBanned = true;
let soupAcces = isCustomerBanned?"sory,no soup for you.":soup ?`yes we have ${soup}today.`: "sorry , no soup today";
console.log(soupAcces);



//تمرین ها

//1

let age = prompt("سن خود را وارد کنید:");
age = Number(age);

if (age < 18) {
    console.log("اجازه ورود نداری");
}else if(age >= 18 && age < 60){
    console.log("ورود مجاز");
}else if(age >= 60){
    console.log("تست فشار خون بده");
}else{
    console.log("عدد معتبر وارد کنید");
    
}


//2

let score = prompt("نمره خود را از صد وارد کنید");
score = Number(score);

if (score >= 90 && score <= 100) {
    console.log("A");
}else if(score < 90 && score >= 70){
    console.log("B");
}else if(score < 70 && score >= 50){
    console.log("C");
}else if(score < 50){
    console.log("F");
}else{
    console.log("معتبر نیست");
    
}


//3

let numbers = prompt("عدد را وارد کنید");
numbers = Number(numbers);

if (numbers % 2 == 0) {
    console.log("زوج است");
    
} else {
    console.log("فرد است");
    
}


//4

let hour = prompt("ساعت مد نظر خود را وارد کنید");
hour = Number(hour);
if (hour >= 0 && hour <= 11) {
    console.log("صبح بخیر");
}else if(hour<= 16){
    console.log("ظهر بخیر");
}else if(hour <= 20){
    console.log("عصر بخیر");
}else if(hour <= 23){
    console.log("شب بخیر");
}else{
    console.log("معتبر نیست");
    
}




//5

let ageForTicket = prompt("pls enter your age");
ageForTicket = Number(ageForTicket)
if (ageForTicket < 5) {
    console.log("free");
}else if(ageForTicket >=5 && ageForTicket <= 17){
    console.log("half price");
}else if(ageForTicket >= 18){
    console.log("full price");
}else{
    console.log("invalid");    
}


//6

let height = prompt("قد خود را وارد کنید")
height = Number(height)
if (height < 160) {
    console.log("short");
}else if(height >= 160 && height < 180){
    console.log("normal");
}else if(height >= 180){
    console.log("tall");
}



//7

let amount = prompt("مبلغ خرید را وارد کنید");
if (amount <100) {
    console.log("تخفیف ندارد");
    
}else if(amount >= 100 && amount <300){
    console.log("10%");
    
}else if(amount >=300 && amount < 700){
    console.log("20%");
    
}else if(amount >= 700){
    console.log("30%");
    
}else{
    console.log("invalid");
    
}



//8

let weekDay = prompt("یک روز دز هفته را به عدد وارد کنید"); 
weekDay = Number(weekDay);

switch (weekDay) {
    case 1:
        console.log("شنبه");
        break;
    case 2:
    console.log("یکشنبه");
        break;
     case 3:
        console.log("دوشنبه");
        break;
     case 4:
        console.log("سه شنبه");
        break;
     case 5:
        console.log("چهارشنبه");
        break;
     case 6:
        console.log("پنجشنبه");
        break;
     case 7:
        console.log("جمعه");
        break;
        default:
        console.log("عدد نامعتبر! لطفا یک تا هفت را وارد کنید");
        
        break;
    
}



//9

let inPut = prompt("لطفا نوشیدنی مورد نظر را وارد کنید: latte,coffee,tea,milkshake")

switch (inPut.toLowerCase()) {
    case  "latte":
        console.log("70,000");
        break;
    case "coffee":
        console.log("60,000");
        break;
    case "tea":
        console.log("50,000");
        break;
    case "milkshake":
        console.log("100,000");
        break; 
    default:
        console.log("نامعتبر");
        
        break;
}



//10

let color = prompt("رنگ چراغ راهنمایی  را وارد کنید: yellow ,green , red");

switch (color.toLowerCase()) {
    case "green":
        console.log("حرکت کنید");
        break;
     case "yellow":
        console.log("احتیاط کنید");
        break;
     case "red":
        console.log("توقف کنید");
        break;
    default:
        console.log("نامعتبر");
        break;
}



//11

let months = prompt("یک عدد از 1 تا 12 وارد کنید");
months = Number(months);

switch (months) {
    case 1:
        console.log("فروردین");
        break;
     case 2:
        console.log("اردیبهشت");
        break;
     case 3:
        console.log("خرداد");
        break;
     case 4:
        console.log("تیر");
        break;
     case 5:
        console.log("مرداد");
        break;
     case 6:
        console.log("شهریور");
        break;
     case 7:
        console.log("مهر");
        break;
     case 8:
        console.log("آبان");
        break;
     case 9:
        console.log("آذر");
        break;
     case 10:
        console.log("دی");
        break;
     case 11:
        console.log("بهمن");
        break;
     case 12:
        console.log("اسفند");
        break;
    default:
        console.log("invalid");
        
}




//12

const inputt = prompt("یک عدد اعشاری را وارد کنید");
numInput = Number(inputt);

if(isNaN(numInput)){
    console.log('عدد وراد شده نامعتبر است');
}else{
    console.log("عدد وارد شده :", numInput);
    console.log("math.floor",Math.floor(numInput));
    console.log("math.ceil",Math.ceil(numInput));
    console.log("math.round",Math.round(numInput));
    
}


//13

const absoluteValue = prompt("یک عدد منفی وارد کنید");
value = Number(absoluteValue);

console.log("عدد:", value);
console.log("قدر مطلق:", Math.abs(value));



//14

let x1 = Number(prompt("x1?"));
let y1 = Number(prompt("y1?"));

let x2 = Number(prompt("x2?"));
let y2 = Number(prompt("y2?"));

let d = Math.hypot(x2 - x1 , y2 - y1);
console.log('فاصله = ', d);



//15

let myStringg = "helloworld";
let reversed = myStringg.split("").reverse().join("");
console.log(reversed);



//16

const strInput = "abbas"
const targets = "a";

const count = [...strInput].filter(c => c=== targets).length;
console.log(count);


//17

const str = "      aliaz  "
console.log(str);
const cleaning = str.trim();
console.log(cleaning);



//18

const arr = [10,20,30,40,50,60,70,80,90,100];
const input =prompt("10,20,30,40,50,60,70,80,90,100:از بین این اعداد عدد مد نظر خودتان را انتخاب کنید");

const target = Number(input);
const index = arr.indexOf(target)


if (index !== -1){
    console.log("ایندکس:", index);
} else {
  console.log("عدد پیدا نشد!");
}


//19

const array = [10,20,30,40,50,60,70,80,90,100];
const targett = 60;
const indexx = array.indexOf(targett);
console.log(indexx);



//20

const arrNum = [12,15,65,24,67,34,21,57,85,98,201,47,24,2,59];
const filter = arrNum.filter(a=> a>=50);
console.log(filter);

//--------------------------------------------------------------------------------------------------------------



let myBoolean = confirm("ok===true\ncancel===false");
console.log(myBoolean);




let name = prompt("pls your name");
if(name){
    console.log(name.length);
    console.log(name.trim().length);
    console.log(name.trim());
}else{
    console.log("you didnt enter your name");
}



