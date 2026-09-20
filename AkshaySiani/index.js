
// ---------------------- Hoisting + Lexical Environment -----------------------
// function a() {
//   var b = 10
//   c();
//   function c() {
//     console.log("B: ", b);
//   }
// }
// a();

// {
//   var c = 20;
// }

// console.log("C: ", c);

// ---------------------- Temporal Deadzone -----------------------
// const a = 10;
// console.log("A: ", a);
// console.log("B: ", b);
// var b = 20;
// console.log("B: ", b);
// var b = "abc";
// console.log("B: ", b);

// ---------------------- Block Scope + Shadowing ( 3 scopes - global, block, function ) -----------------------
// variables declare with let/const in global scope appear in Script Section. Variables decalre in function appears in LOCAL scope
// let a = 10;
// var c = 30;
// {
//   let a = 100; 
//   const b = 120;
//   var c = 150; // Shadowing outer c variable because the variables declare with var are function/global scoped, not block scoped
//   console.log("A: ", a);
//   console.log("B: ", b);
//   console.log("C: ", c);
// }
// {
//   let d = 1000;
// }
// const e = 70;
// console.log("C: ", c);

// var name = "ali"
// function greet() {
//   var name = "zaid"
//   console.log("Name: ", name)
// }
// greet();
// console.log("Name: ", name)

// ---------------------- Clousures -----------------------

// function x() {
//   let age = 12;
//   function y() {
//     console.log("Age: ", age);
//   }
//   return y;
// }
// const agePrint = x();
// agePrint();

// ---------------------- setTimeout ( Clousures ) -----------------------
// console.log("Start");
// function x() {
//   const age = 12;
//   // for (let i = 1; i <= 5; i++) {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log("Age", age);
//       console.log("I: ", i);
//     }, 2000);
//   }
// };
// x();
// console.log("End");

// function y() {
//   for (var i = 1; i <= 5; i++) {
//     function close(x) {
//       setTimeout(function () {
//         console.log("X: ", x);
//       }, 1000);
//     }
//     close(i);
//   }
// };
// y();

// let msgEvent = setTimeout(() => {
//   document.write("Hi, I am written by a set timeout event.")
// }, 2000);
// console.log("msgEvent: ", msgEvent);
// clearTimeout(msgEvent);

// ---------------------- Currying ( Application of Clousures ) -----------------------

// // ====> Currying means: Converting a function that takes multiple arguments into a sequence of functions that each take one argument.

// function z(a) {
//   return function y(b) {
//     return function x(c) {
//       return a + b + c;
//     };
//   };
// };

// const z = (a) => (b) => (c) => a + b + c;

// const step1 = z(10);        // Here step1 remembers a = 10
// console.log("🚀 ~ step1:", step1)  
// const step2 = step1(20);    // Here step2 remembers a = 10, b = 20
// console.log("🚀 ~ step2:", step2)
// const step3 = step2(30);    // Here step2 remembers a = 10, b = 20, c = 30
// console.log("Result: ", step3);

// ---------------------- Call, Apply, Bind Method ( Function Borrowing) -----------------------
// let user = {
//   fname: "Ali",
//   lname: "Raza",
//   // printName: function () {
//   //   console.log("this: ", this)
//   //   console.log(`Full Name is ${this.fname} ${this.lname}`);
//   // }
// };

// const user1 = {
//   fname: "Asad",
//   lname: "Ali"
// }

// // user.printName.call(user1);  // Passing the reference of user1 object to printName function of user object

// // =======> We can define the function separtely as well and take the arguments. First argument will be the reference of the object and then we can pass the other arguments as well.

// const printFullNameFn = function (city, province) {
//   console.log(`I am ${this.fname} ${this.lname}. I live in ${city}, ${province}.`);
// }

// printFullNameFn.call(user, "Karachi", "Sindh");
// printFullNameFn.call(user1, "Lahore", "Punjab");
// printFullNameFn.apply(user, ["Karachi", "Sindh"]);
// printFullNameFn.apply(user1, ["Lahore", "Punjab"]);

// // =======> Bind method returns a new function with the reference of the object passed as first argument permanently ( or with a permanently fixed this value ). We can call that function later on.

// const printFullNameBind = printFullNameFn.bind(user, "Karachi", "Sindh");
// console.log("🚀 ~ printFullNameBind:", printFullNameBind);
// printFullNameBind();

