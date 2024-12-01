import React from "react";
import Navegador from "../componentes/Navegador";
import PiePagina from "../componentes/PiePagina";
import "../componentes/estilos.css"
import Contenido from "../componentes/Contenido";

export default function Inicio() {
    return (
        <div className="contenedor">
            <Navegador />
            <Contenido />
            <PiePagina />
        </div>
    );
}
