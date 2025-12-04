import React from "react";

import AboutHero from "../components/about/AboutHero";
import MissionVision from "../components/about/MissionVision";
import TeamPreview from "../components/about/TeamPreview";
import Convenios from "../components/about/Convenios";

export default function About() {
    return (
        <>
            <AboutHero />
            <MissionVision />
            <Convenios />
            <TeamPreview />
        </>
    );
}
