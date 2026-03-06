import leia from 'readline-sync';

const cores = [];
console.log("--- Exercício 01: Lista de Cores ---");

for (let i = 0; i < 5; i++) {
    let cor = leia.question(`Digite a ${i + 1}a cor: `);
    cores.push(cor); 
}
console.log("\nListar todas as cores:");
console.log(cores.join("\n")); 
console.log("\nOrdenar as cores:");
console.log(cores.sort().join("\n"));