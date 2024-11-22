//OBJETOS

/*
Duck Typing

Um objeto quando passado em uma função, pode conter propriedades e métodos além dos declarados na interface.


*/

interface Produto {
    nome:string;
    quantidade:number;
}

const produto1 = {
    nome:"Notebook",
    quantidade:10,
    cor: "Azul",
};

const produto2 = {
    nome: "Geladeira",
    quantidade:30,
    freezer: true
}

//Eu posso ter propriedades a MAIS, nunca a MENOS.

const servico1 = {
    nome:"Instalação",
};

function mostrarQuantidade(produto: Produto) {
    console.log(produto.quantidade + 20);
}

mostrarQuantidade(produto1);
mostrarQuantidade(produto2);
// mostrarQuantidade(servico1); //Eu posso ter propriedades a MAIS, nunca a MENOS.

/*
Partial

O TypeScript conta com utility types, tipos que podem ser utilizados como funções para a definição de novos tipos.

Com o Partial<Tipo>, podemos indicar que todas as propriedades da interface passada em Tipo, são opcionais.

*/

//Criando uma função com partial:

function mostrarQuantidadePartial(produto: Partial<Produto>) {
    if (produto.quantidade) {
        console.log(produto.quantidade + 20);
    }
}

mostrarQuantidadePartial(produto1);
mostrarQuantidadePartial(produto2);
mostrarQuantidadePartial({});

interface Post {
    titulo: string;
    visualizacoes: number;
    tags: string[];
    [key: string]: unknown;
}

const artigo: Post = {
    titulo: "Como aprender HTML",
    visualizacoes: 3000,
    tags:["HTML", "Front End"],
    autor: "Mary",
};

if(typeof artigo.autor === 'string') {
    artigo.autor.toLowerCase;
}

artigo.descricao;

/*
Record 

Define a interface de um Objeto que possui<chave, tipo>. 
Pode ser usado para definir a interface de um Objeto Literal genérico.

É bem flexivel e evitar o uso.
*/

interface ObjetoLiteral {
    [key: string]: unknown;
}

type ObjetoLiteral2 = Record<string, unknown>;

function mostrarTitulo(obj: ObjetoLiteral) {
    if("titulo" in obj) {
        console.log(obj.titulo);
    }
}

mostrarTitulo ({
    titulo: "HTML e CSS",
})

//ERRO:
// mostrarTitulo(200) // Da erro de execução porque só pode ser chamado como objeto.