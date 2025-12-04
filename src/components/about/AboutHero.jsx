import React from "react";

export default function AboutHero() {
    return (
        <section
            className="py-5 text-center"
            style={{ background: "#f1f7fc" }}
        >
            <div className="container">
                <h1 style={{ color: "#0074b8", fontWeight: "800" }}>
                    Sobre Nosotros
                </h1>
                <p className="mt-3">
                    Somos una institución con amplia trayectoria en la atención y cirugía ocular,
                    comprometida con el bienestar visual de nuestros pacientes.
                </p>
            </div>
        </section>
    );
}
