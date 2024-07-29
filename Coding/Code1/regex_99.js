// *** REGEX IN JS *** (This is a good website for regex: https://regexr.com/) (Regex is a sequence of characters that forms a search pattern)
let str1 = "I am very very VERY lazy lazyLazzy guy.";
let reg1 = /very/g; // g means globally
let reg2 = /very/gi; // gi means globally and case insensitive
let reg3 = /ve/; // matching 've' without any flags

// console.log(str1.replace("very", "VERY")); // replaces first occurrence of 'very' with 'VERY'
// console.log(str1.replace(reg1, "VERY")); // replaces all occurrences of 'very' with 'VERY'
// console.log(str1.replace(reg2, "VERY")); // replaces all occurrences of 'very' and 'VERY' with 'VERY'
// console.log(str1.match(reg1)); // matches all occurrences of 'very'
// console.log(str1.match(reg2)); // matches all occurrences of 'very' and 'VERY'
console.log(str1.match(reg3)); // matches the first occurrence of 've'
