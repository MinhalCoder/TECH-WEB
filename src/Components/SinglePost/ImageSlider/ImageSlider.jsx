// src/components/ImageSlider.js
import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const images = [
    'assets/Images/img1.png',
    'assets/Images/img2.png',
    'assets/Images/img3.png',
   
];
const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const getSlideClass = (index) => {
        if (index === currentIndex) return 'slide center';
        if (index === (currentIndex + 1) % images.length) return 'slide bottom-right';
        if (index === (currentIndex - 1 + images.length) % images.length) return 'slide top-left';
        return 'slide hidden';
    };

    return (
        <div className="slider">
            <div className="slides">
                {images.map((image, index) => (
                    <div
                        className={getSlideClass(index)}
                        key={index}
                    >
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;