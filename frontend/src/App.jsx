// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; // Import the Home page
import Gnapakalu from './pages/Gnapakalu'; // Import the About page
import Muchatlu from './pages/Muchatlu'; // Import the Muchatlu page
import Parichayalu from './pages/Parichayalu'; // Import the Contact page
import './index.css';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
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