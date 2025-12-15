// src/components/team/DoctorCard.jsx

import React from "react";
import "./teamStyles.css";

export default function DoctorCard({ doctor, onClick }) {
    return (
        <div className="doctor-card" onClick={onClick}>
            <img src={doctor.img} alt={doctor.name} />

            <div className="doctor-info">
                <h4 className="doctor-name">{doctor.name}</h4>
                <p className="doctor-specialty">{doctor.specialty}</p>

                <button className="doctor-button">
                    Ver Perfil
                </button>
            </div>
        </div>
    );
}
