import leia from 'readline-sync';

let matriz = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let diagonalPrincipal = [];
let diagonalSecundaria = [];
let somaPrincipal = 0;
let somaSecundaria = 0;

console.log("--- Exercício 09: Matriz 3x3 ---");

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = leia.questionInt(`Digite o valor da posicao [${i}][${j}]: `);
    }
}
for (let i = 0; i < 3; i++) {
    
    diagonalPrincipal.push(matriz[i][i]);
    somaPrincipal += matriz[i][i];
    
    diagonalSecundaria.push(matriz[i][2 - i]);
    somaSecundaria += matriz[i][2 - i];
}

console.log(`\nElementos da Diagonal Principal: ${diagonalPrincipal.join(" ")}`);
console.log(`Elementos da Diagonal Secundaria: ${diagonalSecundaria.join(" ")}`);
console.log(`Soma dos Elementos da Diagonal Principal: ${somaPrincipal}`);
console.log(`Soma dos Elementos da Diagonal Secundaria: ${somaSecundaria}`);