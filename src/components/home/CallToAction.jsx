import React from "react";

export default function CallToAction() {
    return (
        <section
            className="text-white text-center py-5"
            style={{
                background: "linear-gradient(90deg, #0074b8, #6bbf3d)",
            }}
        >
            <h2 className="fw-bold mb-3">Agenda tu cita hoy mismo</h2>
            <p className="lead">Estamos listos para brindarte atención oftalmológica de calidad</p>

            <a href="/contact" className="btn btn-light px-4 fw-bold mt-2">
                Contactarnos
            </a>
        </section>
    );
}
