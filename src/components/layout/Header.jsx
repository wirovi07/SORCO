import React, { useState } from "react";
import "./Header.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="header">
                <div className="header-container">

                    <div className="logo-section">
                        <img
                            src="/images/logo/logo.png"
                            alt="Sociedad Regional de Cirugía Ocular"
                            className="logo-img"
                        />
                        <span className="logo-text">SOCIEDAD REGIONAL DE CIRUGÍA OCULAR</span>
                    </div>

                    <div className="nav-wrapper">

                        {/* NAV DESKTOP → RENOMBRADA */}
                        <nav className="menu-nav">
                            <a href="/">Inicio</a>
                            <a href="/about">Nosotros</a>
                            <a href="/services">Servicios</a>
                            <a href="/team">Equipo Médico</a>
                            <a href="/sedeocana">Sede Ocaña</a>
                        </nav>

                        <button
                            className={`hamburger ${menuOpen ? "active" : ""}`}
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                    </div>
                </div>
            </header>

            {/* MENÚ MÓVIL */}
            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                <a href="/" onClick={() => setMenuOpen(false)}>Inicio</a>
                <a href="/about" onClick={() => setMenuOpen(false)}>Nosotros</a>
                <a href="/services" onClick={() => setMenuOpen(false)}>Servicios</a>
                <a href="/team" onClick={() => setMenuOpen(false)}>Equipo Médico</a>
                <a href="/sedeocana" onClick={() => setMenuOpen(false)}>Sede Ocaña</a>
            </div>
        </>
    );
}
