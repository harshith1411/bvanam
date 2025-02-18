// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png'; // Import the logo

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-links">
                {/* Add logo-container class to the logo's nav-separate */}
                <div className="nav-separate logo-container">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="logo-img" />
                    </Link>
                </div>
                {/* Wrap the entire nav-separate with Link */}
                <Link to="/gnapakalu" className="nav-separate">
                    <span>Gnapakalu</span>
                </Link>
                <Link to="/muchatlu" className="nav-separate">
                    <span>Muchatlu</span>
                </Link>
                <Link to="/parichayalu" className="nav-separate">
                    <span>Parichayalu</span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;