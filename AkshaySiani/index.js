
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

