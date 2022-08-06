import React from "react";
import ReactDOm from "react-dom";
import App from "./App";
import './index.css';
import {BrowserRouter} from 'react-router-dom';

ReactDOm.render(
  <>
  <BrowserRouter>
   <App/>
  </BrowserRouter>
  
</>
,
document.getElementById("root")
)





