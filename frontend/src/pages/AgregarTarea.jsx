import React from "react";
import Navegador from "../componentes/Navegador";
import PiePagina from "../componentes/PiePagina";
import "../componentes/estilos.css"
import NuevaTarea from "../componentes/NuevaTarea";


export default function Inicio() {
    return (
        <div className="contenedor">
            <Navegador />
            <NuevaTarea />
            <PiePagina />
        </div>
    );
}