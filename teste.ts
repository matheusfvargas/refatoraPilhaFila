import { Fila } from "./fila";
import { Pilha } from "./pilha";

console.log('PILHA TESTE')
let p1:Pilha = new Pilha(5);
p1.empilhar('A')
p1.empilhar('B')
p1.empilhar(1)
p1.empilhar('C')
console.log(p1.tamanho())
p1.imprimir()
p1.desempilhar()
console.log(p1.elementoTopo())
console.log(p1.estaCheia())
console.log(p1.tamanho())
p1.empilhar('D')
p1.empilhar('E')
console.log(p1.estaCheia())


console.log('FILA TESTE')

let f1:Fila = new Fila();
f1.enfileirar('A')
f1.enfileirar('B')
f1.enfileirar(2)
console.log(f1.tamanho())
console.log(f1.estaVazia())
console.log(f1.proximo())
f1.imprimir()
f1.desenfileirar()
f1.desenfileirar()
f1.desenfileirar()
f1.imprimir()
console.log(f1.tamanho())
console.log(f1.estaVazia())



