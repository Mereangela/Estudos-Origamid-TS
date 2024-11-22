export default function stringToDate(texto:string): Date {
    const [data, tempo] = texto.split(' ');
    // "Paulo"
    // "www.youtube.com.br".split('.');
    // Ira retornar um array com todos valores separados entre os pontos
    // Ex: ["www" (Indice 0), "youtube" (Indice 1), "com" (Indice 2), "br" (Indice 3)]
    // Os pontos não serão adicionados ao array pois os mesmos foram utilizados com um "argumento" para dividir o texto todo em intervalos
    //
    // Quando for utilizado o split(''); (Sem nenhum caractere)
    // Será criado um array com todos os caracteres do texto cujo foi utilizado no split
    // Ex: "Origamid".split('');
    // ["O", "r", "i", "g", "a", "m", "i", "d"]
    const [dia, mes, ano] = data.split('/').map(Number);
    const [hora, minuto] = tempo.split(':').map(Number);
    return new Date(ano, mes -1, dia, hora, minuto);
}