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
exports.Fila = void 0;
var objetos_1 = require("./objetos");
var Fila = /** @class */ (function (_super) {
    __extends(Fila, _super);
    function Fila() {
        var _this = _super.call(this) || this;
        _this.inicio = 0;
        _this.fim = 0;
        return _this;
    }
    Fila.prototype.enfileirar = function (elemento) {
        this.elementos[this.fim] = elemento;
        this.fim++;
    };
    Fila.prototype.desenfileirar = function () {
        if (this.estaVazia()) {
            return null;
        }
        var removido = this.elementos[this.inicio];
        this.elementos.splice(0, 1);
        this.inicio++;
        return removido;
    };
    Fila.prototype.proximo = function () {
        if (this.estaVazia()) {
            return null;
        }
        return this.elementos[this.inicio];
    };
    return Fila;
}(objetos_1.Objetos));
exports.Fila = Fila;
