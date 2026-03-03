const read = require('readline-sync');

let n1 = read.questionFloat("numero 1: ");
let n2 = read.questionFloat("numero 2: ");
let n3 = read.questionFloat("numero 3: ");
let n4 = read.questionFloat("numero 4: ");

let diferenca = (n1 * n2) - (n3 * n4);

console.log("\nDiferença: " + diferenca.toFixed(1));