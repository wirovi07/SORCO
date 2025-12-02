import React from "react";
import "./AboutPreview.css";

export default function AboutPreview() {
    return (
        <section className="about-preview py-5">
            <div className="container">
                <div className="row align-items-center">

                    {/* Imagen */}
                    <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center">
                        <div className="about-img-wrapper shadow-lg">
                            <img
                                src="/images/facilities/cristian.jpeg"
                                alt="Instalaciones SORCO"
                                className="img-fluid about-img"
                            />
                        </div>
                    </div>

                    {/* Texto */}
                    <div className="col-md-6 text-content">
                        <h2 className="section-title">Sobre Nosotros</h2>
                        <div className="divider"></div>

                        <p className="lead mt-3">
                            En la Sociedad Regional de Cirugía Ocular — SORCO, contamos con
                            más de <strong>20 años de experiencia</strong> cuidando la salud visual
                            de nuestros pacientes mediante tecnología avanzada y un equipo
                            médico altamente especializado.
                        </p>

                        <p className="mt-3">
                            Nuestro compromiso es brindar un servicio seguro, humano y ético,
                            garantizando diagnósticos precisos y tratamientos oportunos.
                        </p>

                        <a href="/about" className="btn about-btn px-4 mt-4 fw-bold">
                            Conocer Más
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
