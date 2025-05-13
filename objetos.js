"use strict";
exports.__esModule = true;
exports.Objetos = void 0;
var Objetos = /** @class */ (function () {
    function Objetos() {
        this.elementos = new Array();
    }
    // Verifica se o objeto está vazio
    Objetos.prototype.estaVazia = function () {
        if (this.elementos[0] === null) {
            return true;
        }
        return false;
    };
    // Imprime todos os elementos do objeto
    Objetos.prototype.imprimir = function () {
        if (this.estaVazia()) {
            console.log("[]");
            return;
        }
        var resultado = "[";
        for (var i = 0; i < this.elementos.length; i++) {
            resultado += this.elementos[i];
            if (i < this.elementos.length - 1) {
                resultado += ", ";
            }
        }
        resultado += "]";
        console.log(resultado);
    };
    // Retorna a quantidade de elementos do objeto
    Objetos.prototype.tamanho = function () {
        return this.elementos.length;
    };
    return Objetos;
}());
exports.Objetos = Objetos;
