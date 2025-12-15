import React from "react";
import sedeImg from "/images/sede/ocanalugar.jpg"; // ajusta la ruta a tu imagen real

export default function InfoSede() {
    return (
        <section className="info-sede">
            <div className="info-container">
                
                {/* Texto */}
                <div className="info-text">
                    <span className="info-badge">Sede Ocaña</span>

                    <h2>
                        Instalaciones diseñadas para el <br />
                        cuidado integral de tu visión
                    </h2>

                    <p>
                        Nuestra sede en Ocaña cuenta con espacios modernos, personal
                        altamente calificado y equipos de última tecnología para el
                        diagnóstico y tratamiento de enfermedades oculares.
                    </p>

                    <ul>
                        <li>Consultorios especializados</li>
                        <li>Equipos de diagnóstico avanzados</li>
                        <li>Atención humana y personalizada</li>
                        <li>Ambientes cómodos y seguros</li>
                    </ul>
                </div>

                {/* Imagen */}
                <div className="info-image">
                    <img src={sedeImg} alt="Instalaciones Sede Ocaña" />
                </div>
            </div>

            {/* CSS */}
            <style>{`
                .info-sede {
                    padding: 90px 0;
                    background: #ffffff;
                }

                .info-container {
                    max-width: 1200px;
                    margin: auto;
                    padding: 0 20px;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    align-items: center;
                }

                /* TEXTO */
                .info-badge {
                    display: inline-block;
                    background: rgba(0, 116, 184, 0.1);
                    color: #0074b8;
                    padding: 6px 16px;
                    border-radius: 50px;
                    font-weight: 600;
                    font-size: 0.9rem;
                    margin-bottom: 16px;
                }

                .info-text h2 {
                    font-size: 2.4rem;
                    font-weight: 800;
                    color: #0a2540;
                    margin-bottom: 20px;
                    line-height: 1.2;
                }

                .info-text p {
                    font-size: 1.05rem;
                    color: #555;
                    line-height: 1.7;
                    margin-bottom: 24px;
                }

                .info-text ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .info-text li {
                    position: relative;
                    padding-left: 30px;
                    margin-bottom: 14px;
                    font-weight: 500;
                    color: #333;
                }

                .info-text li::before {
                    content: "✔";
                    position: absolute;
                    left: 0;
                    color: #0074b8;
                    font-weight: bold;
                }

                /* IMAGEN */
                .info-image {
                    position: relative;
                }

                .info-image img {
                    width: 100%;
                    height: 420px;
                    object-fit: cover;
                    border-radius: 40px 10px 40px 10px;
                    box-shadow: 0 25px 60px rgba(0,0,0,0.15);
                }

                /* RESPONSIVE */
                @media (max-width: 900px) {
                    .info-container {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }

                    .info-text h2 {
                        font-size: 2rem;
                    }

                    .info-image img {
                        height: 300px;
                        border-radius: 24px;
                    }
                }
            `}</style>
        </section>
    );
}
