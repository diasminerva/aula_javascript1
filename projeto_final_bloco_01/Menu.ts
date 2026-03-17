import readlinesync = require('readline-sync');

import { ProdutoController } from "./src/controller/ProdutoController";
import { ProdutoEletronico } from "./src/util/model/ProdutoEletronico";

export function main() {

    let produtos: ProdutoController = new ProdutoController();

    let opcao: number;
    let id: number;
    let preco: number;
    let nome: string;
    let marca: string;

    while (true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("              LIVRARIA DO DESENVOLVEDOR              ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Livro                      ");
        console.log("            2 - Listar todos os Livros               ");
        console.log("            3 - Buscar Livro por ID                  ");
        console.log("            4 - Atualizar Dados do Livro             ");
        console.log("            5 - Apagar Livro                         ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");

        opcao = readlinesync.questionInt("\nEntre com a opcao desejada: ");

        switch (opcao) {

            case 1:
                console.log("\nCadastrar Livro\n");

                id = readlinesync.questionInt("Digite o ID do Livro: ");
                nome = readlinesync.question("Digite o Nome do Livro: ");
                preco = readlinesync.questionFloat("Digite o Preco do Livro: ");
                marca = readlinesync.question("Digite o Autor do Livro: ");

                produtos.cadastrar(new ProdutoEletronico(id, nome, preco, marca));

                break;

            case 2:
                console.log("\nListar todos os Livros\n");

                produtos.listarTodos();

                break;

            case 3:
                console.log("\nBuscar Livro por ID\n");

                id = readlinesync.questionInt("Digite o ID do Livro: ");

                produtos.procurarPorId(id);

                break;

            case 4:
                console.log("\nAtualizar Dados do Livro\n");

                id = readlinesync.questionInt("Digite o ID do Livro: ");
                nome = readlinesync.question("Digite o Nome do Livro: ");
                preco = readlinesync.questionFloat("Digite o Preco do Livro: ");
                marca = readlinesync.question("Digite o Autor do Livro: ");

                produtos.atualizar(new ProdutoEletronico(id, nome, preco, marca));

                break;

            case 5:
                console.log("\nApagar Livro\n");

                id = readlinesync.questionInt("Digite o ID do Livro: ");

                produtos.deletar(id);

                break;

            case 6:
                console.log("\nLIVRARIA DO DESENVOLVEDOR - Sistema encerrado!");
                process.exit(0);

            default:
                console.log("\nOpcao invalida!");

        }

    }

}

main();