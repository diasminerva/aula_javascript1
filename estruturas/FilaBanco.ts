import * as readline from 'readline-sync';
import { Queue } from './Queue';

const fila = new Queue<string>();
let opcao: number;

do {
    console.log("\n*****************************************************");
    console.log("1 - Adicionar Cliente na Fila");
    console.log("2 - Listar todos os Clientes");
    console.log("3 - Retirar Cliente da Fila");
    console.log("0 - Sair");
    console.log("*****************************************************");
    
    opcao = readline.questionInt("Entre com a opcao desejada: ");

    switch (opcao) {
        case 1:
            const nome = readline.question("\nDigite o nome: ");
            fila.enqueue(nome);
            console.log("\nFila:");
            fila.printQueue();
            console.log("\nCliente Adicionado!");
            break;
        case 2:
            if (fila.isEmpty()) {
                console.log("\nA Fila está vazia!");
            } else {
                console.log("\nLista de Clientes na Fila:");
                fila.printQueue();
            }
            break;
        case 3:
            if (fila.isEmpty()) {
                console.log("\nA Fila está vazia!");
            } else {
                fila.dequeue();
                console.log("\nFila:");
                fila.printQueue();
                console.log("\nO Cliente foi Chamado!");
            }
            break;
        case 0:
            console.log("\nPrograma Finalizado!");
            break;
        default:
            console.log("\nOpção Inválida!");
    }
} while (opcao !== 0);