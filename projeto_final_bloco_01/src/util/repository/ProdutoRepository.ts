export interface ProdutoRepository{

    procurarPorId(id: number): void

    listarTodos(): void

    cadastrar(produto: any): void

    atualizar(produto: any): void

    deletar(id: number): void

}