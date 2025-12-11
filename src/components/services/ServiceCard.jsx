import React from "react";

export default function ServiceCard() {
    const services = [
        {
            img: "/images/services/CconsultasOftamologica.jpg",
            title: "Consulta Oftalmológica",
            color: "#f47b20",
            details: (
                <>
                    <h4 className="fw-bold mb-3" style={{ color: "#f47b20" }}>
                        ¿En qué consiste este procedimiento?
                    </h4>

                    <p className="text-muted">
                        Nuestra consulta oftalmológica ofrece una evaluación completa de la salud
                        visual, permitiendo detectar de forma temprana condiciones como glaucoma,
                        cataratas y alteraciones de retina.
                    </p>

                    <p className="text-muted">
                        Se realiza con equipos modernos para garantizar un diagnóstico preciso y
                        un tratamiento adecuado según cada paciente.
                    </p>

                    <ul className="text-muted text-start text-lg-start">
                        <li>Evaluación visual completa</li>
                        <li>Detección temprana de enfermedades</li>
                        <li>Medición de presión intraocular</li>
                        <li>Atención por especialistas certificados</li>
                    </ul>

                    <a
                        href="https://wa.me/573102460681?text=Hola%2C+quisiera+agendar+una+cita"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn px-4 py-2 fw-bold mt-3"
                        style={{
                            background: "linear-gradient(90deg, #0074B8, #F47B20)",
                            color: "#fff",
                            borderRadius: "50px",
                            fontSize: "1.05rem",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                        }}
                    >
                        Agendar Cita
                    </a>

                </>
            )
        },

        {
            img: "/images/services/CirugiaLaser.jpg",
            title: "Cirugía Láser",
            color: "#0074b8",
            details: (
                <>
                    <h4 className="fw-bold mb-3" style={{ color: "#0074b8" }}>
                        ¿En qué consiste este procedimiento?
                    </h4>

                    <p className="text-muted">
                        La cirugía láser corrige defectos refractivos como miopía, astigmatismo e hipermetropía con técnicas como LASIK y PRK.
                    </p>

                    <p className="text-muted">
                        Es un procedimiento rápido, ambulatorio y con excelente recuperación.
                    </p>

                    <ul className="text-muted text-start text-lg-start-muted">
                        <li>Corrección precisa y personalizada</li>
                        <li>Resultados inmediatos</li>
                        <li>Métodos modernos y seguros</li>
                        <li>Recuperación rápida</li>
                    </ul>

                    <a
                        href="https://wa.me/573102460681?text=Hola%2C+quisiera+agendar+una+cita"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn px-4 py-2 fw-bold mt-3"
                        style={{
                            background: "linear-gradient(90deg, #0074B8, #F47B20)",
                            color: "#fff",
                            borderRadius: "50px",
                            fontSize: "1.05rem",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                        }}
                    >
                        Agendar Cita
                    </a>

                </>
            )
        },

        {
            img: "/images/services/ExamenesDiagnostico.jpg",
            title: "Exámenes Diagnósticos",
            color: "#6bbf3d",
            details: (
                <>
                    <h4 className="fw-bold mb-3" style={{ color: "#6bbf3d" }}>
                        ¿En qué consiste este servicio?
                    </h4>

                    <p className="text-muted">
                        Contamos con equipos especializados que permiten diagnósticos precisos
                        para detectar enfermedades oculares de manera temprana.
                    </p>

                    <ul className="text-muted text-start text-lg-start-muted">
                        <li>OCT</li>
                        <li>Campimetría</li>
                        <li>Topografía corneal</li>
                        <li>Biometría y paquimetría</li>
                    </ul>

                    <a
                        href="https://wa.me/573102460681?text=Hola%2C+quisiera+agendar+una+cita"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn px-4 py-2 fw-bold mt-3"
                        style={{
                            background: "linear-gradient(90deg, #0074B8, #F47B20)",
                            color: "#fff",
                            borderRadius: "50px",
                            fontSize: "1.05rem",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                        }}
                    >
                        Agendar Cita
                    </a>

                </>
            )
        },

        {
            img: "/images/services/ConsultasOptometria.jpg",
            title: "Consulta de Optometría",
            color: "#08d8f8",
            details: (
                <>
                    <h4 className="fw-bold mb-3" style={{ color: "#08d8f8" }}>
                        ¿En qué consiste este servicio?
                    </h4>

                    <p className="text-muted">
                        Permite determinar defectos refractivos, obtener fórmula de lentes y detectar alteraciones visuales.
                    </p>

                    <ul className="text-text-muted text-start text-lg-start">
                        <li>Agudeza visual</li>
                        <li>Diagnóstico de miopía y astigmatismo</li>
                        <li>Fórmula precisa para lentes</li>
                        <li>Atención profesional humanizada</li>
                    </ul>

                    <a
                        href="https://wa.me/573102460681?text=Hola%2C+quisiera+agendar+una+cita"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn px-4 py-2 fw-bold mt-3"
                        style={{
                            background: "linear-gradient(90deg, #0074B8, #F47B20)",
                            color: "#fff",
                            borderRadius: "50px",
                            fontSize: "1.05rem",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                        }}
                    >
                        Agendar Cita
                    </a>

                </>
            )
        },

        {
            img: "/images/services/Optica.png",
            title: "Óptica",
            color: "#f7a307",
            details: (
                <>
                    <h4 className="fw-bold mb-3" style={{ color: "#f7a307" }}>
                        ¿En qué consiste este servicio?
                    </h4>

                    <p className="text-muted">
                        Ofrecemos monturas, lentes formulados y ayudas visuales con alta calidad
                        y estética.
                    </p>

                    <ul className="text-muted text-start text-lg-start-muted">
                        <li>Lentes formulados</li>
                        <li>Monturas modernas</li>
                        <li>Filtros UV y luz azul</li>
                        <li>Asesoría estética personalizada</li>
                    </ul>

                    <a
                        href="https://wa.me/573102460681?text=Hola%2C+quisiera+agendar+una+cita"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn px-4 py-2 fw-bold mt-3"
                        style={{
                            background: "linear-gradient(90deg, #0074B8, #F47B20)",
                            color: "#fff",
                            borderRadius: "50px",
                            fontSize: "1.05rem",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                        }}
                    >
                        Agendar Cita
                    </a>

                </>
            )
        }
    ];

    return (
        <section className="py-5">
            <div className="container">
                <h2 className="text-center fw-bold mb-5" style={{ color: "#0074b8" }}>
                    Nuestros Servicios
                </h2>

                {services.map((service, index) => (
                    <div key={index} className="row align-items-center mb-5">

                        {/* Alternar posición izquierda/derecha */}
                        <div
                            className={`col-lg-6 mb-4 ${index % 2 === 1 ? "order-lg-2" : ""
                                }`}
                        >
                            <img
                                src={service.img}
                                alt={service.title}
                                className="img-fluid rounded shadow-sm"
                                style={{
                                    width: "100%",
                                    height: "350px",
                                    objectFit: "cover",
                                    borderRadius: "12px",
                                }}
                            />
                        </div>

                        {/* *** Aquí mostramos DETAILS *** */}
                        <div
                            className={`col-lg-6 text-center text-lg-start d-flex flex-column align-items-center align-items-lg-start ${index % 2 === 1 ? "order-lg-1" : ""}`}
                        >

                            <h3 className="fw-bold mb-3" style={{ color: service.color }}>
                                {service.title}
                            </h3>

                            {service.details}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
