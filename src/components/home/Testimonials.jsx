import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Carlos R.",
            text: "La atención fue excelente y los resultados superaron mis expectativas.",
            img: "/images/testimonial/JuanCarlosRojas.png"
        },
        {
            name: "Andrea M.",
            text: "El equipo médico es muy profesional y amable. ¡Los recomiendo totalmente!",
            img: "/images/testimonial/1.png"
        },
        {
            name: "Juana S.",
            text: "Mi cirugía fue un éxito gracias a su dedicación y conocimiento.",
            img: "/images/testimonial/2.png"
        },
        {
            name: "María L.",
            text: "La clínica tiene un ambiente muy cómodo y tranquilo. Me sentí en buenas manos.",
            img: "/images/testimonial/3.png"
        },
        {
            name: "Pedro A.",
            text: "Excelente servicio y seguimiento. Mi visión mejoró notablemente.",
            img: "/images/testimonial/5.png"
        },
        {
            name: "Moises O.",
            text: "La atención fue rápida, humana y muy profesional. Excelente servicio ",
            img: "/images/testimonial/4.jpeg"
        },
        {
            name: "Wilmar A.",
            text: "Los resultados fueron los esperados. Muy agradecido con todo el personal.",
            img: "/images/testimonial/WilmarRojas.jpeg"
        },
        {
            name: "Sandra P.",
            text: "Explican todo con claridad y transmiten mucha confianza.",
            img: "/images/testimonial/6.png"
        }
    ];

    return (
        <section className="py-5" style={{ background: "#f9fafc" }}>
            <div className="container">
                <h2 className="text-center mb-4"
                    style={{
                        color: "#0074b8",
                        textAlign: "center",
                        fontSize: "2rem",
                        fontWeight: 800,
                        marginBottom: "30px",
                    }}>
                    Testimonios
                </h2>

                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        576: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 }
                    }}
                    style={{ paddingBottom: "30px" }}
                >
                    {testimonials.map((t, index) => (
                        <SwiperSlide key={index}>
                            <div className="card p-4 shadow-sm text-center" style={{ borderRadius: "15px" }}>
                                <img
                                    src={t.img}
                                    alt={t.name}
                                    className="rounded-circle mb-3"
                                    style={{
                                        width: "100px",
                                        height: "100px",
                                        objectFit: "cover",
                                        margin: "0 auto"
                                    }}
                                />

                                <p style={{ fontStyle: "italic" }}>
                                    "{t.text}"
                                </p>

                                <strong style={{ color: "#6bbf3d" }}>— {t.name}</strong>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
