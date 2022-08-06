import React from "react";


function Card(props){
    return(
        <>
             <p>My Name is {props.name} </p>
             <img src={props.imgsrc} alt="image"/>
             <p>My Age is {props.Age} </p>
        </>
    )
}

export default Card;