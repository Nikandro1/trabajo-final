import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import AgregarTarea from "./pages/AgregarTarea";
import "bootstrap/dist/css/bootstrap.min.css";
import EditarTarea from "./pages/EditarTarea";
import "./componentes/estilos.css"

export default function App() {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/agregarTarea" element={<AgregarTarea />} />
                    <Route path="/editarTarea/:id" element={<EditarTarea />} />
                </Routes>
            </div>
        </Router>
    );
}
