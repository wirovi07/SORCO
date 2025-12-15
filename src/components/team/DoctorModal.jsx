// src/components/team/DoctorModal.jsx

import React from "react";
import "./teamStyles.css";

export default function DoctorModal({ doctor, onClose }) {
    if (!doctor) return null;

    return (
        <div className="doctor-modal-overlay" onClick={onClose}>
            <div className="doctor-modal" onClick={(e) => e.stopPropagation()}>
                
                <img src={doctor.img} alt={doctor.name} className="modal-img" />

                <div className="modal-content">
                    <h2 className="modal-name">{doctor.name}</h2>
                    <h4 className="modal-specialty">{doctor.specialty}</h4>

                    <p><strong>Especialidad:</strong> {doctor.role}</p>
                    <p><strong>Universidad:</strong> {doctor.university}</p>
                    <p><strong>Experiencia:</strong> {doctor.experience}</p>

                    <button className="modal-close-btn" onClick={onClose}>
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
}
