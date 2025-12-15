// src/pages/Team.jsx

import React, { useState } from "react";
import DoctorCard from "../components/team/DoctorCard";
import DoctorModal from "../components/team/DoctorModal";
import { doctors } from "../components/team/teamData";
import "../components/team/teamStyles.css";

export default function Team() {
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    return (
        <div className="team-container">
            <h1 className="team-title">Nuestro Equipo Médico</h1>

            <div className="team-grid">
                {doctors.map((doc) => (
                    <DoctorCard
                        key={doc.id}
                        doctor={doc}
                        onClick={() => setSelectedDoctor(doc)}
                    />
                ))}
            </div>

            <DoctorModal
                doctor={selectedDoctor}
                onClose={() => setSelectedDoctor(null)}
            />
        </div>
    );
}
