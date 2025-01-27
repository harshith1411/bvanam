// src/components/Typewriter.jsx
import React, { useState, useEffect } from 'react';
import './Typewriter.css';

const Typewriter = ({ texts, delay = 100, pauseDuration = 1000 }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const fullText = texts[textIndex];

            if (isDeleting) {
                // Delete text
                setCurrentText(fullText.substring(0, currentText.length - 1));
                setCurrentIndex(currentIndex - 1);

                if (currentText === '') {
                    setIsDeleting(false);
                    setTextIndex((textIndex + 1) % texts.length); // Move to the next text
                }
            } else {
                // Write text
                setCurrentText(fullText.substring(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);

                if (currentText === fullText) {
                    // Pause before deleting
                    setTimeout(() => {
                        setIsDeleting(true);
                    }, pauseDuration);
                }
            }
        }, isDeleting ? delay / 2 : delay); // Faster deletion

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentIndex, textIndex, texts, delay, pauseDuration]);

    return (
        <div className="typewriter-container">
            <span className="typewriter">{currentText}</span>
        </div>
    );
};

export default Typewriter;