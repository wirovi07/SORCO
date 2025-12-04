import React from "react";

export default function MissionVision() {
    return (
        <section className="py-5 container">
            <div className="row">
                <div className="col-md-6 mb-4">
                    <h3 style={{ color: "#0074b8", fontWeight: "700" }}>Misión</h3>
                    <p>
                        Brindar servicios integrales en salud visual con estándares de calidad,
                        tecnología avanzada y talento humano especializado.
                    </p>
                </div>

                <div className="col-md-6 mb-4">
                    <h3 style={{ color: "#0074b8", fontWeight: "700" }}>Visión</h3>
                    <p>
                        Ser una institución líder en oftalmología a nivel regional,
                        reconocida por su excelencia y compromiso con la salud visual.
                    </p>
                </div>
            </div>
        </section>
    );
}
