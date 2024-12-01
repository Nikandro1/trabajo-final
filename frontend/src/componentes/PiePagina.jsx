import React from "react";
import "../componentes/estilos.css";
export default function PiePagina() {
    return (
        <div>
            <footer className="footer bg-success text-white py-4">
                <div className="container">
                    <div className="row">
                        {/* Sección de Información */}
                        <div className="col-md-6 mb-3">
                            <h5>Acerca del Proyecto</h5>
                            <p>
                                Este proyecto fue desarrollado como parte de la
                                entrega final del curso de full stack de parte
                                de la fundación Cilsa, donde integramos Frontend
                                y Backend para desarrollar una app de listas de
                                tareas
                            </p>
                        </div>
                        <div className="col-md-3 mb-3">
                            <h5>Contacto</h5>
                            <p>
                                Email:{" "}
                                <a
                                    href="mailto:nico_benoit@hotmail.com.ar"
                                    className="text-white"
                                >
                                    nicolas.benoit@example.com
                                </a>
                            </p>
                            <p>
                                <a
                                    href="mailto:nico_benoit@hotmail.com.ar"
                                    className="text-white"
                                >
                                    matiaspremat5@gmail.com
                                </a>
                            </p>
                            <p>
                                <a
                                    href="mailto:nico_benoit@hotmail.com.ar"
                                    className="text-white"
                                >
                                    carlosprimorac@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <p>
                            &copy; 2024 Nicolás Benoit, Matías Premat, Carlos Primorac. Todos los derechos
                            reservados.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
