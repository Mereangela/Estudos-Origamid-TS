"use strict";
let total = 20;
total: "30";
function preencherDados(dados) {
    document.body.innerHTML += `        <!-- += serve para separar os objetos Computador e Notebook-->
    <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? 'sim.' : 'não.'}</p>
    </div>
    `;
}
const computador = {
    nome: "Computador",
    preco: 2000,
    teclado: true,
};
preencherDados(computador);
preencherDados({
    nome: 'Notebook',
    preco: 3500,
    teclado: false,
});
function pintarCategoria(categoria) {
    if (categoria === 'design')
        console.log('Pintar vermelho');
}
pintarCategoria('design');
