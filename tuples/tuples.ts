/*
Tuples são arrays que possuem dados em posições fixas.

Este conceito existe em diversas linguagens de programação.
*/

const produto1 = ['Notebook', 2500];
const produto2:[string , number] = ['Notebook', 2500];

produto2[0].toLowerCase();
produto2[1].toFixed();

if(typeof produto1[0] === 'string') {
    console.log(produto1[0].toLowerCase());
}

/*
as const

Torna um dado readonly e infere o tipo de dado mais específico possível.
Em métodos que retornam Array's, as mesmas são transformadas em Tuples.

*/

function getText(selector: string){
    const el = document.querySelector<HTMLElement>(selector);
    if(el) {
        return [el, el.innerText] as const;
    } else {
        return null;
    }
}

const button = getText('button');

console.log(button);

//Exercício

// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple).
// 3 - Some o total das vendas e mostre na tela.

async function fetchVendas() {
    const response = await fetch('https://api.origamid.dev/json/vendas.json');
    const data = await response.json();
    somarVendas(data);
}

fetchVendas();

interface ProdutoDetalhes {
    marca: string;
    cor:string;
}

type Venda = [string, number, string, ProdutoDetalhes];

function somarVendas(vendas:Venda[]) {
    let total1 = 0;
    for(let i = 0; i < vendas.length; i++){
        total1 += vendas[i][1];
    }
    document.body.innerHTML += `<p>Total: ${total1}</p>`;

    const total2 = vendas.reduce((total, venda) => {
        return total + venda[1];
    },0);

    document.body.innerHTML += `<p>Total: ${total2}</p>`
}

const arr = [3, 5, 10, 20, 30];
const somar = arr.reduce((anterior,atual) => {
    return anterior + atual;
}, 0);

console.log(somar);



