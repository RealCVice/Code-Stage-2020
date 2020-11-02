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
   Sua música é enérgica?
    </h3>
    <h4
    style={{
      textAlign:"left",
      fontWeight: 100
     }}
    >
Uma música enérgica é aquela que parece rápida e barulhenta.
 Por exemplo, músicas de death metal tem energia alta, enquanto
 músicas clássicas tem energia baixa.    </h4>
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
       <img src="https://1.bp.blogspot.com/-zdpfmo-1WVI/ToxkRhLs91I/AAAAAAAAHgs/6Z5JukWzr2E/s1600/mzi.eniorupb.600x600-75.jpg"
        style={{borderRadius:"10%"}} ></img>
         <div>
         <div style={{fontWeight:"bold"}}>Foo Fighters</div>
         <div>Walk</div>
       </div>

     </div>
     <div
          style={{ width: "25%", backgroundColor:"#1A202C", border: "8px #1A202C solid" , borderRadius:"10%"}}

     >

       <img src="https://img.discogs.com/iO7t0k2yjoUE7awTmhYuhfQUOUk=/fit-in/600x602/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1130258-1498745163-7130.jpeg.jpg"
        ></img>
        <div>
         <div style={{fontWeight:"bold"}}>Pearl Jam</div>
         <div>Even Flow</div>
       </div>



     </div>
     <div
     style={{ width: "25%", backgroundColor:"#1A202C", border: "8px #1A202C solid" , borderRadius:"10%"}}
     >
       <img src="https://img.discogs.com/70quT7MiDkKfIpubv-YG29Yc_Zw=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-11080305-1509478935-8330.jpeg.jpg"
        ></img>
       <div>
         <div  style={{fontWeight:"bold"}}>Sepultura</div>
         <div>Roots Bloody Roots</div>
       </div>

     </div>
     </div>


     <div
    style={{
      marginTop: 50

    }}
     >
     <Link to="/perguntas/pergunta4"> <button
     style={{
      backgroundColor:"#48bb78",
      position:"relative",
      left:"-150px"
    }}
     >Não</button></Link>

<Link to="/perguntas/pergunta4"> <button
     style={{
      backgroundColor:"#48bb78",
      position:"relative",
      right:"-150px"
    }}
     >Sim</button></Link>


     </div>


  </div>

)
