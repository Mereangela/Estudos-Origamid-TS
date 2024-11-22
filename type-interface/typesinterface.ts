type NumberOrString = string | number;

let total:NumberOrString = 20;
total: "30";

type Produto =  {
    nome:string;
    preco:number;
    teclado:boolean;
}


function preencherDados(dados:Produto) {
    document.body.innerHTML +=`        <!-- += serve para separar os objetos Computador e Notebook-->
    <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? 'sim.' : 'não.'}</p>
    </div>
    `;
}

const computador: Produto = {
    nome:"Computador",
    preco:2000,
    teclado:true,
};

preencherDados(computador);

preencherDados({
    nome:'Notebook',
    preco:3500,
    teclado: false,
 });

type Categorias = 'design' | 'codigo' | 'descod';

function pintarCategoria (categoria: Categorias){
    if(categoria === 'design')
      console.log('Pintar vermelho')
}

pintarCategoria('design')
