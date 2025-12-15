import React from "react";

export default function GaleriaSede() {
    const images = [
        "/images/sede-ocana/1.jpg",
        "/images/sede-ocana/2.jpg",
        "/images/sede-ocana/3.jpg",
        "/images/sede-ocana/4.jpg"
    ];

    return (
        <section className="galeria-sede container py-5">
            <h2 className="text-center mb-4">Galería</h2>

            <div className="row">
                {images.map((img, i) => (
                    <div key={i} className="col-md-3 col-6 mb-3">
                        <img src={img} className="img-fluid rounded shadow-sm" />
                    </div>
                ))}
            </div>

            {/* CSS */}
            <style>{`
                .galeria-sede h2 {
                    color: #0074b8;
                    font-weight: 700;
                }
            `}</style>
        </section>
    );
}
