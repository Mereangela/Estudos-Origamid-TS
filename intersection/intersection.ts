/*
Intersection

Funciona em parte como o extends para interfaces, mas pode ser utilizado em Types.

É quando eu tenho um tipo e quero estender ele.

*/

type Produto = {
    preco:number;
};

type Carro = {
    rodas: number;
    portas:number;
};

type Livro = {
    paginas: number;
}

//Se colocar o ou | vai dar erro, porque ele vai entender que é Carro ou Produto e neste caso, tem que usar & para dizer E. Os dados serão do Carro e do Produto.
function handleProdutoCarro(dados: Carro & Produto) {
    dados.rodas;
    dados.portas;
    dados.preco;
}

handleProdutoCarro({rodas:4, portas:5, preco:300000});

//Em type eu não posso criar o mesmo mesmo tipo com o mesmo nome, ex: TipoCarro 2x e difere da interface.
type TipoCarro = {
    rodas:number;
    portas:number;
}

type TipoCarroComPreco = TipoCarro & {
    preco: number;
}

//Em interface eu só consigo acrescentar as propriedadades se o tipo for iguais.
interface InterfaceCarro {
    rodas: number;
    portas:number;
}

interface InterfaceCarro {
    preco:number;
}

function handleInterfaceCarro(carro:InterfaceCarro){}
 
//Aqui ele entende que userId não existe em window, mas no JS funciona e tem acesso ao valor.
// window.userId = 200;

//Expandindo o window e inserindo o userId como propriedade e desta forma ele existirá no window e não escreveu por cima de window e continuará tendo as outras propriedades.
//Se colocar window. (você vai observar que todas as propriedades estão ativas).

interface Window {
    userId: number;
}

window.userId = 200;
