import React from "react";

export default function DoctorsPreview() {
    return (
        <section className="py-5" style={{ background: "#f9fafc" }}>
            <div className="container text-center">
                <h2
                    className="mb-4"
                    style={{
                        color: "#0074b8",
                        textAlign: "center",
                        fontSize: "2rem",
                        fontWeight: 800,
                        marginBottom: "30px",
                    }}
                >

                    Nuestro Equipo Médico
                </h2>

                <p className="mx-auto" style={{ maxWidth: "750px" }}>
                    En SORCO contamos con especialistas en oftalmología y cirugía ocular
                    con amplia trayectoria y un compromiso permanente con la salud visual
                    de nuestros pacientes. Nuestro equipo combina experiencia, tecnología
                    avanzada y una atención humana de excelencia.
                </p>

                {/* Botón */}
                <a
                    href="/team"
                    className="btn px-4 py-2 fw-bold mt-4"
                    style={{
                        background: "linear-gradient(90deg, #0074B8, #F47B20)",
                        color: "#fff",
                        borderRadius: "50px",
                        fontSize: "1.05rem",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                    }}
                >
                    Conocer al Equipo Médico
                </a>

            </div>
        </section>
    );
}
