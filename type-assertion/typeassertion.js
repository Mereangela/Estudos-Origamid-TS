"use strict";
//Type Assertion
async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    return response.json();
}
async function handleProduto() {
    const produto = await fetchProduto();
    console.log(produto.nome);
}
handleProduto();
//! non-null operator
/*
Indica que não existe a possibilidade do dado ser null.
Cuidado com o uso, pois pode levar a erros no runtime. User apenas se tiver certeza.

Esse é um operador TS !. e não de JS como ?.
Durante a compilação ele será removido.

*/
//Aqui estou dizendo que o video sempre existe e não tem a possibilidade de ser null.
// const video = document.querySelector('video')!;
// video.volume;
//Outras sintaxes
const video1 = document.querySelector('.player');
const video2 = document.querySelector('video');
const video3 = document.querySelector('.player');
const video4 = document.querySelector('.player');
video4.volume;
