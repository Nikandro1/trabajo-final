import React from "react";
import "./formLogin.css";
//import {Usuario} from '../assets/usuario.png'
//import {Contraseña} from '../assets/bloquear.png'

export default function FormLogin() {
  return (
    <div className="container">
      <div className="titulo">
        <h1>Iniciar Sección</h1>
      </div>
      <form action="">
        <div className="inputNombre">
          <input type="email" placeholder="Nombre" />
        </div>
        <div className="inputContraseña">
          <input type="password" placeholder="Contraseña" />
        </div>
        <div className="botones">
          <button className="botonIngreso">Ingresar</button>
          <button className="registrarse">Registrarse</button>
        </div>
      </form>
    </div>
  );
}
