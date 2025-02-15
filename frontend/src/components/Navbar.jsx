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
                <div className="nav-separate">
                    <Link to="/gnapakalu">Gnapakalu</Link>
                </div>
                <div className="nav-separate">
                    <Link to="/muchatlu">Muchatlu</Link>
                </div>
                <div className="nav-separate">
                    <Link to="/parichayalu">Parichayalu</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;