// const multiply = (a, b) => {
//   console.log("this: ", this);
//   console.log("a: ", a);
//   console.log("b: ", b);
//   return a * b;
// };
// const multiplyByFive = multiply.bind(null, 5); // Here this = null, a = 5 and b will be the passed argument
// console.log("🚀 ~ multiplyByFive result:", multiplyByFive(10));
// const multiplyByTen = multiply.bind(this, 10); // Here this = this, a = 10 and b will be the passed argument
// const multiplyByTenAllArg = multiply.bind(this, 10, 100); // Here this = this, a = 10 and b = 100
// console.log("🚀 ~ multiplyByTen result:", multiplyByTen(7));
// console.log("🚀 ~ multiplyByTenAllArg result:", multiplyByTenAllArg(7));

// ---------------------- First Class Function -----------------------
// ===> First Class Function means treating functions as first class citizens. In JavaScript, functions are treated as first class citizens. It means that functions can be assigned to variables, passed as arguments to other functions, and returned from other functions.

// ===> Function Statement aka Function Declaration
// function greet() {
//   console.log("Hello World")
// }
// greet();
// console.log("hi")
// ===> Function Expression
// let greet1 = function () {
//   console.log("Hello World 1")
// }
// greet1();

// ===> Anonymous Function
// function () {
//   console.log("Hello World")
// }

// ===> Named Function Expression ( Useful when needed to be called inside itself => Recursion )
// let greet1 = function greet() {
//   console.log("Named Function Expression")
//   console.log("Greet: ", greet)
// }
// greet();// Can't do it.greet is name of the function expression itself, not a variable declared in the surrounding scope.
// greet1();
// let countDown = function count(n) {
//   if (n === 0) return;
//   console.log("Before:", n);
//   count(n - 1);
//   console.log("After:", n);
// };
// countDown(5);

// ===> Difference btw Parameter & Argument ( Parameters are placeholders and arguments are the actual values passed )
// const addFunc = function (a, b) { // a, b parameters
//   console.log("Sum: ", a + b);
// };
// addFunc(2, 3);  // 2,3 arguments

// ===> First Class Function
// const x = function (y) {
//   console.log("Starting Passed Function Invoking.");
//   y();
//   return function () {
//     console.log("Execution completed.")
//   }
// }
// const greet = function () {
//   console.log("Hello");
// }
// x(greet)(); // Here x(greet) will return a function and then we are invoking that returned function with ().

// ===> Factory Function ( a normal function that creates and returns an object )
// function createCircle(radius) {
//   return {
//     radius: radius,
//     draw: function () {
//       console.log("Draw")
//     },
//     area: function () {
//       console.log(`Area of circle with radius=${this.radius} is: ${Math.PI * this.radius * this.radius}`)
//     }
//   }
// }
// const circle1 = createCircle(1);
// console.log("🚀 ~ circle1:", circle1)
// circle1.area()
// const circle2 = createCircle(2);
// console.log("🚀 ~ circle2:", circle2)
// circle2.area()

// ===> Constructor Function
// Uses `this` to define properties/methods on the object.
// When called with `new`, JavaScript automatically:
// 1. Creates a new empty object
// 2. Sets `this` to that new object
// 3. Links the object to Circle.prototype
// 4. Executes the constructor function
// 5. Returns the new object
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("Draw")
//   };
//   this.area = function () {
//     console.log(`Area of circle with radius=${this.radius} is: ${Math.PI * this.radius * this.radius}`)
//   };
// };
// const circle1 = new Circle(1);
// console.log("🚀 ~ circle1:", circle1)
// circle1.area()
// const circle2 = new Circle(2);
// console.log("🚀 ~ circle2:", circle2)
// circle2.area()


// ---------------------- Callback Functions, Event Listeners -----------------------

// ===> Callback Functio in JS
// function x(callback) {
//   console.log("Starting x Function.")
//   callback();
// }
// function y() {
//   console.log("Starting y Function.")
// }
// x(y);

// ===> JS is synchronous and single threaded. It means that it can execute one task at a time. But we can use callback functions to execute multiple tasks asynchronously. Callback functions are passed as arguments to other functions and are executed after the completion of the parent function.
// setTimeout(function () {
//   console.log("I am setTimeout function.");
// }, 5000);
// function x(callback) {
//   console.log("Starting x Function.")
//   callback();
// }
// function y() {
//   console.log("Starting y Function.")
// }
// x(y);

