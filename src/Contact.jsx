import React from "react";
import {useParams,useLocation,useNavigate} from "react-router-dom";



function Contact(){

  const {fname,lname}=useParams();
  const loc=useLocation();
  const his=useNavigate();
 

return(
        
     <>

       <h2>This is Contact us page {fname} {lname}</h2>
       <p>Your location is {loc.pathname}</p>
       {loc.pathname === `/contact/f/j` ? <button onClick={()=> his('/') }>click</button>: null}


 
    </>
        

  )
}

export default Contact;