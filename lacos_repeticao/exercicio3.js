import leia from 'readline-sync';

let menor21 = 0;
let maior50 = 0;
let idade = 0;

console.log("--- Contador de Idades (Digite um numero negativo para parar) ---");

while (idade >= 0) {
    idade = leia.questionInt("Digite uma idade: ");
    
    if (idade >= 0 && idade < 21) {
        menor21++;
    } else if (idade > 50) {
        maior50++;
    }
}

console.log(`\nTotal de pessoas menores de 21 anos: ${menor21}`);
console.log(`Total de pessoas maiores de 50 anos: ${maior50}`);