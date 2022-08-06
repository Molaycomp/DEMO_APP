import React from "react";
import Card from "./Card";
import Data from "./Data";

 const Mean=()=>{
    return <Card
    key={Data[1].id}
    name={Data[1].name}
   imgsrc={Data[1].imgsrc}
    Age={Data[1].Age}
 />
}

export default Mean;