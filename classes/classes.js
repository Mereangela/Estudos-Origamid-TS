"use strict";
/*
As classes/funções construtoras são responsáveis pela construção de objetos que já vimos, como:
MouseEvent,HTMLElement e todos os demais.

Class é simplesmente chamado de açucar sintático para uma função construtora.

*/
class Produto {
    tipo = 'produto'; //Aqui eu libero somente para leitura.
    nome;
    preco; //Eu não deixo acessar fora da classe e privada só dentro desta classe e o protected permite utilizar nas subclasses.
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    getPreco() {
        return Produto.transformarPreco(this.preco);
    }
    static transformarPreco(preco) {
        return `R$ ${preco}`;
    }
}
const livro = new Produto('O Senhor dos Anéis', 300);
console.log(livro.getPreco()); // Aqui eu mostro o que é acesso. Neste caso, estou acessando o getPreco e mostrando no console.
//E como padrão todas são public e posso acessar em qualquer lugar.
console.log(livro.nome);
console.log(Produto.transformarPreco);
class Quadrado {
    lados = 4;
    medida;
    constructor(medida) {
        this.medida = medida;
    }
    getPerimetro() {
        return this.medida * this.lados;
    }
    getArea() {
        return this.medida * this.medida;
    }
}
class Circulo {
    PI = Math.PI;
    raio;
    constructor(raio) {
        this.raio = raio;
    }
    getPerimetro() {
        return Math.round(2 * this.PI * this.raio * 100) / 100;
    }
    getArea() {
        return Math.round(this.PI * (this.raio * this.raio) * 100) / 100;
    }
}
// const q1 = new Quadrado(10);
// console.log(q1.getArea());
//Verificando se é quadrado:
const q1 = new Quadrado(10);
if (q1 instanceof Quadrado) {
    console.log(q1.getArea());
}
const formas = [2, 32, 12, 3, 4, 20, 37, 9].map(n => {
    if (n < 15) {
        return new Quadrado(n);
    }
    else {
        return new Circulo(n);
    }
});
formas.forEach(forma => {
    if (forma instanceof Quadrado) {
        console.log(forma.lados);
    }
    if (forma instanceof Circulo) {
        console.log(forma.raio);
    }
});
