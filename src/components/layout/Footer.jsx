import React from "react";
import "./Footer.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">

                <div className="row">

                    {/* Dirección */}
                    <div className="col-md-3 col-sm-6 mb-4">
                        <h5 className="footer-title">Dirección</h5>
                        <p><FaMapMarkerAlt className="icon" /> Cl. 17 #5-71<br />Aguachica, Cesar</p>
                    </div>

                    {/* Contacto */}
                    <div className="col-md-3 col-sm-6 mb-4">
                        <h5 className="footer-title">Contacto</h5>
                        <p><FaPhoneAlt className="icon" /> 310 246 06 81</p>
                        <p><FaPhoneAlt className="icon" /> 314 295 63 03</p>

                        <a 
                            href="https://wa.me/573102460681" 
                            className="whatsapp-link" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <FaWhatsapp /> WhatsApp
                        </a>
                    </div>

                    {/* Horarios */}
                    <div className="col-md-3 col-sm-6 mb-4">
                        <h5 className="footer-title">Horarios</h5>
                        <p><FaClock className="icon" /> Lunes a Viernes<br />8:00 AM – 7:00 PM</p>
                        <p><FaClock className="icon" /> Sábados<br />8:00 AM – 1:00 PM</p>
                    </div>

                    {/* Redes + Menú */}
                    <div className="col-md-3 col-sm-6 mb-4">
                        <h5 className="footer-title">Síguenos</h5>

                        <div className="social-links">
                            <a href="https://web.facebook.com/profile.php?id=100069614420577" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF />
                            </a>
                            <a href="https://www.instagram.com/sociedadregionalcirugiaocular/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                        </div>

                        <h5 className="footer-title mt-3">Menú rápido</h5>
                        <ul className="menu-list">
                            <li><a href="/">Inicio</a></li>
                            <li><a href="/services">Servicios</a></li>
                            <li><a href="/about">Nosotros</a></li>
                            <li><a href="/team">Equipo Médico</a></li>
                            <li><a href="/contact">Contacto</a></li>
                        </ul>
                    </div>
                </div>

                {/* MAPA */}
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="map-wrapper shadow">
                            <iframe
                                title="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.4828175294597!2d-73.61049!3d8.30866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e666f0cbe9d0df1%3A0x7c52878b82e63e12!2sCl.%2017%20%235%20-%2071%2C%20Aguachica%2C%20Cesar!5e0!3m2!1ses-419!2sco!4v1700000000000!5m2!1ses-419!2sco"
                                loading="lazy"
                                width="100%"
                                height="250"
                                style={{ border: 0, borderRadius: "12px" }}
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>

                <hr className="mt-4" />
                <p className="text-center copyright">
                    © {new Date().getFullYear()} Sociedad Regional de Cirugía Ocular — SORCO. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}
