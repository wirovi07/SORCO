import React from "react";

export default function HeroSede() {
    return (
        <section className="hero-sede">
            <div className="hero-overlay">
                <div className="container text-center">
                    <h1>Sede Ocaña</h1>
                    <p>Atención oftalmológica especializada con tecnología de vanguardia</p>
                </div>
            </div>

            {/* CSS */}
            <style>{`
                .hero-sede {
                    background: url("/images/sede/sede.jpg") center/cover no-repeat;
                    height: 70vh;
                    position: relative;
                }
                .hero-overlay {
                    background: rgba(0,0,0,0.55);
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                }
                .hero-sede h1 {
                    font-size: 3rem;
                    font-weight: 700;
                }
                .hero-sede p {
                    font-size: 1.2rem;
                    margin-top: 10px;
                }
                @media (max-width: 768px) {
                    .hero-sede h1 {
                        font-size: 2.2rem;
                    }
                }
            `}</style>
        </section>
    );
}
