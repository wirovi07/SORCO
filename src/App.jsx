import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

// Pages
import Home from "./pages/Home";
import About from "./pages/About"; 
import Services from "./pages/Services";

function App() {
    return (
        <>
            <Header />

            <main style={{ minHeight: "70vh" }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} /> 
                    <Route path="/services" element={<Services/>}/>
                </Routes>
            </main>

            <WhatsAppButton />
            <Footer />
        </>
    );
}

export default App;
