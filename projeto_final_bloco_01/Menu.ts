import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";

export function main() {
    let opcao: number;

    while (true) {
        console.log(colors.bg.black, colors.fg.blue);
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
        console.log("                                                     ", colors.reset);

        opcao = readlinesync.questionInt("Entre com a opcao desejada: ");

        if (opcao === 6) {
            console.log(colors.fg.green, "\nLivraria do Desenvolvedor - O conhecimento transforma!");
            console.log("Sobre a Desenvolvedora: Minerva Almeida Dias");
            console.log("Projeto Generation Brasil\n", colors.reset);
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.white, "\n\nCadastrar Livro\n\n", colors.reset);
                break;
            case 2:
                console.log(colors.fg.white, "\n\nListar todos os Livros\n\n", colors.reset);
                break;
            case 3:
                console.log(colors.fg.white, "\n\nBuscar Livro por ID\n\n", colors.reset);
                break;
            case 4:
                console.log(colors.fg.white, "\n\nAtualizar Dados do Livro\n\n", colors.reset);
                break;
            case 5:
                console.log(colors.fg.white, "\n\nApagar Livro\n\n", colors.reset);
                break;
            default:
                console.log(colors.fg.red, "\nOpção Inválida!\n", colors.reset);
                break;
        }
    }
}

main();