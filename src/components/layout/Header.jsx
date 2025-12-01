import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <div className="header-container">

                {/* LOGO */}
                <div className="logo-section">
                    <img
                        src="/images/logo/logo.png"
                        alt="Sociedad Regional de Cirugía Ocular"
                        className="logo-img"
                    />
                    <span className="logo-text">SOCIEDAD REGIONAL DE CIRUGÍA OCULAR</span>
                </div>

                {/* NAVBAR */}
                <nav className="nav">
                    <a href="/">Inicio</a>
                    <a href="/about">Nosotros</a>
                    <a href="/services">Servicios</a>
                    <a href="/team">Equipo Médico</a>
                    <a href="/contact">Contacto</a>
                </nav>

            </div>
        </header>
    );
}
