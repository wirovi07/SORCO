import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";
import "./ServicesPreview.css";

export default function ServicesPreview() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/services");
    };

    const services = [
        {
            img: "/images/services/CconsultasOftamologica.jpg",
            title: "Consulta Oftalmológica",
            text: "Diagnóstico completo con especialistas certificados.",
            color: "#0074b8"
        },
        {
            img: "/images/services/CirugiaLaser.jpg",
            title: "Cirugía Láser",
            text: "Procedimientos seguros para mejorar tu visión.",
            color: "#f47b20"
        },
        {
            img: "/images/services/ExamenesDiagnostico.jpg",
            title: "Exámenes Diagnósticos",
            text: "Tecnología moderna para análisis oftalmológicos.",
            color: "#6bbf3d"
        },
        {
            img: "/images/services/ConsultasOptometria.jpg",
            title: "Consulta Optometría",
            text: "Tecnología de punta para la salud visual completa.",
            color: "#08d8f8"
        },
        {
            img: "/images/services/Optica.png",
            title: "Óptica",
            text: "Mejor enfoque de la luz sobre la retina.",
            color: "#f7a307"
        }
    ];

    return (
        <section className="services-section">
            <div className="container">
                <h2 className="services-title">Nuestros Servicios</h2>

                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={20}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                >
                    {services.map((s, i) => (
                        <SwiperSlide key={i}>
                            <div
                                className="service-card shadow"
                                onClick={handleClick}
                                style={{ cursor: "pointer" }}
                            >
                                <img src={s.img} alt={s.title} className="service-img" />
                                <div className="service-info">
                                    <h5 style={{ color: s.color }}>{s.title}</h5>
                                    <p>{s.text}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
