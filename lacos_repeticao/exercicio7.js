import leia from 'readline-sync';

const vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let busca = leia.questionInt("Digite o numero que voce deseja encontrar: ");
let posicao = -1;

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === busca) {
        posicao = i;
        break; 
    }
}

if (posicao !== -1) {
    console.log(`\nO numero ${busca} esta localizado na posicao: ${posicao}`);
} else {
    console.log(`\nO numero ${busca} nao foi encontrado!`);
}