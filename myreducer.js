
const initialValue = {
    myproduct:[{labell:'macos' , qte:10 , total:900 ,  prix:9000 , disponible:1 , id:0 }
]
}
const myreducer =(state=initialValue , action)=>{
    switch(action.type){
        case 'Ajoute_Produit' :
            return {...state,myproduct:[...state.myproduct , action.payload]} ; 
        case 'INCREMENT_ID' :
            return {
                ...state,id: state.myproduct.id + 1
              };
        case 'Plus_Operation': 
               const maping = state.myproduct.map((item)=>{
                if(item.id ===parseInt(action.payload)){
                 
                     item.qte = item.qte + 1 
                    return item ; 
                }
                return item ; 
            }) 
            return {...state , myproduct:maping}
        case 'Moins_Operation': 
            const filter=state.myproduct.map((item)=>{
                if(item.id === parseInt(action.payload)){
                    item.qte = item.qte - 1 
                    return item ; 
                }
                return item 
            })
            return {...state , myproduct:filter}
            
        case 'Supprimer' :  
            return {...state , myproduct:[...state.myproduct.filter((item)=>{
                return item.id !== action.payload ; 
            })]}

        default : 
            return state ; 
    }
}
export default myreducer ; 
