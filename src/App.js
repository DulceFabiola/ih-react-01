//COMPONENTES
//1/ IMPORTACIONES
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
//cuando imnportas una carpeta siempre busca el archivo index. Ya no es necesario incluir el index.js
import Main from "./components/Main";

//2.FUNCIÓN
//Funcion declarativa
function App() {
  //MANEJO DE VARIABLES Y OTRAS FUNCIONES
  const bootcamp = "Ironhack";
  //Este formato no es HTML completamente, si no tambien involucra JS al simultaneo
  //HTML+JS=JSX
  //Para insertar JS hay que usar llaves {}
  //Utilizar etiqueta de apertura y etiquetas de cierre
  return (
    <div className="App">
      <p>Hola Mundo</p>
      <p>dulceFa</p>
      <p>{6 + 6}</p>
      <p>{12 * 12}</p>
      <p>{bootcamp}</p>
      {/* props:Pasar info entre componentes  */}
      <Header nombre="Mike" ciudad="Veracruz" />
      <Header nombre="Sam" ciudad="EdoMex" />
      <Header nombre="Konin" ciudad="Hidalgo" />
      <hr />

      <Main />
      <hr />
      <Footer nombre="Bruno" email="hola@hola.com" apellido="Díaz" />
    </div>
  );
}

//3.EXPORTACIÓN
export default App;
