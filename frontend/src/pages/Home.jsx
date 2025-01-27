// src/pages/Home.jsx
import React, {useState} from 'react';
import Calendar from 'react-calendar';
import Hero from '../components/Hero';
import 'react-calendar/dist/Calendar.css';

const Home = () => {

    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <div>
            <Hero />
        </div>
    );
};

export default Home;