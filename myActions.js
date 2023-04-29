
export const addArticle = (objetAajouter)=>{
    return (
        {
            type:'Ajoute_Produit' , 
            payload:objetAajouter , 
        }
    )
}
export const plusOperation = (idincr)=>{
    return ({
        type:'Plus_Operation' , 
        payload:idincr
    })
}
export const moinsOperation = (iddecr)=>{
    return (

        {
            type:'Moins_Operation', 
            payload:iddecr 
        }
    )
}
export const supprimer =(idfordelete)=>{
    return(
        {
            type:'Supprimer', 
            payload:idfordelete , 
        }
    )
}
export function incrementId() {
    return {
      type: 'INCREMENT_ID'
    };
  }