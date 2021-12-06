//1.IMPORTACIONES
import React from "react";

//2.FUNCIÓN
function Header(props) {
  return (
    <p>
      Soy el Header. Te doy la bienvenida {props.nombre} de {props.ciudad}
    </p>
  );
}

//3.EXPORTACIÓN
//Es lo mismo que module.exports=Header
export default Header;
