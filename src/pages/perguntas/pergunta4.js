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
  Sua música é um Rap?

    </h3>
    <h4
    style={{
      textAlign:"left",
      fontWeight: 100
     }}
    >
A base desse questionamento vem do quanto uma música apresenta palavras faladas,
 ao invés de cantadas, em sua composição. Se a sua for constituída majoritariamente
  por palavras faladas, então marque Sim para esse ponto.   </h4>
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
       <img src="https://i1.sndcdn.com/artworks-000126378042-i406xr-t500x500.jpg"
        style={{borderRadius:"10%"}} ></img>
         <div>
         <div style={{fontWeight:"bold"}}>Karol Conká</div>
         <div>Tombei</div>
       </div>

     </div>
     <div
          style={{ width: "25%", backgroundColor:"#1A202C", border: "8px #1A202C solid" , borderRadius:"10%"}}

     >

       <img src="https://images.genius.com/fe8926868f5aa4f7908f3bc357158d24.900x900x1.jpg"
        ></img>
        <div>
         <div style={{fontWeight:"bold"}}>Emicida</div>
         <div>Mandume</div>
       </div>



     </div>
     <div
     style={{ width: "25%", backgroundColor:"#1A202C", border: "8px #1A202C solid" , borderRadius:"10%"}}
     >
       <img src="https://www.okayplayer.com/wp-content/uploads/2020/07/Drake-DJ-Khaled-Team-up-For-Two-New-Songs-22Greece22-22Popstar22.png"
        ></img>
       <div>
         <div  style={{fontWeight:"bold"}}>DJ Khaled</div>
         <div>POPSTAR</div>
       </div>

     </div>
     </div>

     <div
    style={{
      marginTop: 50

    }}
     >
     <Link to="/perguntas/pergunta5"> <button
     style={{
      backgroundColor:"#48bb78",
      position:"relative",
      left:"-150px"
    }}
     >Não</button></Link>

<Link to="/perguntas/pergunta5"> <button
     style={{
      backgroundColor:"#48bb78",
      position:"relative",
      right:"-150px"
    }}
     >Sim</button></Link>


     </div>


  </div>

)
