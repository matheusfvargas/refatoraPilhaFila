export class Objetos <T>{
    elementos:T[];

    constructor() {
        this.elementos = new Array();

    }
     // Verifica se o objeto está vazio
     estaVazia(): boolean {
        if (this.elementos.length<1){
        return true;
    }
        return false;
    }
    // Imprime todos os elementos do objeto
    imprimir(): void {
        if (this.estaVazia()) {
            console.log("[]");
            return;
        }

        let resultado = "[";
        for (let i = 0; i < this.elementos.length; i++) {
            resultado += this.elementos[i];
            if (i < this.elementos.length-1) {
                resultado += ", ";
            }
        }
        resultado += "]";
        console.log(resultado);
    }
    // Retorna a quantidade de elementos do objeto
    tamanho():number{
        return this.elementos.length
    }
}