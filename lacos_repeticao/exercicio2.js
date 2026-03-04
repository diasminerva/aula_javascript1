import leia from 'readline-sync'; 

let pares = 0;
let impares = 0;

console.log("--- Exercício 02: Contador de Pares e Ímpares ---");

for (let i = 1; i <= 10; i++) {
    
    let numero = leia.questionInt(`Digite o ${i}o numero: `);
    
    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log(`\nTotal de numeros pares: ${pares}`);
console.log(`Total de numeros impares: ${impares}`);