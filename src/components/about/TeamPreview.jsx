import React from "react";

export default function TeamPreview() {
    return (
        <section className="py-5 container">
            <h2 className="text-center mb-4" style={{ color: "#0074b8" }}>
                Nuestro Equipo Médico
            </h2>

            <p className="text-center">
                Profesionales altamente capacitados en cirugía ocular y atención oftalmológica.
            </p>

            <div className="text-center mt-3">
                <a href="/equipo-medico" className="btn btn-primary">
                    Conocer Equipo Completo
                </a>
            </div>
        </section>
    );
}
