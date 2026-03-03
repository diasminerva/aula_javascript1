const read = require('readline-sync');

let salarioBruto = read.questionFloat("Salario Bruto: ");
let adicionalNoturno = read.questionFloat("Adicional Noturno: ");
let horasExtras = read.questionFloat("Horas Extras: ");
let descontos = read.questionFloat("Descontos: ");

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log("\nSalário Líquido: " + salarioLiquido.toFixed(2));