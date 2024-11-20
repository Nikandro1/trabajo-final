import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormLogin from "./components/FormLogin";
import FormRegistro from "./components/FormRegistro";
import TaskList from "./components/TaskList";
import FormTarea from "./components/FormTarea";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
      <Router>
          <Routes>
              {/* Rutas públicas */}
              <Route path="/" element={<FormLogin />} />
              <Route path="/register" element={<FormRegistro />} />
              {/* Rutas protegidas */}
              <Route
                  path="/tasks"
                  element={
                      <ProtectedRoute>
                          <TaskList />
                      </ProtectedRoute>
                  }
              />
              <Route
                  path="/add-task"
                  element={
                      <ProtectedRoute>
                          <FormTarea />
                      </ProtectedRoute>
                  }
              />
          </Routes>
      </Router>
  );
}
