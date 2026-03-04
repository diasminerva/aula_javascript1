import leia from 'readline-sync'; 

let somaPositivos = 0;
let numero;

console.log("--- Soma de Numeros Positivos (Digite 0 para parar) ---");

do {
    numero = leia.questionInt("Digite um numero: ");
    
    if (numero > 0) {
        somaPositivos += numero;
    }
} while (numero !== 0); 

console.log(`\nA soma dos numeros positivos e: ${somaPositivos}`);