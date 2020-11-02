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
Sua música é instrumental?



    </h3>
    <h4
    style={{
      textAlign:"left",
      fontWeight: 100
     }}
    >
Uma música instrumental é aquela que contém somente instrumentos, e/ou vocais como “Ooh” e “aah”.</h4>
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
       <img src="https://upload.wikimedia.org/wikipedia/en/4/45/Florida_%28album%29_cover.jpg"
        style={{borderRadius:"10%"}} ></img>
         <div>
         <div style={{fontWeight:"bold"}}>Diplo</div>
         <div>Florida</div>
       </div>

     </div>
     <div
          style={{ width: "25%", backgroundColor:"#1A202C", border: "8px #1A202C solid" , borderRadius:"10%"}}

     >

       <img src="https://upload.wikimedia.org/wikipedia/en/8/88/Calvin_Harris_Slow_Acid.jpg"
        ></img>
        <div>
         <div style={{fontWeight:"bold"}}>Calvin Harris</div>
         <div>Slow Acid</div>
       </div>



     </div>
     <div
     style={{ width: "25%", backgroundColor:"#1A202C", border: "8px #1A202C solid" , borderRadius:"10%"}}
     >
       <img src="https://vignette.wikia.nocookie.net/artists-i-follow/images/6/62/Mmxx.jpg/revision/latest?cb=20200925044359"
        ></img>
       <div>
         <div  style={{fontWeight:"bold"}}>Diplo</div>
         <div>MMXX</div>
       </div>

     </div>
     </div>

     <div
    style={{
      marginTop: 50

    }}
     >
     <Link to="/perguntas/pergunta7"> <button
     style={{
      backgroundColor:"#48bb78",
      position:"relative",
      left:"-150px"
    }}
     >Não</button></Link>

<Link to="/perguntas/pergunta7"> <button
     style={{
      backgroundColor:"#48bb78",
      position:"relative",
      right:"-150px"
    }}
     >Sim</button></Link>


     </div>


  </div>

)
