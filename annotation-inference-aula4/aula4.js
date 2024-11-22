"use strict";
// const produto: string = "Livro";
// const preco: number = 200;
// const carro: {
//     marca: string;
//     portas:number;
// } =  {
//     marca:"Audi",
//     portas:5
// };
//carro.marca = 3 - aqui eu não funciono, porque eu sou definida como string.
//carro.portas = Honda - aqui eu não funciono, por eu sou definida como number.
//TS previne os erros.
//O TS ele entende o que é string e number sem precisar informa-lás. Segue abaixo o código:
// let produto = "Livro";
// let preco = 200;
// const carro = {
//     marca: "Audi", //Eu entendo que aqui é uma string sem precisar dizer que é - isso eu chamo de INFERENCE = INFERÊNCIA, o que é muito bom.
//     portas:5, //Eu entendo que aqui é um number sem precisar dizer que é - isso eu chamo de INFERENCE = INFERÊNCIA, o que é muito bom.
// };
// const barato = preco < 400 ? true: "produto caro"; //Oi, lembra de mim? Eu sou operador ternário =)
//FUNÇÕES
// function somar(a:number, b:number) {
//     return a + b;
// }
// somar(4,10);
// somar('4', '10') - Aqui eu não funciono, porque eu sou número = number e você colocou como string, observe as aspas. Elas são usadas para string.
//Aqui eu retorno uma string, observe a função abaixo:
// function somar (a:number, b:number): string{ // e se tirar o string, vai função, porque o TS consegue inferir.
//     return `${a + b}`; //Aqui eu consigo identificar que é uma string e não posso passar qualquer coisa.
// }
// somar(5, 10); //Essa função recebe dois números e retorna uma string.
const nintendo = {
    nome: "Nintendo",
    preco: "2000",
};
function transformarPreco(produto) {
    produto.preco = 'R$ ' + produto.preco;
    return produto;
}
const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
