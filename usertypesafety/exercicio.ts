// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.

async function fetchCursos(){
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const json = await response.json();
    handleCursos(json);
}

fetchCursos();

interface Curso {
    nome:string;
    aulas:number;
    gratuito:boolean;
    horas:number;
    idAulas:number[];
    niver:'iniciante' | 'avançado';
    tags:string[];
}


//Type Guard com Type Predicate:
function isCurso(value:unknown): value is Curso {
    if(value && typeof value === 'object' && 'nome' in value && 'horas' in value && 'tags' in value){
        return true;
    } else {
      return false
    }
}

function handleCursos(data:unknown) {
    if(Array.isArray(data)) {
       data.filter(isCurso).forEach(item => {
        document.body.innerHTML += `
        <div>
        <h2>${item.nome}</h2>
        <p>${item.horas}</p>
        <p>${item.tags.join(', ')}</p>
        </div>        
        `;
       });
    }
}