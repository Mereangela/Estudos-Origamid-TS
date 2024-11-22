type NumberOrString = string | number;

let total: NumberOrString = 20;
total= "30";

interface InterfaceProduto {
    nome: string;
    preco:number;
    teclado:boolean;
}

type TypeProduto = {
    nome:string;
    preco:number;
    teclado:boolean;
}

function preencherDados(dados:InterfaceProduto){
    document.body.innerHTML += `
    <div>
        <h2>${dados.nome}</h2>
        <p>R$ ${dados.preco}</p>
        <p>Inclui teclado: ${dados.preco ? "sim" : "não"}</p> 
    </div>
    `;
}

const computador: InterfaceProduto ={
    nome:'Computador',
    preco:2000,
    teclado:true,
};

const notebook: InterfaceProduto = {
    nome:'Notebook',
    preco: 3500,
    teclado:false,
}

const mouse: InterfaceProduto = {
    nome:'Mouse',
    preco: 100,
    teclado:false,
}

preencherDados(computador);
preencherDados(notebook);
preencherDados(mouse);