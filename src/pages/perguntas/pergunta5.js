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
  Sua música é acústica?


    </h3>
    <h4
    style={{
      textAlign:"left",
      fontWeight: 100
     }}
    >
Se sua música apresenta características acústicas,
marque Sim para essa pergunta. </h4>
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
       <img src="https://upload.wikimedia.org/wikipedia/pt/c/cf/Capa_de_21_por_Adele.jpg"
        style={{borderRadius:"10%"}} ></img>
         <div>
         <div style={{fontWeight:"bold"}}>Adele</div>
         <div>Someone Like You</div>
       </div>

     </div>
     <div
          style={{ width: "25%", backgroundColor:"#1A202C", border: "8px #1A202C solid" , borderRadius:"10%"}}

     >

       <img src="https://direct.rhapsody.com/imageserver/images/alb.330177968/500x500.jpg"
        ></img>
        <div>
         <div style={{fontWeight:"bold"}}>Natiruts</div>
         <div>Quero ser Feliz Também</div>
       </div>



     </div>
     <div
     style={{ width: "25%", backgroundColor:"#1A202C", border: "8px #1A202C solid" , borderRadius:"10%"}}
     >
       <img src="https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/f/5/8/8/401971419337929.jpg"
        ></img>
       <div>
         <div  style={{fontWeight:"bold"}}>Rael</div>
         <div>Envolvidão</div>
       </div>

     </div>
     </div>

     <div
    style={{
      marginTop: 50

    }}
     >
     <Link to="/perguntas/pergunta6"> <button
     style={{
      backgroundColor:"#48bb78",
      position:"relative",
      left:"-150px"
    }}
     >Não</button></Link>

<Link to="/perguntas/pergunta6"> <button
     style={{
      backgroundColor:"#48bb78",
      position:"relative",
      right:"-150px"
    }}
     >Sim</button></Link>


     </div>


  </div>

)
