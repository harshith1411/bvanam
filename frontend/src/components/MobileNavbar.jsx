// src/components/MobileNavbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './MobileNavbar.css';

const MobileNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <button className="floating-button" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>
            {menuOpen && (
                <div className="mobile-menu">
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/gnapakalu" onClick={() => setMenuOpen(false)}>Gnapakalu</Link>
                    <Link to="/muchatlu" onClick={() => setMenuOpen(false)}>Muchatlu</Link>
                    <Link to="/parichayalu" onClick={() => setMenuOpen(false)}>Parichayalu</Link>
                </div>
            )}
        </>
    );
};

export default MobileNavbar;