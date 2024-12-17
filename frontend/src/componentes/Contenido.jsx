import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavLink from "react-bootstrap/esm/NavLink";
import "./estilos.css";
export default function Contenido() {
    const [tareas, setTareas] = useState([]);
    const navigate = useNavigate();
    const API_URL = "https://trabajofinal-brjl.onrender.com/"


    /*METODO PARA MODIFICAR TAREA CON EL BOTON*/
    const HandleClickUpdate = (id) => {
        navigate(`/editarTarea/${id}`);
    };
    /*METODO PARA BORRAR TAREA CON EL BOTON*/
    const HandleDelete = async (id) => {
        try {
            const response = await fetch(`${API_URL}/tarea/${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                alert("Tarea eliminada correctamente");
                cargarTareas()
            } else {
                alert("Error al eliminar la tarea");
            }
        } catch (error) {
            console.error("Error al eliminar tarea:", error);
            alert("Hubo un problema al eliminar la tarea");
        }
    };

    async function cargarTareas() {
        try {
            const response = await fetch(`${API_URL}/tarea/`);
            const data = await response.json();
            setTareas(data);
        } catch (error) {
            console.error("Error al cargar tareas", e);
        }
    }
    useEffect(() => {
        cargarTareas();
    }, [location.state?.refetch]);
    return (
        <div className="contenido">
            <h2 className="d-flex justify-content-center">Tareas</h2>
            <ul>
                {tareas.length === 0 ? (
                    <p>No hay tareas disponibles</p>
                ) : (
                    tareas.map((tarea, index) => (
                        <li key={index}>
                            <h3>{tarea.titulo}</h3>
                            <p className="descTarea">{tarea.descripcion}</p>
                            <p>
                                {" "}
                                <strong>Finalizar tarea antes del:</strong>
                                {new Date(
                                    tarea.fechaLimite
                                ).toLocaleDateString()}
                            </p>
                            <div className="botones">
                                {/*agregar on click*/}
                                <button
                                    onClick={() => HandleClickUpdate(tarea._id)}
                                    className="botoncito"
                                >
                                    Editar Tarea
                                </button>
                                <button
                                    onClick={() => HandleDelete(tarea._id)}
                                    className="botoncito"
                                >
                                    Eliminar Tarea
                                </button>
                            </div>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}
