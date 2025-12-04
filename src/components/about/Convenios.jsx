import React, { useEffect, useRef, useState } from "react";

export default function Convenios() {
    const sliderRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    const convenios = [
        { name: "CEMA", img: "/images/convenios/1.jpg" },
        { name: "Clinicaemergencia", img: "/images/convenios/2.jpg" },
        { name: "Colsanitas", img: "/images/convenios/3.jpg" },
        { name: "Ecopetrol", img: "/images/convenios/4.jpg" },
        { name: "Hospital", img: "/images/convenios/5.jpg" },
        { name: "SaludTotal", img: "/images/convenios/6.jpg" },
        { name: "Alta", img: "/images/convenios/7.jpg" },
        { name: "CENIT", img: "/images/convenios/8.jpg" },
        { name: "sura", img: "/images/convenios/9.jpg" },
        { name: "SUMI", img: "/images/convenios/10.jpg" },
        { name: "fomag", img: "/images/convenios/11.jpg" },
        { name: "mutualser", img: "/images/convenios/12.jpg" },
        { name: "EPSsanitas", img: "/images/convenios/13.jpg" },
        { name: "cajacopi", img: "/images/convenios/14.jpg" }
    ];

   const infiniteList = [...convenios, ...convenios];

    useEffect(() => {
        const slider = sliderRef.current;
        let scrollAmount = 0;

        const step = () => {
            if (!slider || isPaused) return;

            scrollAmount += 1;
            slider.scrollLeft = scrollAmount;

            if (scrollAmount >= slider.scrollWidth / 2) {
                scrollAmount = 0;
            }
        };

        const interval = setInterval(step, 20);

        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <section
            className="py-5"
            style={{
                background: "#ffffff",
                boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.08)",
            }}
        >
            <div className="container text-center">
                <h2
                    className="mb-4"
                    style={{
                        color: "#0074b8",
                        fontWeight: "700",
                        fontSize: "2rem",
                    }}
                >
                    Nuestros Convenios
                </h2>

                <div
                    ref={sliderRef}
                    className="d-flex align-items-center"
                    style={{
                        overflow: "hidden",
                        scrollBehavior: "smooth",
                        gap: "60px",
                        padding: "25px 0",
                    }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {infiniteList.map((item, index) => (
                        <div
                            key={index}
                            className="logo-item"
                            style={{
                                display: "inline-block",
                                transition: "transform 0.3s ease, filter 0.3s ease",
                                padding: "10px",
                            }}
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                style={{
                                    width: "165px",     // 🔥 Imagen más grande
                                    height: "auto",
                                    objectFit: "contain",
                                    transition: "transform 0.3s ease",
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Estilo hover */}
            <style>
                {`
                    .logo-item:hover {
                        transform: scale(1.25);
                        filter: brightness(1.15);
                    }
                `}
            </style>
        </section>
    );
}