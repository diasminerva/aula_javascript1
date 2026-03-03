const read = require('readline-sync');

let nota1 = read.questionFloat("Nota 1: ");
let nota2 = read.questionFloat("Nota 2: ");
let nota3 = read.questionFloat("Nota 3: ");
let nota4 = read.questionFloat("Nota 4: ");

let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("\nMédia final: " + media.toFixed(1));