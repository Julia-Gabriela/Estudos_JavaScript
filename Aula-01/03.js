const prompt = require('readline-sync')

const idade = prompt.question('Qual e a sua idade?');

const idadeNumber = Number(idade);

console.log(idadeNumber, typeof idadeNumber);

console.log(Number("X"))

console.log(String(10), typeof String(10));

console.log(Boolean(-1));

//Coerçao Implicita

console.log(1 + "1");
console.log(10 + "5");
console.log(10 * "5");
console.log(10 - "5");