import React from "react";

export default function MissionVision() {
    return (
        <section
            className="py-5"
            style={{
                background: "#f1f7fc",
            }}
        >
            <div className="container">

                <h2
                    className="text-center mb-5"
                    style={{
                        color: "#0074b8",
                        fontSize: "2rem",
                        fontWeight: "800",
                    }}
                >
                    Misión, Visión y Principios
                </h2>

                <div className="row g-4">

                    {/* Misión */}
                    <div className="col-md-4">
                        <div
                            className="p-4 h-100 shadow rounded text-center"
                            style={{
                                background: "#ffffff",
                                borderTop: "5px solid #0074b8",
                            }}
                        >
                            <h3
                                className="mb-3"
                                style={{ color: "#0074b8", fontWeight: "700" }}
                            >
                                Misión
                            </h3>
                            <p>
                                <em>LA SOCIEDAD REGIONAL DE CIRUGIA OCULAR S.A.S presta servicios integrales
                                de salud visual, garantizando elevados estándares de calidad por medio
                                de personal competente, equipos de alta tecnología, un ambiente seguro
                                y un trato humanizado para los usuarios del sur del Cesar, Magdalena,
                                Bolívar y zonas de influencia.</em> 
                            </p>
                        </div>
                    </div>

                    {/* Visión */}
                    <div className="col-md-4">
                        <div
                            className="p-4 h-100 shadow rounded text-center"
                            style={{
                                background: "#ffffff",
                                borderTop: "5px solid #6bbf3d",
                            }}
                        >
                            <h3
                                className="mb-3"
                                style={{ color: "#6bbf3d", fontWeight: "700" }}
                            >
                                Visión
                            </h3>
                            <p>
                                <em>LA SOCIEDAD REGIONAL DE CIRUGIA OCULAR S.A.S logrará un reconocimiento
                                nacional por sus servicios integrales de salud visual con altos estándares
                                de calidad, garantizando sostenibilidad empresarial mediante el compromiso
                                con la satisfacción de los usuarios y el uso eficiente de los recursos.</em> 
                            </p>
                        </div>
                    </div>

                    {/* Principios */}
                    <div className="col-md-4">
                        <div
                            className="p-4 h-100 shadow rounded text-center"
                            style={{
                                background: "#ffffff",
                                borderTop: "5px solid #f47b20",
                            }}
                        >
                            <h3
                                className="mb-3"
                                style={{ color: "#f47b20", fontWeight: "700" }}
                            >
                                Principios
                            </h3>

                            <ul
                                style={{
                                    listStyle: "none",
                                    padding: 0,
                                    margin: 0,
                                    lineHeight: "1.8",
                                }}
                            >
                                <li><em>Flexibilidad al cambio</em></li>
                                <li><em>Trabajo en equipo</em></li>
                                <li><em>Liderazgo</em></li>
                                <li><em>Responsabilidad</em></li>
                                <li><em>Cultura de excelencia</em></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
