//Type Assertion

/*
as

Com o Type Assertion é possivel 'indicar' ao TypeScript qual o tipo de dado esperado com a palavra chave as.
Só esse possivel indicar tipos que possuam relação com o tipo original.

Evitar ao máximo o uso de Type Assertion, pois a segurança(Type Safety) é perdida quando indicamos algo que nem sempre será verdade.

*/

//Evitar o uso do as
// const video = document.querySelector('.player') as HTMLVideoElement;

// console.log(video.volume);

// const video = document.querySelector('#video') as HTMLVideoElement

// console.log(video.volume);

//any

/*
Podemos usar o Type Assertion para definir que um tipo any é qualquer tipo de dados possível.
*/

interface Produto {
    nome: string;
    preco: number;
}

async function fetchProduto(){
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    return response.json() as Promise<Produto>;
}

async function handleProduto(){
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

const video1 = document.querySelector('.player') as HTMLVideoElement;
const video2 = <HTMLVideoElement>document.querySelector('video');
const video3 = document.querySelector<HTMLVideoElement>('.player');
const video4 = document.querySelector('.player');

(video4 as HTMLVideoElement).volume;

