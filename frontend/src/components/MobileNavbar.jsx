import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './MobileNavbar.css';
import logo from '../assets/logo.png';
import menuLogo from '../assets/menulogo.png';

const MobileNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Close the menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [menuOpen]);

    return (
        <>
            {/* Overlay to blur background */}
            {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}

            {/* Logo */}
            <div className="navbar-logo">
                <Link to="/" onClick={() => setMenuOpen(false)}>
                    <img src={logo} alt="Logo" />
                </Link>
            </div>

            {/* Floating Menu Button */}
            <button className="floating-button" onClick={() => setMenuOpen(!menuOpen)}>
                <img src={menuLogo} alt="Menu" className="menu-logo" />
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="mobile-menu" ref={menuRef}>
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                        <img src={logo} alt="Logo" className="logo-img" />
                    </Link>
                    <Link to="/gnapakalu" onClick={() => setMenuOpen(false)}>Gnapakalu</Link>
                    <Link to="/muchatlu" onClick={() => setMenuOpen(false)}>Muchatlu</Link>
                    <Link to="/parichayalu" onClick={() => setMenuOpen(false)}>Parichayalu</Link>
                </div>
            )}
        </>
    );
};

export default MobileNavbar;
