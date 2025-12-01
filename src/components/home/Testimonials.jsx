import React from "react";

export default function Testimonials() {
    return (
        <section className="py-5">
            <div className="container">
                <h2 className="text-center mb-4" style={{ color: "#0074b8" }}>
                    Testimonios
                </h2>

                <div className="row justify-content-center text-center">
                    <div className="col-md-8">
                        <blockquote className="p-4 shadow rounded" style={{ borderLeft: "5px solid #f47b20" }}>
                            <p>"Excelente atención y gran profesionalismo. Mi visión mejoró por completo."</p>
                            <strong style={{ color: "#6bbf3d" }}>— Paciente SORCO</strong>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
}
