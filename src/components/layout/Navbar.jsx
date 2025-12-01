import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <nav className="nav-container">
            <div className="nav-content">

                {/* LOGO */}
                <Link to="/" className="nav-logo">
                    <img src="/images/logo/logo.png" alt="SORCO" />
                </Link>

                {/* HAMBURGER BUTTON */}
                <button className={`hamburger ${open ? "open" : ""}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* NAV LINKS */}
                <ul className={`nav-links ${open ? "active" : ""}`}>
                    <li><Link to="/" onClick={() => setOpen(false)}>Inicio</Link></li>
                    <li><Link to="/about" onClick={() => setOpen(false)}>Nosotros</Link></li>
                    <li><Link to="/services" onClick={() => setOpen(false)}>Servicios</Link></li>
                    <li><Link to="/team" onClick={() => setOpen(false)}>Equipo Médico</Link></li>
                    <li><Link to="/contact" onClick={() => setOpen(false)}>Contacto</Link></li>
                </ul>

            </div>
        </nav>
    );
}
