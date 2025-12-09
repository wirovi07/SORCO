import React from "react";
import nosotrosImg from "/images/about/Paba.png"; // Ajusta la ruta si es necesario

export default function AboutHero() {
    return (
        <section
            className="py-5"
            style={{
                background: "#ffffff",
            }}
        >
            <div className="container">
                <div className="row align-items-center">

                    {/* TEXTO - Centrado */}
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0 d-flex flex-column justify-content-center">
                        <div className="text-center">
                            <h1
                                className="text-center mb-2"
                                style={{
                                    color: "#0074b8",
                                    fontSize: "2rem",
                                    fontWeight: "800",
                                }}
                            >
                                Sobre Nosotros
                            </h1>

                            <p
                                className="mt-3 mx-auto"
                                style={{
                                    maxWidth: "680px",     // limita la línea para mejor legibilidad
                                    fontSize: "1.05rem",
                                    color: "#333",
                                }}
                            >
                                Somos una institución con amplia trayectoria en la atención y cirugía ocular,
                                comprometida con el bienestar visual de nuestros pacientes. Nuestro equipo está
                                conformado por profesionales altamente calificados que garantizan un servicio
                                humanizado, seguro y eficiente.
                            </p>
                        </div>
                    </div>

                    {/* IMAGEN - Centrada y responsive */}
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                        <div
                            style={{
                                width: "100%",
                                maxWidth: "360px",       // tamaño máximo en pantallas grandes
                                aspectRatio: "1 / 1",    // mantiene el contenedor cuadrado
                                borderRadius: "50%",
                                overflow: "hidden",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                background: "transparent",
                                boxShadow: "0 6px 20px rgba(0,0,0,0.06)", // sombra sutil
                                padding: "6px",
                            }}
                        >
                            <img
                                src={nosotrosImg}
                                alt="Equipo SORCO"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    display: "block",
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
