import { Produto } from "../types/global";

declare global {
    interface Usuario {
        nome: String;
        id:number;
    }
}

export const livro: Produto = {
    nome: "O Senhor dos Anéis",
    preco: 200,
};