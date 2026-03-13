import * as readline from 'readline-sync';
import { Stack } from './Stack';

const pilha = new Stack<string>();
let opcao: number;

do {
    console.log("\n*****************************************************");
    console.log("1 - Adicionar Livro na pilha");
    console.log("2 - Listar todos os Livros");
    console.log("3 - Retirar Livro da pilha");
    console.log("0 - Sair");
    console.log("*****************************************************");

    opcao = readline.questionInt("Entre com a opcao desejada: ");

    switch (opcao) {
        case 1:
            const nomeLivro = readline.question("\nDigite o nome: ");
            pilha.push(nomeLivro);
            console.log("\nPilha:");
            pilha.printStack();
            console.log("\nLivro adicionado!");
            break;
        case 2:
            if (pilha.isEmpty()) {
                console.log("\nA Pilha está vazia!");
            } else {
                console.log("\nLista de Livros na Pilha:");
                pilha.printStack();
            }
            break;
        case 3:
            if (pilha.isEmpty()) {
                console.log("\nA Pilha está vazia!");
            } else {
                pilha.pop();
                console.log("\nPilha:");
                pilha.printStack();
                console.log("\nUm Livro foi retirado da pilha!");
            }
            break;
        case 0:
            console.log("\nPrograma Finalizado!");
            break;
        default:
            console.log("\nOpção Inválida!");
    }
} while (opcao !== 0);