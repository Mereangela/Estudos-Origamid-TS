export default async function fetchData<Tipo>(url:string): Promise<Tipo | null> {
    try{
      const response =  await fetch(url);
      if(!response.ok) throw new Error("Erro: " + response.status);
      const json = await response.json();
      return json;      
    } catch (error){
      if( error instanceof Error) console.error("fetchData: " + error.message)
      return null;
    }
}