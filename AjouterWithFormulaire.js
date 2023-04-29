import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addArticle, incrementId } from '../redux/actions/myActions';

const Ajourerr = () => {
    const [labell , setlibelle]=useState(); 
    const [qte , SetQte]=useState(); 
    const [prix , SetPrix]=useState(); 
    const [id , setId]=useState(); 
    const [disponible , setDisponible]=useState(); 
    const [total  , setTotal]=useState(); 
    useEffect(() => {
      setTotal(qte*prix)
    }, [qte , prix])
    
    const dispatch = useDispatch(); 
    const ajouter =()=>{
        dispatch(addArticle({labell:labell , total:total , qte:qte , prix:prix , id:id , disponible:disponible  }))
        dispatch(incrementId())
    }
  return (
    <div>
        <input type={'text'}   onChange={(e)=>{setlibelle(e.target.value)}} placeholder='labell' /><br></br>
        <input type={'number'}  onChange={(e)=>{SetQte(e.target.value)}} placeholder='qte' /><br></br>
        <input type={'number'} onChange={(e)=>{SetPrix(e.target.value)}} placeholder='prix' /><br></br>
        <input type={'number'} onChange={(e)=>{setId(e.target.value)}} placeholder='id' /><br></br>
        <input type={'number'} onChange={(e)=>{setDisponible(e.target.value)}} placeholder='disponible' /><br></br>
        
        <button onClick={ajouter} >Primary</button>
    </div>
  )
}

export default Ajourerr