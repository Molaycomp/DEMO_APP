import React from "react";
import { useContext, useLocation} from "react";
import {FirstName,LastName} from "./App";


const CompC=()=>{

const fname=useContext(FirstName);
const lname=useContext(LastName);  
const location=useLocation();
    return(
        <>

        <h2> My name is {fname} {lname}</h2>
        <p>{location.pathname}</p>
      
         
        </>
    )
}

export default CompC;