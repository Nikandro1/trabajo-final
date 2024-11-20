const API_URL = "http://localhost:3000"; // URL del backend

export const loginUser = async (email, password) => {
    //agregar controler
    const response = await fetch(`${API_URL}/usuario/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });
    if (!response.ok) throw new Error("Error al iniciar sesión");
    return await response.json();
};

export const registerUser = async (data) => {
    const response = await fetch(`${API_URL}/usuario`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Error al registrarse");
    return await response.json();
};

export const createTask = async (taskData, userId) => {
    const response = await fetch(`http://localhost:4000/usuario/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(taskData),
    });
    if (!response.ok) throw new Error("Error al crear tarea");
    return await response.json();
};