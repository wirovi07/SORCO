import React from "react";

// Importar secciones del Home
import HeroSection from "../components/home/HeroSection";
import AboutPreview from "../components/home/AboutPreview";
import ServicesPreview from "../components/home/ServicesPreview";
import DoctorsPreview from "../components/home/DoctorsPreview";
import Testimonials from "../components/home/Testimonials";
import CallToAction from "../components/home/CallToAction";

export default function Home() {
    return (
        <>
            {/* Sección Hero */}
            <HeroSection />

            {/* Preview de Sobre Nosotros */}
            <AboutPreview />

            {/* Preview de Servicios */}
            <ServicesPreview />

            {/* Equipo Médico */}
            <DoctorsPreview />

            {/* Testimonios */}
            <Testimonials />

            {/* Llamado a la Acción */}
            <CallToAction />
        </>
    );
}
