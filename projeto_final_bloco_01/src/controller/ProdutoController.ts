import { Produto } from "../util/model/Produto";
import { ProdutoRepository } from "../util/repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {

    private listaProdutos: Array<Produto> = new Array<Produto>();
    public id: number = 0;

    procurarPorId(id: number): void {

        let buscaProduto = this.listaProdutos.find(produto => produto.id === id);

        if (buscaProduto != null)
            buscaProduto.visualizar();
        else
            console.log("Produto não encontrado!");
    }

    listarTodos(): void {

        for (let produto of this.listaProdutos) {
            produto.visualizar();
        }
    }

    cadastrar(produto: Produto): void {

        this.listaProdutos.push(produto);
        console.log("Produto cadastrado com sucesso!");
    }

    atualizar(produto: Produto): void {

        let buscaProduto = this.listaProdutos.findIndex(p => p.id === produto.id);

        if (buscaProduto >= 0) {
            this.listaProdutos[buscaProduto] = produto;
            console.log("Produto atualizado!");
        }
    }

    deletar(id: number): void {

        let buscaProduto = this.listaProdutos.findIndex(p => p.id === id);

        if (buscaProduto >= 0) {
            this.listaProdutos.splice(buscaProduto, 1);
            console.log("Produto deletado!");
        }
    }
}