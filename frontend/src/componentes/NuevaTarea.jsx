import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

export default function NuevaTarea() {

    const API_URL = "https://trabajofinal-brjl.onrender.com"

    const [formData, setFormData] = useState({
        titulo: "",
        descripcion: "",
        fechaLimite: "",
    });
    const navigate = useNavigate();

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evitar recarga de la página

        try {
            const response = await fetch(`${API_URL}/tarea`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                alert("Tarea creada con éxito");
                console.log(data);
                navigate("/", { state: { refetch: true } });
            } else {
                alert("Error al crear la tarea");
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            alert("Error en la solicitud");
        }
    };

    return (
        <div className="contenido">
            <p>Agregar nueva tarea</p>
            <form onSubmit={handleSubmit}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Titulo"
                    className="mb-3"
                >
                    <Form.Control
                        type="text"
                        placeholder="Titulo de su tarea"
                        name="titulo"
                        value={formData.titulo}
                        onChange={handleChange}
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingPassword"
                    label="Descripción"
                >
                    <Form.Control
                        type="text"
                        placeholder="Descripción"
                        className="mb-3"
                        name="descripcion"
                        value={formData.descripcion}
                        onChange={handleChange}
                    />
                </FloatingLabel>
                <FloatingLabel
                    controlId="floatingPassword"
                    label="Fecha Limite"
                    className="mb-3"
                >
                    <Form.Control
                        type="date"
                        placeholder="Fecha Limite"
                        name="fechaLimite"
                        value={formData.fechaLimite}
                        onChange={handleChange}
                    />
                </FloatingLabel>
                <button type="submit">Agregar</button>
            </form>
        </div>
    );
}
