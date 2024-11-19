import React, { useEffect, useState } from "react";

export default function BarraInicio() {
    /*CARGAR EL FETCH
    useEffect(() => {
        const [nombre, setNombre] = useState("");
        const data = fetch("http:localhost/:id/tareas");
        return () => {
            setNombre(data.nombre);
        };
    }, [nombre]);*/

    return (
        <>
            <div className="">
                <h1>LISTA DE TAREAS</h1>
                <p>Bienvenido!</p>
            </div>
            /*Mostrar todas las tareas del usuario */
        </>
    );
}
