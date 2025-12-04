import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

// Pages
import Home from "./pages/Home";
import About from "./pages/About"; 

function App() {
    return (
        <>
            <Header />

            <main style={{ minHeight: "70vh" }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} /> 
                </Routes>
            </main>

            <WhatsAppButton />
            <Footer />
        </>
    );
}

export default App;
