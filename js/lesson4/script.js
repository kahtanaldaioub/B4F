// for(let i=1;i<=20;i++){
//     console.log("number:" , i)
// }
// for(let i=10;i>=1;i--){
//     console.log("numbers" , i)
// }

// let sum=0;
// for(let i=10;i>=1;i--){
//     sum+=i;
// }
//     console.log("sum" , sum  )

// for (let i=0;i<10;i++){

// }

// console.log(100*101/2)

// let fruits =["apples","banana", "grape"]
// for(let i=0;i< fruits.length;i++)console.log(fruits[i])

// for( let [index,fruit] of fruits.entries()){
//     console.log(`fruit ${index}: ${fruit} `)
// }

// let user={
//     name:"john",
//     age:30,
//     city:"latakia"
// }
// for (let key in user){
//     console.log(user[key])
// }

// let book = {
//     title:"JS",pages:100,author:"kahtan"
// }

// for (let key in book){
//     console.log(book[key])
// } 
// let a=0;
// while(a<5){
//     a++
//     console.log(a)
// }


// console.log(Math.floor(Math.random()*3))
// console.log(Math.floor(Math.random()*3))
// console.log(Math.floor(Math.random()*3))
// console.log(Math.floor(Math.random()*3))
// console.log(Math.floor(Math.random()*3))
// console.log(Math.floor(Math.random()*3))
// console.log(Math.floor(Math.random()*3))
// console.log(Math.floor(Math.random()*3))
// console.log(Math.floor(Math.random()*3))
// console.log(Math.floor(Math.random()*3))
// x=1
// do {
//     console.log("hi")
// }
// while(!x)


    
//     for(let i=1 ; i<=20; i++){
//         if (i % 2 ==0 ){
            
//             continue
//         }
//         console.log(i)
//     }
// let matrix =[[1,2,3],[4,5,6],[7,8,9]]
// let sum1=0;
// for(let i=0;i<matrix.length;i++){
//     for(let j=0;j<matrix.length;j++){
//         sum1+=matrix[i][j]
//     }
// }
// console.log(sum1)


// function logMessage(message) {
//   console.log(message);
// }

// let output = logMessage("Hello");
// console.log(output);

// function createFullName(firstName, lastName, middleName) {
//   if (middleName) {
//     return `${firstName} ${middleName} ${lastName}`;
//   }
//   return `${firstName} ${lastName}`;
// }

// console.log(createFullName("John", "Doe"));
// console.log(createFullName("John", "Doe", "William"));

// function getNumberStatus(num) {
//   if (num > 0) return "positive";
//   if (num < 0) return "negative";
//   return "zero";
// }

// console.log(getNumberStatus(5));
// console.log(getNumberStatus(-5));
// console.log(getNumberStatus(0));
// function getValue(type) {
//   switch (type) {
//     case "number": return 42;
//     case "string": return "Hello";
//     case "boolean": return true;
//     case "array": return [1, 2, 3];
//     case "object": return { key: "value" };
//     default: return null;
//   }
// }

// console.log(typeof getValue("number"));
// console.log(Array.isArray(getValue("array")));
// console.log(getValue("banana"));

// function greet(name = "Guest") {
//   console.log(`Hello, ${name}!`);
// }

// greet("John");
// greet();


// function createUser(name = "Anonymous", age = 0, country = "Unknown") {
//   return { name, age, country };
// }

// console.log(createUser("John", 30, "USA"));
// console.log(createUser("John", 30));
// console.log(createUser("John"));
// console.log(createUser());


// function setVolume(value = 50) {
//   console.log(value);
// }

// setVolume();
// setVolume(undefined);
// setVolume(null);
// setVolume(0);
// setVolume("");


// function sumAll(...numbers) {
//   let sum = 0;
//   for (let num of numbers) {
//     sum += num;
//   }
//   return sum;
// }

// console.log(sumAll(1, 2, 3));
// console.log(sumAll(1, 2, 3, 4, 5));
// console.log(sumAll());


// function greetAll(greeting, ...names) {
//   names.forEach(name => {
//     console.log(`${greeting}, ${name}!`);
//   });
// }

// greetAll("Hello", "John", "Jane", "Bob");

// Old way
// function oldSum() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// // New way
// function newSum(...numbers) {
//   return numbers.reduce((sum, num) => sum + num, 0);
// }

// console.log(oldSum(1, 2, 3, 4, 5));
// console.log(newSum(1, 2, 3, 4, 5));


// function calculateDiscount(price, discount = 10) {
//   if (price < 0) {
//     return "Invalid";
//   }
//   let final = price - (price * discount / 100);
//   console.log(final);
//   return final
// }

// let result = calculateDiscount(100);
// console.log("Result:", result);

//  IIFE
// (function() {
//   console.log("This function runs immediately!");
// })();

// (function(name) {
//   console.log(`Hello, ${name}!`);
// })("John");

// const result = (function(a, b) {
//   return a + b;
// })(5, 3);
// console.log(result);


// const calculator = {
//   add: function(a, b) { return a + b; },
//   subtract: function(a, b) { return a - b; },
//   multiply: function(a, b) { return a * b; },
//   divide: function(a, b) {
//     if (b === 0) return "Cannot divide by zero";
//     return a / b;
//   }
// };

// console.log(calculator.add(5, 3));
// console.log(calculator.divide(10, 0));


// function createCounter() {
//   let count = 0;

//   return {
//     increment: function() { return ++count; },
//     decrement: function() { return --count; },
//     getCount: function() { return count; }
//   };
// }

// const counter1 = createCounter();
// const counter2 = createCounter();

// console.log(counter1.increment()); 
// console.log(counter1.increment()); 
// console.log(counter1.decrement()); 


// console.log(counter2.increment());
// console.log(counter2.increment());

// console.log(counter1.getCount());  
// console.log(counter2.getCount());  

// const addArrow = (a, b) => {
//   return a + b;
// };

// const addConcise = (a, b) => a + b;

// console.log(addConcise(1,5))

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function(num) {
  return num * 2;
});

const doubledArrow = numbers.map(num => num * 2);

console.log(doubled);