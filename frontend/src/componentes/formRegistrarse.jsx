import React from "react";
import "./formLogin.css";
//import {Usuario} from '../assets/usuario.png'
//import {Contraseña} from '../assets/bloquear.png'

export default function FormRegistro() {
  return (
    <div className="container">
      <div className="titulo">
        <h1>Registrarse</h1>
      </div>
      <form action="">
        <div className="inputNombre">
          <input type="email" placeholder="Nombre" required="true"/>
        </div>
        <div className="inputContraseña">
          <input type="password" placeholder="Contraseña" required="true"/>
        </div>
        <div className="botones">
          <button className="registrarse">Registrarse</button>
        </div>
      </form>
    </div>
  );
}
