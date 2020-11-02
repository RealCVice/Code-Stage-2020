import React from 'react'
import { Link, Router } from 'components/Router'
import { GiGlassCelebration } from "react-icons/gi";
import { FaSmileBeam } from "react-icons/fa";




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

    <h4
    style={{
      textAlign:"left",
      fontWeight: 100
     }}
    >
    A probabilidade da sua música entrar nos <span>Top 50 Global do Spotify</span> é de...
    </h4>
     <p
     style={{
      textAlign:"center",
      margin:0,
      marginTop: 60,
      marginBottom: 50,
      color: "#48bb78",
      fontSize:70,
      fontFamily:"bolder"

     }}
     >70%
     <GiGlassCelebration style={{color:"white"}}/>
     <FaSmileBeam style={{color:"white"}}/>
     </p>
    <div>
    Parabéns! Sua música tem grandes chances de ser um hit!
    </div>
    <br></br>
    <hr style={{border:"0.1px solid #1A202C", marginLeft: 10, marginRight: 10}}></hr>
    <div style={{marginTop:20}}>
    Gostou do <span>Hitboard</span> ?
    </div>

     <div
    style={{
      marginTop: 50

    }}
     >


<Link to="/"> <button
     style={{
      backgroundColor:"#48bb78",
      padding:0,
      position:"relative",

      fontSize:15

    }}
     >Começar de novo</button></Link>


     </div>


  </div>

)
