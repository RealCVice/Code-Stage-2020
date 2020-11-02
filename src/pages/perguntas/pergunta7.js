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
Sua música foi gravada com plateia?




    </h3>
    <h4
    style={{
      textAlign:"left",
      fontWeight: 100
     }}
    >
	Se é possível ouvir plateia na sua gravação, marque Sim para essa pergunta.
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
       <img src="https://upload.wikimedia.org/wikipedia/pt/thumb/b/bb/Shakira_-_Hips_Don%27t_Lie.jpg/220px-Shakira_-_Hips_Don%27t_Lie.jpg"
        style={{borderRadius:"10%"}} ></img>
         <div>
         <div style={{fontWeight:"bold"}}>Shakira</div>
         <div>Hips Don’t Lie</div>
       </div>

     </div>
     <div
          style={{ width: "25%", backgroundColor:"#1A202C", border: "8px #1A202C solid" , borderRadius:"10%"}}

     >

       <img src="https://upload.wikimedia.org/wikipedia/pt/b/b9/Alicia_Keys_-_Empire_State_of_Mind.jpg"
        ></img>
        <div>
         <div style={{fontWeight:"bold"}}>Alicia Keys </div>
         <div>Empire State of Mind</div>
       </div>



     </div>
     <div
     style={{ width: "25%", backgroundColor:"#1A202C", border: "8px #1A202C solid" , borderRadius:"10%"}}
     >
       <img src="https://images.genius.com/1b82df253f13fdaf8ccf8dd797734d09.640x640x1.jpg"
        ></img>
       <div>
         <div  style={{fontWeight:"bold"}}>Turma do Pagode</div>
         <div>Lancinho</div>
       </div>

     </div>
     </div>

     <div
    style={{
      marginTop: 50

    }}
     >
     <Link to="/perguntas/pergunta8"> <button
     style={{
      backgroundColor:"#48bb78",
      position:"relative",
      left:"-150px"
    }}
     >Não</button></Link>

<Link to="/perguntas/pergunta8"> <button
     style={{
      backgroundColor:"#48bb78",
      position:"relative",
      right:"-150px"
    }}
     >Sim</button></Link>


     </div>


  </div>

)
