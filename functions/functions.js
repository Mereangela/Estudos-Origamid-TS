"use strict";
/*
Functions

A interface de uma função é definida durante a sua declaração.

*/
function somar(a, b, c) {
    return a + b + (c ? c : 0);
}
console.log(somar(9, 4, 2));
const subtrair = (a, b) => a - b;
console.log(subtrair(10, 3));
function pintarTela(cor) {
    document.body.style.background = cor;
}
pintarTela('pink');
const btn = document.querySelector('button');
btn?.click();
function isString(value) {
    if (typeof value === 'string') {
        return true;
    }
}
console.log(isString('Teste'));
console.log(isString(200));
function cacular(forma) {
    forma.perimetro(3);
}
function normalizar(valor) {
    if (typeof valor === 'string') {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map((item) => item.trim().toLowerCase());
    }
}
console.log(normalizar('Produto').toLowerCase);
console.log(normalizar(['Banana', 'UVA   ']).filter);
function $(seletor) {
    return document.querySelector(seletor);
}
$('a')?.click();
$('video')?.volume;
$('.item');
