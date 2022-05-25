export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    //private negociacoes: Array<Negociacao> = [];
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //lista(): ReadonlyArray<Negociacao> {
    lista() {
        //return [...this.negociacoes];
        return this.negociacoes;
    }
}
