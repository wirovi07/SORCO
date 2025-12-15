import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

// Pages
import Home from "./pages/Home";
import About from "./pages/About"; 
import Services from "./pages/Services";
import Team from "./pages/Team";
import SedeOcana from "./pages/SedeOcana";

function App() {
    return (
        <>
            <Header />

            <main style={{ minHeight: "70vh" }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} /> 
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/team" element={<Team/>}/>
                    <Route path="/sedeocana" element={<SedeOcana />} />
                </Routes>
            </main>

            <WhatsAppButton />
            <Footer />
        </>
    );
}

export default App;
