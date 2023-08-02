import React from 'react';
import ReactDOM from 'react-dom/client';
// import "../src/components/formulario/formulario.css";
import { BrowserRouter } from "react-router-dom";


//! Componentes


import Formulario from "./components/formulario/Formulario"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Formulario/>
  </BrowserRouter>
);
