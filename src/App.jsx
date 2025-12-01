

import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Pages
import Home from "./pages/Home";

function App() {
    return (
        <>
            <Header />

            <main style={{ minHeight: "70vh" }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>

            <Footer />
        </>
    );
}

export default App;
