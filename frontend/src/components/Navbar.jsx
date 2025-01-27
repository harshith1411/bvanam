// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'; // Import the logo

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link to="/"><img src={logo} alt="Logo" className="logo-img" /></Link>
                <Link to="/gnapakalu">Gnapakalu</Link>
                <Link to="/muchatlu">Muchatlu</Link>
                <Link to="/parichayalu">Parichayalu</Link>
            </div>
        </nav>
    );
};

export default Navbar;