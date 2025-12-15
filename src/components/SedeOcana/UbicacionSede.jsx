import React from "react";

export default function UbicacionSede() {
    return (
        <section className="ubicacion-sede">
            <div className="container">
                <h2 className="ubicacion-title">
                    Nuestra Ubicación – Sede Ocaña
                </h2>

                <p className="ubicacion-text">
                    Visítanos en nuestra sede de Ocaña, un espacio diseñado para
                    brindarte atención oftalmológica con altos estándares de calidad,
                    comodidad y fácil acceso.
                </p>

                <div className="ubicacion-content">
                    {/* Información */}
                    <div className="ubicacion-info">
                        <h4>Dirección</h4>
                        <p>
                            Cra. 12 #9-74 local 214<br />
                            Ocaña, Norte de Santander<br />
                            Colombia
                        </p>

                        <h4>Horario de Atención</h4>
                        <p>
                            Lunes a Viernes: 8:00 a.m. – 6:00 p.m.<br />
                            Sábados: 8:00 a.m. – 1:00 p.m.
                        </p>

                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Cra.+12+%239-74+local+214+Ocaña+Norte+de+Santander"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ubicacion-btn"
                        >
                            Ver en Google Maps
                        </a>
                    </div>

                    {/* Mapa */}
                    <div className="ubicacion-map">
                        <iframe
                            title="Ubicación Sede Ocaña"
                            src="https://www.google.com/maps?q=Cra.%2012%20%239-74%20local%20214%20Ocaña%20Norte%20de%20Santander&output=embed"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>

            {/* CSS */}
            <style>{`
                .ubicacion-sede {
                    padding: 80px 0;
                    background: #f9fbfd;
                }

                .ubicacion-title {
                    text-align: center;
                    font-weight: 800;
                    font-size: 2.2rem;
                    color: #0074b8;
                    margin-bottom: 16px;
                }

                .ubicacion-text {
                    text-align: center;
                    max-width: 720px;
                    margin: 0 auto 50px;
                    color: #555;
                    font-size: 1.05rem;
                }

                .ubicacion-content {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 40px;
                    align-items: center;
                }

                .ubicacion-info h4 {
                    font-weight: 700;
                    margin-bottom: 8px;
                    color: #005a8d;
                }

                .ubicacion-info p {
                    margin-bottom: 20px;
                    color: #555;
                    line-height: 1.6;
                }

                .ubicacion-btn {
                    display: inline-block;
                    padding: 12px 28px;
                    border-radius: 50px;
                    background: linear-gradient(90deg, #0074B8, #F47B20);
                    color: #fff;
                    font-weight: 600;
                    text-decoration: none;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                    transition: transform 0.3s ease;
                }

                .ubicacion-btn:hover {
                    transform: translateY(-2px);
                }

                .ubicacion-map iframe {
                    width: 100%;
                    height: 350px;
                    border: none;
                    border-radius: 16px;
                    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
                }

                /* 📱 Responsive */
                @media (max-width: 768px) {
                    .ubicacion-content {
                        grid-template-columns: 1fr;
                    }

                    .ubicacion-title {
                        font-size: 1.8rem;
                    }

                    .ubicacion-map iframe {
                        height: 280px;
                    }
                }
            `}</style>
        </section>
    );
}