// ===> Blocking the MAIN thread means blocking the CALL STACK. e.g. In above example, if x func has a long running task, then y func will be executed after the completion of x func. But if we use setTimeout, then y func will be executed after the completion of x func and setTimeout func will be executed after the specified time.
// setTimeout(function () {
//   console.log("I am outer setTimeout function.");
// }, 5000);
// function x(callback) {
//   console.log("Starting x Function.")
//   setTimeout(function () {
//     console.log("Functin X setTimeout");
//   }, 5000);
//   callback();
// }
// function y() {
//   console.log("Starting y Function.")
// }
// x(y);

// ===> Deep about Event Listeners in JS ( To make secure the "counter", we are making Closure)
// function attchCounterWithEventListener() {
//   var counter = 0;  // It will not removed by Garbage Collector becuase addEventListener holds its reference.
//   var tempVar = 0; // It will removed by Garbage Collector
//   document.getElementById("clickMe").addEventListener("click", function () {
//     console.log("ClickMe clicked.", ++counter); // Stop here execution and access both variables in console and see
//   })
// }
// attchCounterWithEventListener();

// ===> Garbage Collector and Remove EventListeners ( Its important to remove eventListeners to freed the memory ) ( see in above example)
// function attchCounterWithEventListener() {
//   let counter = 0;  // It will not removed by Garbage Collector becuase addEventListener holds its reference.
//   let tempVar = 0; // It will removed by Garbage Collector
//   const button = document.getElementById("clickMe");
//   const countHandler = function () {
//     console.log("ClickMe clicked.", ++counter);
//   }
//   button.addEventListener("click", countHandler)
//   button.removeEventListener("click", countHandler);
//   console.log("Finished Listener Work");
// }
// attchCounterWithEventListener();


// ---------------------- Asynchronous JavaScript & EVENT LOOP from scratch -----------------------

// ===> CALL STACK
// The Call Stack is where JavaScript code is executed.
// Synchronous JavaScript runs here.
// The Global Execution Context is initially pushed onto the Call Stack.


// ===> WEB APIs
// Browser-provided APIs that JavaScript can use.
// Examples:
//   - setTimeout
//   - fetch
//   - DOM APIs
//   - event listeners
//
// These APIs are provided by the browser, not by the JavaScript engine itself.
//
// When we call an asynchronous Web API, the browser handles the
// asynchronous operation outside the JavaScript Call Stack.
//
// Example:
// setTimeout(() => {
//   console.log("Timer finished");
// }, 2000);
//
// The timer is handled by the browser.
// After the timer finishes, its callback becomes eligible to be
// placed into the appropriate task/callback queue.


// ===> CALLBACK / TASK QUEUE
// Also commonly called the Task Queue.
//
// Callbacks from APIs such as:
//   - setTimeout
//   - setInterval
//   - DOM events
//
// are placed into the Task Queue when they are ready to execute.
//
// The Event Loop eventually moves them to the Call Stack
// when the Call Stack is empty.


// ===> MICROTASK QUEUE
// Microtasks have higher priority than normal tasks.
//
// Examples:
//   - Promise.then()
//   - Promise.catch()
//   - Promise.finally()
//   - queueMicrotask()
//   - Mutation Observer
//
// Important:
// fetch() itself is NOT a microtask.
//
// fetch() returns a Promise.
// When that Promise is settled, its .then() / .catch() / .finally()
// callbacks are scheduled as microtasks.
//
// async/await also uses Promises.
// The code after an await resumes through the Promise/microtask mechanism.


// ===> EVENT LOOP
// The Event Loop continuously checks whether JavaScript can execute
// another piece of work.
//
// Simplified model:
//
// 1. Execute synchronous code from the Call Stack.
// 2. When the Call Stack becomes empty, process Microtasks.
// 3. Then the Event Loop can take a Task/Callback from the Task Queue
//    and put it onto the Call Stack.
// 4. Repeat.
//
// Microtasks generally get priority over normal tasks.

// console.log("Start");
// setTimeout(function () {
//   console.log("I am setTimeout!")
// }, 2000); // The callback becomes eligible after 2 seconds, but it can execute only when the call stack is empty. Also setTimeout means Don't execute this callback before 2 seconds. After 2 seconds, put it in a queue when the event loop can process it.
// for (let i = 0; i < 10000; i++) {
//   console.log("I: ", i)
// };
// console.log("End");

