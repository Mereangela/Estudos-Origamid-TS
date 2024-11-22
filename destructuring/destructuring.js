"use strict";
/*
Destructuring - Desestruturação

Durante a desestruturação de objetos, podemos indicar o tipo de dado com a sintaxe: { key1, key2 }: { key1: type1; key2: type2; }

*/
const { body } = document;
function handleData({ nome, preco }) {
    nome.includes("books");
    preco?.toFixed();
}
handleData({
    nome: "Notebook",
    preco: 2000,
});
// É importante conhecer bem os dados =)
/*
Durante a desestruturação é necessário indicar o tipo exato do dado esperado pelo TypeScript.
*/
//Page x = significa qual eixo x foi clicado.
function handleClick1({ currentTarget, pageX, }) {
    if (currentTarget instanceof HTMLElement) { //Eu sou um TypeGuardian 
        currentTarget.innerHTML = `
        <h1> Mouse click em eixo x: ${pageX}</h1> 
        `;
    }
    console.log(currentTarget);
    console.log(pageX);
}
document.documentElement.addEventListener("click", handleClick1);
// O uso do operador ...rest
//Ou em (tipo: "menor" | "maior") - assim fica melhor.
function comparar(tipo, ...numeros) {
    if (tipo === 'menor') {
        return Math.min(...numeros);
    }
    if (tipo === 'maior') {
        return Math.max(...numeros);
    }
}
console.log(comparar('menor', 3, 4, 5, 6, 7, 20, 10, 30, 1));
console.log(comparar('maior', 3, 4, 5, 6, 7, 20, 10, 30, 1));
