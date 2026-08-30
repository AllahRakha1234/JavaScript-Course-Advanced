
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

// ---------------------- Currying ( Application of Clousures ) -----------------------

// function z(a) {
//   return function y(b) {
//     return function x(c) {
//       return a + b + c;
//     };
//   };
// };

// const z = (a) => (b) => (c) => a + b + c;

// const step1 = z(10);
// console.log("🚀 ~ step1:", step1)
// const step2 = step1(20);
// console.log("🚀 ~ step2:", step2)
// const step3 = step2(30);
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

// // We can define the function separtely as well and take the arguments. First argument will be the reference of the object and then we can pass the other arguments as well.
// const printFullNameFn = function (city, province) {
//   console.log(`I am ${this.fname} ${this.lname}. I live in ${city}, ${province}.`);
// }

// printFullNameFn.call(user, "Karachi", "Sindh");
// printFullNameFn.call(user1, "Lahore", "Punjab");
// printFullNameFn.apply(user, ["Karachi", "Sindh"]);
// printFullNameFn.apply(user1, ["Lahore", "Punjab"]);
// // Bind method returns a new function with the reference of the object passed as first argument. We can call that function later on.
// const printFullNameBind = printFullNameFn.bind(user, "Karachi", "Sindh");
// console.log("🚀 ~ printFullNameBind:", printFullNameBind);
// printFullNameBind();