// ---------------------- JS Engine - V8 Architecture -----------------------
// ===> To run JS code, we need JS Runtime Environment ( as in Nodejs ) ( Like console, setTimeout is available in Browswer as well as in JS Runtime but localStorage is available in Browser Only )
// ===> In V8, Turbofan is COMPILER and IGNITION is Interpreter
// ===> Parser (Tokenization) -> Compilation (AST Tree) -> Execution ( Call Stack and Heap Memory)
// ===> JS is JIT ( Just in time compilation => It is interpreter and during run time it compiles to optimize)
// ===> 
// ===> Google use V8 engine for JS. Firefox use SpiderMonkey

// ---------------------- High Order Functions -----------------------
// ===> Function that takes function as an argument, or returns a function is high order function. The function passed as an argument is the CALLBACK function.

// const circleArea = (r) => Math.PI * r * r;
// const circleCircumference = (r) => 2 * Math.PI * r;
// const circleDiameter = (r) => 2 * r;


// const calculate = (arr, logic) => {
//   let output = [];
//   for (let i = 0; i < arr.length; i++) {
//     output[i] = logic(arr[i]);
//   }
//   return output
// }

// const radiusArray = [1, 2, 3, 4, 5];
// console.log("Area of Circles: ", calculate(radiusArray, circleArea));
// console.log("Area of Circles: ", calculate(radiusArray, circleCircumference));
// console.log("Area of Circles: ", calculate(radiusArray, circleDiameter));

// const circleArea = (r) => Math.PI * r * r;
// Array.prototype.calculate = function (logic) { // This thing works for function syntax not on arrow.
//   console.log(this)
//   let output = [];
//   for (let i = 0; i < this.length; i++) {
//     output[i] = logic(this[i]);
//   }
//   return output
// }
// const radiusArray = [1, 2, 3, 4, 5];
// console.log("Area of Circles: ", radiusArray.calculate(circleArea)); // Making custom function treat as map. 

// ----------- Map, Filter, Reduce ( Array Methods ) ( We can CHAINED these functions) -----------------

// ===> MAP (It is a High Order Function, returns a new array. Executes the passed function on each element of array)

// const double = (x) => {
//   return x * 2;
// }
// const numbers = [1, 2, 3, 4, 5];
// const output1 = numbers.map(double);
// console.log("🚀 ~ output1:", output1)
// const output2 = numbers.map(function (x) {
//   return x * 2;
// });
// console.log("🚀 ~ output2:", output2);
// const output3 = numbers.map(x => { return x * 2 });
// console.log("🚀 ~ output3:", output3)
// const output4 = numbers.map(x => x * 2);
// console.log("🚀 ~ output4:", output4);

// ===> FILTER (It is used to filter values based on the defined condition)
// const isEven = (x) => x % 2 === 0;
// const numbers = [1, 2, 3, 4, 5];
// let output = numbers.filter(isEven);
// console.log("🚀 ~ output:", output);

// ===> REDUCE (It is used when we want to come up with a single value after operating array)
// const numbers = [1, 2, 3, 4, 5];
// const largest = numbers.reduce((num, curr) => {
//   if (curr > num) num = curr;
//   return num;
// }, 0);
// console.log("🚀 ~ largest:", largest);
// const sum = numbers.reduce((sum, curr) => {
//   sum += curr;
//   return sum;
// }, 0);
// console.log("🚀 ~ sum:", sum);

// ===> Real World Examples
const users = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 26 }
];

// const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
// const fullNameArray = users.map(
//   user => `${capitalize(user.firstName)} ${user.lastName}`
// );
// console.log(fullNameArray);

// const agesGroups = users.reduce((acc, curr) => {
//   // if (Object.keys(acc).includes(String(curr["age"]))) { // OR below IF condition
//   if (acc[curr.age]) {
//     acc[curr.age] += 1;
//   } else {
//     acc[curr.age] = 1;
//   };
//   return acc;
// }, {}); 
// console.log("🚀 ~ agesGroups:", agesGroups)
// const agesGroups = users.reduce((acc, curr) => { // EVEN More Cleaner Form
//   acc[curr.age] = (acc[curr.age] ?? 0) + 1;
//   return acc;
// }, {});
// console.log("🚀 ~ agesGroups:", agesGroups)

// const firstNameArray = users.filter((user) => user.age > 30).map((user) => user.firstName)
// console.log("🚀 ~ firstNameArray:", firstNameArray)
// const firstNameArray = users.reduce((acc, curr) => { // Above result using REDUCE Method
//   if (curr.age > 30) acc.push(curr.firstName);
//   return acc;
// }, [])
// console.log("🚀 ~ firstNameArray:", firstNameArray)
