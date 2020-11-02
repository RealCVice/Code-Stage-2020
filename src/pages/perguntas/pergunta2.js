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
   Sua música é dançante?
    </h3>
    <h4
    style={{
      textAlign:"left",
      fontWeight: 100
     }}
    >
Se sua música faz mexer o esqueleto, então marque Sim para essa pergunta.
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
       <img src="data:image/jpeg;base64,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"
        style={{borderRadius:"10%"}} ></img>
         <div>
         <div style={{fontWeight:"bold"}}>Kesha</div>
         <div>Tik Tok</div>
       </div>

     </div>
     <div
          style={{ width: "25%", backgroundColor:"#1A202C", border: "8px #1A202C solid" , borderRadius:"10%"}}

     >

       <img src="https://stream.demodrop.com/media/cover-cedfa7f65003c02aea74c3d2126b3894.jpg"
        ></img>
        <div>
         <div style={{fontWeight:"bold"}}>Black Eyed Peas</div>
         <div>MAMACITA</div>
       </div>



     </div>
     <div
     style={{ width: "25%", backgroundColor:"#1A202C", border: "8px #1A202C solid" , borderRadius:"10%"}}
     >
       <img src="https://images.genius.com/0e63df61566dcb6503c9f50677776782.768x768x1.jpg"
        ></img>
       <div>
         <div  style={{fontWeight:"bold"}}> WC no Beat</div>
         <div>BALANÇA</div>
       </div>

     </div>
     </div>


     <div
    style={{
      marginTop: 50

    }}
     >
     <Link to="/perguntas/pergunta3"> <button
     style={{
      backgroundColor:"#48bb78",
      position:"relative",
      left:"-150px"
    }}
     >Não</button></Link>

<Link to="/perguntas/pergunta3"> <button
     style={{
      backgroundColor:"#48bb78",
      position:"relative",
      right:"-150px"
    }}
     >Sim</button></Link>


     </div>



  </div>

)
