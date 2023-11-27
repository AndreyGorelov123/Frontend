// console.log('Tasks')
// console.log(word.toLowerCase());
// console.log(word.toUpperCase());

// TASK #1 "Написать функцию, которая проверяет,
// является ли строка палиндромом. Вернуть false или true."


// type data String
let word = 'kazak'
console.log(word);

// type data Array
// let lettersArray = word.split('')
// console.log(lettersArray);

// let reverseArray = lettersArray.reverse()
// console.log(reverseArray);

// // type data String
// let reverseArrayJoin = reverseArray.join('')
// console.log(reverseArrayJoin);


let reverseWord = word.split('').reverse().join('')
let result = word === reverseWord
console.log(result)








