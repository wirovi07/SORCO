import React from "react";

export default function ServicesPreview() {
    return (
        <section className="py-5">
            <div className="container">
                <h2 className="text-center mb-4" style={{ color: "#0074b8" }}>
                    Nuestros Servicios
                </h2>

                <div className="row text-center">
                    <div className="col-md-4 mb-3">
                        <div className="p-4 shadow rounded">
                            <h5 style={{ color: "#0074b8" }}>Consulta Oftalmológica</h5>
                            <p>Diagnóstico completo con especialistas certificados.</p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="p-4 shadow rounded">
                            <h5 style={{ color: "#f47b20" }}>Cirugía Láser</h5>
                            <p>Procedimientos modernos y seguros para mejorar tu visión.</p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-3">
                        <div className="p-4 shadow rounded">
                            <h5 style={{ color: "#6bbf3d" }}>Exámenes Diagnósticos</h5>
                            <p>Tecnología de punta para análisis oftalmológicos precisos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
