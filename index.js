// EXAMPLE 1 - Get the Index of a Character in a String in JavaScript

const str = 'hello world';

const index = str.indexOf('l');
console.log(index); // 👉️ 2

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the Index of a Character's Last Occurrence in a String

// const str = 'hello world';

// const lastIndex = str.lastIndexOf('l');
// console.log(lastIndex); // 👉️  9

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get the index of all occurrences of characters in a String

// const str = 'hello world';

// const indexes = [];

// for (let index = 0; index < str.length; index++) {
//   if (str[index] === 'l') {
//     indexes.push(index);
//   }
// }

// console.log(indexes); // 👉️ [2, 3, 9]

// ------------------------------------------------------------------

// // EXAMPLE 4 - Get the index of all occurrences of characters in a String using split()

// function findIndexes(string, char) {
//   return string
//     .split('')
//     .map((c, idx) => {
//       if (c === char) {
//         return idx;
//       }

//       return -1;
//     })
//     .filter(element => element !== -1);
// }

// const str = 'hello world';
// const indexes = findIndexes(str, 'l');

// console.log(indexes); // 👉️ [ 2, 3, 9 ]
