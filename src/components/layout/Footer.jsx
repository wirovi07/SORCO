// Footer.jsx
import React from "react";
import "./Footer.css";


export default function Footer() {
    return (
        <footer className="bg-dark text-white pt-5 pb-3 mt-5">
            <div className="container">
                <div className="row">
                    {/* Dirección */}
                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold text-uppercase">Dirección</h5>
                        <p>Cl. 17 #5 # 71<br />Aguachica, Cesar</p>
                    </div>


                    {/* Contacto */}
                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold text-uppercase">Contacto</h5>
                        <p>310 246 06 81<br />314 295 63 03</p>
                    </div>


                    {/* Horarios */}
                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold text-uppercase">Horarios de atención</h5>
                        <p>
                            Lunes a Viernes — 8:00 AM a 7:00 PM<br />
                            Sábados — 8:00 AM a 1:00 PM
                        </p>
                    </div>
                </div>


                <hr className="border-secondary" />
                <p className="text-center m-0">
                    © {new Date().getFullYear()} Sociedad Regional de Cirugía Ocular — SORCO
                </p>
            </div>
        </footer>
    );
}