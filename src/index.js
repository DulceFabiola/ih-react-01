// Archivo lider, archivo cabeza
//Webpack y babel convierten codigo moderno a codigo tradicional
import React from "react";
import ReactDOM from "react-dom"; //MAnejo de interfaz
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals"; //performance

//render el Componente App, y els egundo argumento es identificar el componente con id root
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//seccion de performance
reportWebVitals();
