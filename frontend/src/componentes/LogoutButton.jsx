import React from "react";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/"); // Redirige al login
    };

    return <button onClick={handleLogout}>Cerrar Sesión</button>;
}
