"use strict";
/*
Intersection

Funciona em parte como o extends para interfaces, mas pode ser utilizado em Types.

É quando eu tenho um tipo e quero estender ele.

*/
//Se colocar o ou | vai dar erro, porque ele vai entender que é Carro ou Produto e neste caso, tem que usar & para dizer E. Os dados serão do Carro e do Produto.
function handleProdutoCarro(dados) {
    dados.rodas;
    dados.portas;
    dados.preco;
}
handleProdutoCarro({ rodas: 4, portas: 5, preco: 300000 });
function handleInterfaceCarro(carro) { }
window.userId = 200;
