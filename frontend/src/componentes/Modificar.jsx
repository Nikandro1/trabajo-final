import React, { useState, useEffect } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import "./estilos.css";

export default function Modificar() {

    const API_URL = "https://trabajofinal-brjl.onrender.com"
    const [formData, setFormData] = useState({
        titulo: "",
        descripcion: "",
        fechaLimite: "",
    });

    const navigate = useNavigate();
    const { id } = useParams(); 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const url = id ? `${API_URL}/tarea/${id}` : `${API_URL}/tarea`; 
        const method = id ? "PUT" : "POST"; 

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                alert(id ? "Tarea modificada con éxito" : "Tarea creada con éxito");
                console.log(data);
                navigate("/"); 
            } else {
                alert("Error al enviar la tarea");
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
            alert("Error en la solicitud");
        }
    };
    useEffect(() => {
        if (id) {
            async function cargarTarea() {
                try {
                    const response = await fetch(`${API_URL}/tarea/${id}`);
                    const data = await response.json();
                    setFormData(data); 
                } catch (error) {
                    console.error("Error al cargar la tarea", error);
                }
            }
            cargarTarea();
        }
    }, [id]);

    return (
        <div className="contenido">
            <h2 className="d-flex justify-content-center">{id ? "Editar Tarea" : "Nueva Tarea"}</h2>
            <Form onSubmit={handleSubmit}>
                <FloatingLabel controlId="titulo" label="Título de la tarea" className="mb-3">
                    <Form.Control
                        type="text"
                        name="titulo"
                        value={formData.titulo}
                        onChange={handleChange}
                        required
                    />
                </FloatingLabel>
                <FloatingLabel controlId="descripcion" label="Descripción" className="mb-3">
                    <Form.Control
                        as="textarea"
                        name="descripcion"
                        value={formData.descripcion}
                        onChange={handleChange}
                        required
                    />
                </FloatingLabel>
                <FloatingLabel controlId="fechaLimite" label="Fecha límite" className="mb-3">
                    <Form.Control
                        type="date"
                        name="fechaLimite"
                        value={formData.fechaLimite}
                        onChange={handleChange}
                        required
                    />
                </FloatingLabel>
                <button type="submit" className="botoncito">
                    {id ? "Modificar Tarea" : "Crear Tarea"}
                </button>
            </Form>
        </div>
    );
}