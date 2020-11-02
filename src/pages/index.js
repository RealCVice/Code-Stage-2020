import React from 'react'
import "../styles/index.css"
import { Link, Router } from 'components/Router'



export default () => (
  <div style={{
    textAlign: 'center' ,



  }}  >
    <h1>Hitboard</h1>
    <h2>Descubra qual a probabilidade da sua música atingir os <br/>
    <span>Top 50 Global do Spotify!</span> </h2>
<Link to="/perguntas/pergunta1"> <button

>Começar</button></Link>

  </div>
)
