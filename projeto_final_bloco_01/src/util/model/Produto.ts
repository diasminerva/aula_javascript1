export abstract class Produto{

    private _id: number
    private _nome: string
    private _preco: number

    constructor(id: number, nome: string, preco: number){

        this._id = id
        this._nome = nome
        this._preco = preco
    }

    public get id(){
        return this._id
    }

    public get nome(){
        return this._nome
    }

    public get preco(){
        return this._preco
    }

    public abstract visualizar(): void
}