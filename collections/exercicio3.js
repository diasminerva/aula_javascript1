import leia from 'readline-sync';

const numerosSet = new Set();

console.log("--- Exercício 03: Collection Set (10 números) ---");

while (numerosSet.size < 10) {
    let num = leia.questionInt(`Digite o ${numerosSet.size + 1}o numero (nao repetido): `);
    
    if (numerosSet.has(num)) {
        console.log("Este numero ja foi adicionado! Tente outro.");
    } else {
        numerosSet.add(num); 
    }
}

console.log("\nListar dados do Set:");

numerosSet.forEach(n => console.log(n));