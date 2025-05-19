import { Objetos } from "./objetos";

export class Fila extends Objetos<any>{
    private inicio: number;
    private fim: number;

    constructor() {
        super();
        this.inicio = 0;
        this.fim = 0;
    }

    enfileirar(elemento: any): void{
        this.elementos[this.fim] = elemento;
        this.fim++;
    }

    desenfileirar(): any {
        if (this.estaVazia()) {
            return null
        }
        const removido = this.elementos[this.inicio];
        this.elementos.splice(0,1)
        this.inicio++;
        return removido;
    }

    proximo(): any {
        if (this.estaVazia()) {
            return null;
        }
        return this.elementos[this.inicio];
    }

}