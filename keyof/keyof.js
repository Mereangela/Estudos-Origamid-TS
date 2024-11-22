"use strict";
/*
Keyof

Indica que o dado é uma chave de uma Interface/Tipo.
*/
// interface Produto {
//     nome:String;
//     preco:number;
//     novo: boolean;
// }
// let chave: keyof Produto;
// // let chave: "novo" | "preco" | "novo";
// chave = "novo";
/*
typeof

Já vimos o typeof do JavaScript, responsável por retornar o tipo  do dado.
No TypeScript podemos utilizar ele para indicar que um dado possui o mesmo tipo que outro.

*/
// function coordenadas(x:number, y:number) {
//     return {x, y};
// }
// let coord: typeof coordenadas;
// coord = (x:number, y:number) => {
//     return {
//         x,
//         y,
//     };
// };
/*
querySelector

É com o keyof que o querySelector consegue associar uma string com a interface que ela retorna.

*/
// interface Elementos {
//     a: HTMLAnchorElement;
//     video: HTMLVideoElement;
//     div:HTMLElement;
//     body:HTMLBodyElement;
//     audio:HTMLAudioElement;
// }
// function selecionar<Chave extends keyof Elementos>(
//     seletor: Chave
// ): Elementos[Chave] | null {
//     return document.querySelector(seletor);
// }
// selecionar("a")?.href;
// selecionar("video")?.volume;
// selecionar("div")
// selecionar("body")
// selecionar("audio")
/*
checkInterface

O keyof pode ser utilizado para criarmos funções genéricas utilitárias.

*/
async function fetchData(url) {
    const base = 'https://api.origamid.dev/json';
    const response = await fetch(base + url);
    return await response.json();
}
function checkInterface(obj, key) {
    if (obj && typeof obj === 'object' && key in obj) {
        return true;
    }
    else {
        return false;
    }
}
async function handleData() {
    const jogo = await fetchData("/jogo.json");
    if (checkInterface(jogo, "desenvolvedora")) {
        console.log(jogo.desenvolvedora);
    }
    const livro = await fetchData("/livro.json");
    if (checkInterface(livro, "autor")) {
        console.log(livro.autor);
    }
}
handleData();
