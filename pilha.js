"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pilha = void 0;
var objetos_1 = require("./objetos");
var Pilha = /** @class */ (function (_super) {
    __extends(Pilha, _super);
    function Pilha(capacidade) {
        var _this = _super.call(this) || this;
        _this.capacidade = capacidade;
        _this.topo = -1; // Pilha vazia
        return _this;
    }
    // Verifica se a pilha está cheia
    Pilha.prototype.estaCheia = function () {
        return this.topo === this.capacidade - 1;
    };
    // Empilha um elemento
    Pilha.prototype.empilhar = function (elemento) {
        if (this.estaCheia()) {
            throw new Error("Pilha cheia - Stack Overflow");
        }
        this.topo++;
        this.elementos[this.topo] = elemento;
    };
    // Desempilha um elemento
    Pilha.prototype.desempilhar = function () {
        if (this.estaVazia()) {
            throw new Error("Pilha vazia - Stack Underflow");
        }
        var elemento = this.elementos[this.topo];
        this.topo--;
        this.elementos.pop();
        return elemento;
    };
    // Retorna o elemento do topo sem remover
    Pilha.prototype.elementoTopo = function () {
        if (this.estaVazia()) {
            throw new Error("Pilha vazia");
        }
        return this.elementos[this.topo];
    };
    return Pilha;
}(objetos_1.Objetos));
exports.Pilha = Pilha;
