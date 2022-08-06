import React from "react";
import { useContext } from "react";
import {FirstName,LastName} from "./App";


const CompC=()=>{

const fname=useContext(FirstName);
const lname=useContext(LastName);  
    return(
        <>

        <h2> My name is {fname} {lname}</h2>
      
         
        </>
    )
}

export default CompC;