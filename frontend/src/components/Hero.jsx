import { useNavigate } from 'react-router-dom';
import './Hero.css';
import logoLT from '../assets/logo.png';
import MTMB from '../assets/mtmb-darkbg.png';

const Hero = () => {

    return (
        <div className="hero">

            <img
                src={logoLT}
                alt="Logo"
                className="hero-logo"
            />

            <div className="hero-MI">
                <h1>MANADE<br /><span className="MI-highlight">IDHANTA</span></h1>
            </div>

            <h1 className="hero-AM">
                Asalu<br />Maja<br /><span className="AM-highlight">Telugu</span><br />Ra
            </h1>

            <div className="MTMB-container">
                <img
                    src={MTMB}
                    alt="MTMB"
                    className="hero-MTMB"
                />
            </div>

        </div>
    );
};

export default Hero;