import React from "react";

export default function CallToAction() {
    return (
        <section
            className="py-5 text-center text-white"
            style={{
                background: "linear-gradient(90deg, #0074b8, #6bbf3d)",
                position: "relative",
            }}
        >
            {/* Overlay suave para mejorar contraste */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.35)",
                    zIndex: 1,
                }}
            ></div>

            {/* Contenido */}
            <div style={{ position: "relative", zIndex: 2 }}>
                <h2 className="fw-bold mb-3 display-6">
                    Agenda tu cita hoy mismo
                </h2>

                <p className="lead mb-4" style={{ maxWidth: "700px", margin: "0 auto" }}>
                    Nuestro equipo especializado está listo para brindarte la mejor atención en salud visual.
                </p>

                <a
                    href="https://wa.me/573102460681?text=Hola%2C%20deseo%20agendar%20una%20cita%20con%20SORCO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn fw-bold px-4 py-2"
                    style={{
                        backgroundColor: "#0074b8",
                        color: "#fff",
                        borderRadius: "30px",
                        fontSize: "1.1rem",
                        boxShadow: "0 4px 12px rgba(0, 116, 184, 0.4)",
                        transition: "0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                        (e.target.style.backgroundColor = "#005f94")
                    }
                    onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = "#0074b8")
                    }
                >
                    Contactarnos por WhatsApp
                </a>
            </div>
        </section>
    );
}
