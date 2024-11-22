"use strict";
//OBJETOS
const produto1 = {
    nome: "Notebook",
    quantidade: 10,
    cor: "Azul",
};
const produto2 = {
    nome: "Geladeira",
    quantidade: 30,
    freezer: true
};
//Eu posso ter propriedades a MAIS, nunca a MENOS.
const servico1 = {
    nome: "Instalação",
};
function mostrarQuantidade(produto) {
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
function mostrarQuantidadePartial(produto) {
    if (produto.quantidade) {
        console.log(produto.quantidade + 20);
    }
}
mostrarQuantidadePartial(produto1);
mostrarQuantidadePartial(produto2);
mostrarQuantidadePartial({});
const artigo = {
    titulo: "Como aprender HTML",
    visualizacoes: 3000,
    tags: ["HTML", "Front End"],
    autor: "Mary",
};
if (typeof artigo.autor === 'string') {
    artigo.autor.toLowerCase;
}
artigo.descricao;
function mostrarTitulo(obj) {
    if ("titulo" in obj) {
        console.log(obj.titulo);
    }
}
mostrarTitulo({
    titulo: "HTML e CSS",
});
//ERRO:
// mostrarTitulo(200) // Da erro de execução porque só pode ser chamado como objeto.
