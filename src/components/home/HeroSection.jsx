import React, { useState, useEffect } from "react";
import "./HeroSection.css";

export default function HeroSection() {
    const images = [
        "/images/hero/0.jpg",
        "/images/hero/1.jpeg",
    ];

    const [current, setCurrent] = useState(0);

    // Cambiar cada 4 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-section">
            <div
                className="hero-bg"
                style={{
                    backgroundImage: `url(${images[current]})`,
                }}
            ></div>

            <div className="hero-overlay">
                <div className="container text-center text-white">
                    <h1 className="fw-bold">Sociedad Regional de Cirugía Ocular</h1>
                    <p className="lead">Cuidamos tu visión con excelencia y compromiso</p>

                    <a href="/contact" className="btn btn-light px-4 mt-3 fw-bold">
                        Agendar Cita
                    </a>
                </div>
            </div>
        </section>
    );
}
