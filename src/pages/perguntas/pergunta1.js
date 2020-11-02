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
    Sua música tem conteúdo explícito?
    </h3>
    <h4
    style={{
      textAlign:"left",
      fontWeight: 100
     }}
    >
    Uma música explícita é aquela que contém palavrões, linguagem ofensiva ou tratam de temas adultos (18+).
    </h4>
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
       <img src="https://images-na.ssl-images-amazon.com/images/I/81mhHcdxdUL._AC_SL1200_.jpg"
        style={{borderRadius:"10%"}} ></img>
         <div>
         <div style={{fontWeight:"bold"}}>Beyoncé</div>
         <div>Don’t Hurt Yourself</div>
       </div>

     </div>
     <div
          style={{ width: "25%", backgroundColor:"#1A202C", border: "8px #1A202C solid" , borderRadius:"10%"}}

     >

       <img src="https://i1.sndcdn.com/artworks-000280122629-0y869j-t500x500.jpg"
        ></img>
        <div>
         <div style={{fontWeight:"bold"}}>Justin Timberlake</div>
         <div>Suit and Tie</div>
       </div>



     </div>
     <div
     style={{ width: "25%", backgroundColor:"#1A202C", border: "8px #1A202C solid" , borderRadius:"10%"}}
     >
       <img src="https://i.pinimg.com/originals/31/03/a4/3103a4195056e540077ad845aa2275e3.jpg"
        ></img>
       <div>
         <div  style={{fontWeight:"bold"}}>Matuê</div>
         <div>Kenny G</div>
       </div>

     </div>
     </div>

     <div
    style={{
      marginTop: 50

    }}
     >
     <Link to="/perguntas/pergunta2"> <button
     style={{
      backgroundColor:"#48bb78",
      position:"relative",
      left:"-150px"
    }}
     >Não</button></Link>

<Link to="/perguntas/pergunta2"> <button
     style={{
      backgroundColor:"#48bb78",
      position:"relative",
      right:"-150px"
    }}
     >Sim</button></Link>


     </div>


  </div>

)
