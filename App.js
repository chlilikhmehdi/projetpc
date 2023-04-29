import React from 'react'
import { useSelector } from 'react-redux'
import AfficherIntable from './components/AfficherIntable'
import Ajourerr from './components/AjouterWithFormulaire'


const App = () => {

  return (
    <div>
      <h1>hello</h1>
      <Ajourerr/>
      <AfficherIntable/>
    </div>
  )
}

export default App