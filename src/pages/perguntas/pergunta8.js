import React from 'react'
import { Link, Router } from 'components/Router'



export default () => (
  <div
  style={{
    textAlign:"center",
    alignItems:"center",
    position: "relative",
    top: "-150px",
    backgroundColor: "#12161f",
    marginRight:300,
    marginLeft:300,
    borderRadius:10,
    padding:10


  }}
  >

   <Link to="/"> <h1 style={{color: "#48bb78",
    fontSize:40,
    textAlign:"left"


    }}>Hitboard</h1></Link>

   <h2
   style={{
    textAlign:"left"
   }}
   >Descubra qual a probabilidade da sua música atingir os
    <span> Top 50 Global do Spotify!</span> </h2>
    <h3
    style={{
      textAlign:"left"
     }}
    >
Sua música é feliz?




    </h3>
    <h4
    style={{
      textAlign:"left",
      fontWeight: 100
     }}
    >
Se sua música deixa um sorriso no rosto dos seus fãs, então marque Sim aqui.</h4>
     <p
     style={{
      textAlign:"left",

     }}
     >Algumas referências:</p>
     <div className="referencias"
     style={{
  marginTop:50,
  display:"flex",
  justifyContent: "space-between",
  marginLeft:30,
  marginRight:30,





  }}
     >
     <div
     style={{ width: "25%", backgroundColor:"#1A202C", border: "8px #1A202C solid" , borderRadius:"10%"}}
     >
       <img src="https://i.scdn.co/image/ab67616d0000b2734be82ed9d62777104d2b0e1c"
        style={{borderRadius:"10%"}} ></img>
         <div>
         <div style={{fontWeight:"bold"}}>Pabllo Vittar</div>
         <div>Amor de Que</div>
       </div>

     </div>
     <div
          style={{ width: "25%", backgroundColor:"#1A202C", border: "8px #1A202C solid" , borderRadius:"10%"}}

     >

       <img src="https://upload.wikimedia.org/wikipedia/pt/4/48/Capa_de_Lush_Life.png"
        ></img>
        <div>
         <div style={{fontWeight:"bold"}}> Zara Larsson</div>
         <div> Lush Life</div>
       </div>



     </div>
     <div
     style={{ width: "25%", backgroundColor:"#1A202C", border: "8px #1A202C solid" , borderRadius:"10%"}}
     >
       <img src="https://i.pinimg.com/originals/7e/6b/43/7e6b43cbb4aed11c790d9af1bc4d75eb.jpg"
        ></img>
       <div>
         <div  style={{fontWeight:"bold"}}>Enrique Iglesias </div>
         <div>Bailando</div>
       </div>

     </div>
     </div>

     <div
    style={{
      marginTop: 50

    }}
     >
     <Link to="/resultado"> <button
     style={{
      backgroundColor:"#48bb78",
      position:"relative",
      left:"-150px"
    }}
     >Não</button></Link>

<Link to="/resultado"> <button
     style={{
      backgroundColor:"#48bb78",
      position:"relative",
      right:"-150px"
    }}
     >Sim</button></Link>


     </div>


  </div>

)
