import React from "react";

export default function ServiciosSede() {
    const servicios = [
        "Consulta Oftalmológica",
        "Cirugía Láser",
        "Exámenes Diagnósticos",
        "Optometría",
        "Óptica"
    ];

    return (
        <section className="servicios-sede py-5">
            <div className="container text-center">
                <h2>Nuestros Servicios</h2>

                <div className="row mt-4">
                    {servicios.map((s, i) => (
                        <div key={i} className="col-md-4 mb-3">
                            <div className="servicio-card">
                                {s}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CSS */}
            <style>{`
                .servicios-sede {
                    background: #f8f9fa;
                }
                .servicios-sede h2 {
                    color: #0074b8;
                    font-weight: 700;
                }
                .servicio-card {
                    background: #fff;
                    padding: 20px;
                    border-radius: 12px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
                    font-weight: 600;
                    transition: transform .3s;
                }
                .servicio-card:hover {
                    transform: translateY(-5px);
                }
            `}</style>
        </section>
    );
}
