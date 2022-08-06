
import React from "react";
import {Routes,Route} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";


function App(){

return(
        
     <>

   <Routes>
    <Route path="/" element={<About/>}/>
    <Route path="/contact/:fname/:lname" element={<Contact/>}/>
   </Routes>
   </>
        

  )
}

export default App;
