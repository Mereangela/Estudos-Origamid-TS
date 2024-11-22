"use strict";
/*
Reelembrando o que é objeto:

Um objeto é uma coleçao de propriedades, e uma propriedade é uma associação entre um nome (ou chave)
e um valor. Um valor de propriedade pode ser uma função, que é então considerada um método do objeto.
*/
//Class
// class Produto {
//     nome: string;
//     preco:number;
//     constructor(nome:string, preco:number){
//         this.nome = nome;
//         this.preco = preco;
//     }
//     //Método:
//     precoReal(){
//         return `R$ ${this.preco}`;
//     }
// }
// const livro = new Produto('A Guerra dos Tronos',200); //livro é um objeto do tipo Produto.
// console.log(livro.nome);
// console.log(livro.preco);
// console.log(livro.precoReal()); //retorna R$ 200
//instanceof mais uma palavra do JS
/*
Se o objeto é uma instancia de uma classe, ou seja, se ela foi criada com essa classe ou se a classe que criou ela herda de outra classe.

*/
// console.log(livro instanceof Produto);
// console.log(livro instanceof Array);
// class Livro {
//     autor: string;
//     constructor(autor: string) {
//         this.autor = autor;
//     }
// }
// class Jogo {
//     jogadores: number;
//     constructor(jogadores: number){
//         this.jogadores = jogadores;
//     }
// }
// function buscarProduto(busca: string){
//     if(busca === 'O Hobbit'){
//         return new Livro('J.R.R.Tolkien')
//     }
//     if(busca === 'Dark Souls'){
//         return new Jogo(1);
//     }
//     return null;
// }
// const produto = buscarProduto('O Hobbit');
// if(produto instanceof Livro) {
//    console.log(produto.autor); 
// }
// if(produto instanceof Jogo) {
//     console.log(produto.jogadores);
// }
//O JavaScript funciona muito com a questão de herança. Tem um objeto que extende um anterior que herda propriedades e métodos de um objeto anterior.
//instanceof também vai verificar uma herança daquele objeto.
//Extends:
class Produto {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
class Livro extends Produto {
    autor;
    constructor(nome, autor) {
        super(nome); // super ele chama o constructor da classe, cujo, foi extendida. A classe que foi herdada pelo comando extends (Produto).
        this.autor = autor;
    }
}
class Jogo extends Produto {
    jogadores;
    constructor(nome, jogadores) {
        super(nome);
        this.jogadores = jogadores;
    }
}
function buscarProduto(busca) {
    if (busca === 'O Hobbit') {
        return new Livro('O Hobbit', 'J.R.R.Tolkien');
    }
    if (busca === 'Dark Souls') {
        return new Jogo('Dark Souls', 1);
    }
    return null;
}
const produto = buscarProduto('O Hobbit');
if (produto instanceof Livro) { // produto é uma instância de Livro?
    console.log(produto.autor);
}
if (produto instanceof Jogo) { //produto é uma instância de Jogo?
    console.log(produto.jogadores);
}
if (produto instanceof Produto) { //produto é uma instância de Produto?
    console.log(produto.nome);
}
//Aqui eu dou ERRO - Carro não foi definida.
// interface honda: Carro = {
//     nome:'Honda',
// };
// console.log(honda);
/*
class Cia {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
}

class Voo {
    numero: number;
    cia: Cia;
    data: Date;
    constructor(numero: number, cia: string, data: Date) {
        this.numero = numero;
        this.cia = cia;
        this.data = data;
    }
}

class Passagem {
    cia: Cia;
    constructor(cia: Cia) {
        this.cia = cia;
    }
}

const passagem = new Passagem("G3");

const voo = new Voo(numeroDoVoo, passagem.cia, dataDoVoo);

ApiVoos.criarVoo(voo);

*/ 
