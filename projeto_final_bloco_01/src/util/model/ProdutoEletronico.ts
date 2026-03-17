import { Produto } from "./Produto"

export class ProdutoEletronico extends Produto{

    private _marca: string

    constructor(id: number, nome: string, preco: number, marca: string){

        super(id, nome, preco)
        this._marca = marca
    }

    public visualizar(): void{

        console.log("Produto:", this.nome)
        console.log("Preço:", this.preco)
        console.log("Marca:", this._marca)

    }

}