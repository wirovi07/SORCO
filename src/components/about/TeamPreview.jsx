import React from "react";
import { Link } from "react-router-dom"; // Solo si usas React Router

// Puedes sustituir estas imágenes por las reales de tu equipo
import doctor1 from "/images/team/doctor1.jpg";
import doctor2 from "/images/team/doctor3.jpg";
import doctor3 from "/images/team/doctor2.jpg";

export default function TeamPreview() {
    const doctors = [
        {
            name: "Dr. Esteban Julio Paba Rubio",
            specialty: "Oftalmólogo",
            img: doctor1
        },
        {
            name: "Dr. Cristian Esteban Paba Rojas",
            specialty: "Especialista en Retina",
            img: doctor2
        },
        {
            name: "Dr. Manuel Fernando Buitrago",
            specialty: "Especialista en Oculoplastia",
            img: doctor3
        }
    ];

    return (
        <section className="py-5" style={{ background: "#f9fcff" }}>
            <div className="container">

                {/* Título */}
                <h2
                    className="text-center mb-3"
                    style={{ color: "#0074b8", fontWeight: 800 }}
                >
                    Nuestro Equipo Médico
                </h2>

                <p className="text-center mb-5" style={{ maxWidth: "650px", margin: "0 auto" }}>
                    Contamos con especialistas altamente capacitados, comprometidos con brindar una
                    atención visual humanizada, segura y de excelencia.
                </p>

                {/* Cards de doctores */}
                <div className="row justify-content-center g-4">
                    {doctors.map((doc, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4">
                            <div
                                className="p-4 text-center bg-white shadow-sm"
                                style={{
                                    borderRadius: "18px",
                                    transition: "all 0.3s ease",
                                    cursor: "pointer"
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
                            >
                                <img
                                    src={doc.img}
                                    alt={doc.name}
                                    style={{
                                        width: "130px",
                                        height: "130px",
                                        objectFit: "cover",
                                        borderRadius: "50%",
                                        marginBottom: "15px"
                                    }}
                                />
                                <h5 className="fw-bold" style={{ color: "#0074b8" }}>
                                    {doc.name}
                                </h5>
                                <p className="text-muted">{doc.specialty}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botón */}
                <div className="text-center mt-4">
                    <a href="/team" className="btn px-4 py-2 fw-bold mt-4"
                        style={{
                            background: "linear-gradient(90deg, #0074B8, #F47B20)",
                            color: "#fff",
                            borderRadius: "50px",
                            fontSize: "1.05rem",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                        }}>
                        Conocer Equipo Completo
                    </a>
                </div>

            </div>
        </section>
    );
}
