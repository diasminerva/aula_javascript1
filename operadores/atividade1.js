const read = require('readline-sync');

let salario = read.questionFloat("Digite o salário: ");

let abono = read.questionFloat("Digite o abono: ");

let novoSalario = salario + abono;

console.log("\nNovo Salário: " + novoSalario.toFixed(2));