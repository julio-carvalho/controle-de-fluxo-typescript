import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];
    //private negociacoes: Array<Negociacao> = [];
    
    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    //lista(): ReadonlyArray<Negociacao> {
    lista(): readonly Negociacao[] {
        //return [...this.negociacoes];
        return this.negociacoes;
    }
}