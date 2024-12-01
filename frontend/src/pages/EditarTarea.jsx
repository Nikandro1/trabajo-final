import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navegador from "../componentes/Navegador";
import Modificar from "../componentes/Modificar";
import PiePagina from "../componentes/PiePagina";
export default function EditarTarea() {
    return (
        <>
            <Navegador />
            <Modificar />
            <PiePagina />
        </>
    );
}
