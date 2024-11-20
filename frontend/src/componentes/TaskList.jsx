import React, { useState, useEffect } from "react";
import {
    getTareasByUsuarioId,
    addTareaToUsuario,
} from "../services/taskService";
import { useNavigate } from "react-router-dom";

export default function TaskList() {
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState({
        titulo: "",
        descripcion: "",
        fechaLimite: "",
    });
    const navigate = useNavigate();

    const usuario = JSON.parse(localStorage.getItem("user")); // Obtener datos del usuario logueado
    const userId = usuario ? usuario._id : null;

    useEffect(() => {
        if (!userId) {
            navigate("/"); // Redirige al login si no hay usuario
            return;
        }
        cargarTareas();
    }, [userId]);

    const cargarTareas = async () => {
        try {
            const response = await getTareasByUsuarioId(userId);
            setTareas(response);
        } catch (err) {
            console.error("Error al cargar tareas:", err);
        }
    };

    const handleChange = (e) => {
        setNuevaTarea({ ...nuevaTarea, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addTareaToUsuario(userId, nuevaTarea);
            setNuevaTarea({ titulo: "", descripcion: "", fechaLimite: "" }); // Limpia el formulario
            cargarTareas(); // Recarga la lista de tareas
        } catch (err) {
            console.error("Error al agregar tarea:", err);
        }
    };

    return (
        <div className="task-list-container">
            <h1>Mis Tareas</h1>
            <ul>
                {tareas.map((tarea) => (
                    <li key={tarea._id}>
                        <h3>{tarea.titulo}</h3>
                        <p>{tarea.descripcion}</p>
                        <p>
                            <strong>Fecha límite:</strong>{" "}
                            {new Date(tarea.fechaLimite).toLocaleDateString()}
                        </p>
                    </li>
                ))}
            </ul>

            <h2>Agregar nueva tarea</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="titulo"
                    placeholder="Título"
                    value={nuevaTarea.titulo}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="descripcion"
                    placeholder="Descripción"
                    value={nuevaTarea.descripcion}
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    name="fechaLimite"
                    value={nuevaTarea.fechaLimite}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Añadir Tarea</button>
            </form>
        </div>
    );
}
