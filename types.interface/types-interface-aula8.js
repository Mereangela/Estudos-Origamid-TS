"use strict";
let total = 20;
total = "30";
function preencherDados(dados) {
    document.body.innerHTML += `
    <div>
        <h2>${dados.nome}</h2>
        <p>R$ ${dados.preco}</p>
        <p>Inclui teclado: ${dados.preco ? "sim" : "não"}</p> 
    </div>
    `;
}
const computador = {
    nome: 'Computador',
    preco: 2000,
    teclado: true,
};
const notebook = {
    nome: 'Notebook',
    preco: 3500,
    teclado: false,
};
const mouse = {
    nome: 'Mouse',
    preco: 100,
    teclado: false,
};
preencherDados(computador);
preencherDados(notebook);
preencherDados(mouse);
