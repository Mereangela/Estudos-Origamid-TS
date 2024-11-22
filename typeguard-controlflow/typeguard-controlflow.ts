function typeGuard(value: any) {
    if (typeof value === 'string'){
        return value.toLowerCase();
    }
    if (typeof value === 'number') {
        return value.toFixed();
    }
    if(value instanceof HTMLElement){
        return value.innerText;
    }
}

typeGuard(200);
typeGuard('333');
typeGuard(document.body);

/*
in

O operador in verificar se o objeto possui uma propriedade com o mesmo nome da string comparada "propriedade" in obj.

*/

const obj = {
    nome:'Origamid',
}

if('nome' in obj) {
    console.log('sim');
}

async function fetchProduto(){
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const json = await response.json();
    handleProduto(json);
}

interface Produto {
    nome: string;
    preco:number;
}

function handleProduto(data:Produto){
    console.log(data);
    if('preco' in data){ //Eu sou a TypeGuard, o famoso segurança.
    document.body.innerHTML += `
    <p>Nome: ${data.nome}</p>
    <p>Preço: R$ ${data.preco + 200}</p>
    `;
    }
}

fetchProduto();