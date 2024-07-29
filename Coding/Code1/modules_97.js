// *** MODUELS IN JS *** (There are 2 ways to define a module in JS - 1. CommonJS, 2. ES6 Modules) (We need modules because in this way we can split our code into multiple files and import/export them as needed.) (Second thing multiple user can work separately on different modules and then we can combine them together.)
// COMMON JS MODULES
// const hi = () => {
//   console.log("Hi");
// };
// const Ahi = (name) => {
//   console.log("Hi " + name);
// };
// module.exports = { hi, Ahi }; // Same as {hi: hi, Ahi: Ahi}

// ES6 MODULES
export const hi = () => {
  console.log("Hi");
};

export const Ahi = (name) => {
  console.log("Hi " + name);
};

const specialHi = () => {
  console.log("Special Hi");
};

export default specialHi;
