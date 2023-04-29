import { Button } from 'bootstrap'
import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { moinsOperation, plusOperation, supprimer } from '../redux/actions/myActions'

const AfficherIntable = () => {
  const affichage = useSelector(state=>state.myproduct)
  console.log(affichage)
  const dispatch = useDispatch(); 
  return (

    <div>
      <Container>
            <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>id</th>
          <th>labell </th>
          <th>qte </th>
          <th> prix </th>
          <th>disponible</th>
          <th>operation</th>
          <th>total </th>
        </tr>
      </thead>
      {
        affichage.map((item)=>{
          return(
        <tbody key={item.id}>
            <tr>
            <td>
                {item.id}
              </td>
              <td>
                {item.labell}
              </td>
              <td>
                {
                  item.qte===item.disponible ?(<p style={{color:'red'}}>{item.qte}</p>):(item.qte)
                }
              </td>
              <td>
                {item.prix}
              </td>
              
              <td>
                {item.disponible}
              </td>
             
             <td>
              <button onClick={()=>{dispatch(plusOperation(item.id))}}  style={{borderRadius:'20px' , backgroundColor:'green' ,marginLeft:'20px'}} >+</button>
              <button onClick={()=>{dispatch(moinsOperation(item.id))}} style={{borderRadius:'20px' ,marginLeft:'20px' , backgroundColor:'brown'}}>-</button>
              <button onClick={()=>{dispatch(supprimer(item.id))}} style={{borderRadius:'20px' , backgroundColor:'red' , marginLeft:'20px' }}>x</button>
             </td>
             <td>
                {item.total}
              </td>
            </tr>
       
      </tbody>
          )
        })
      }
   
    </Table>

      </Container>
    
    </div>
  )
}

export default AfficherIntable