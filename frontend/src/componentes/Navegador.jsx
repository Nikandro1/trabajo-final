import React from "react";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import "../componentes/estilos.css";
function Navegador() {
    return (
        <div>
            <Navbar bg="success" data-bs-theme="dark">
                <Container className="d-flex justify-content-right p-2 fs-2">
                    <Navbar.Brand href="/">Lista de tareas</Navbar.Brand>
                </Container>
                <Nav className="me-auto">
                    <Nav.Link href="/">Inicio</Nav.Link>
                    <Nav.Link href="/agregarTarea">Agregar Tarea</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}
export default Navegador;
