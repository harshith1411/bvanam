import React, { useState, useEffect } from 'react';
import './Hero.css';
import logo from '../assets/logo.png'; // Import the logo
import flute from '../assets/flute.png'; // Import the flute image
import feather from '../assets/feather.png'; // Import the feather image

const Hero = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const heroHeight = window.innerHeight;
            const progress = Math.min(scrollY / heroHeight, 1); // Normalize scroll progress (0 to 1)
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="hero">
            {/*<div className="hero-content">*/}
            {/*    <div className="hero-telugu">*/}
            {/*        <h1 className="heading-telugu">మన తెలుగు</h1>*/}
            {/*        <h1 className="heading-telugu">మన</h1>*/}
            {/*    </div>*/}

            {/*    <img*/}
            {/*        src={logo}*/}
            {/*        alt="Logo"*/}
            {/*        className="hero-logo"*/}
            {/*        style={{*/}
            {/*            opacity: 1 - scrollProgress,*/}
            {/*            transform: `scale(${1 - scrollProgress * 0.2})`, // Scale down logo as user scrolls*/}
            {/*        }}*/}
            {/*    />*/}
            {/*    <h1 className="hero-title">*/}
            {/*        <span>#AsaluMajaTeluguRa</span>*/}
            {/*    </h1>*/}
            {/*</div>*/}

            {/*<div className="floating-items">*/}
            {/*    <img src={flute} alt="Flute" className="flute" />*/}
            {/*    <img src={feather} alt="Peacock Feather" className="feather" />*/}
            {/*</div>*/}
        </div>
    );
};

export default Hero;