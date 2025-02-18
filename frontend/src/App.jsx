// src/App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import Home from './pages/Home';
import Gnapakalu from './pages/Gnapakalu';
import Muchatlu from './pages/Muchatlu';
import Parichayalu from './pages/Parichayalu';
import './index.css';

const App = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Router>
            <div>
                {isMobile ? <MobileNavbar /> : <Navbar />}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gnapakalu" element={<Gnapakalu />} />
                    <Route path="/muchatlu" element={<Muchatlu />} />
                    <Route path="/parichayalu" element={<Parichayalu />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
