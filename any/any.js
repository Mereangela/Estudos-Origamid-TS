"use strict";
//EVITAR AO MÁXIMO O USO DO ANY
//O correto é sempre notar, ou seja, texto:string - informar o tipagem.
//Com any não tem segurança e como se tivesse fora do TypeScript.
//Any pode ser qualquer coisa.
//O uso do Any é tão perigoso e posso QUEBRAR TODA MINHA APLICAÇÃO.
function normalizar(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizar('DeSigN'));
