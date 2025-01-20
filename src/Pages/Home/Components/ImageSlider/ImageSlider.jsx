import React, { useEffect, useState, useRef } from "react";
import styles from "./ImageSlider.module.css";

export const ImageSlider = ({ images, duration = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(4); // Default for large screens
  const sliderRef = useRef(null);

  useEffect(() => {
    // Function to update visible images based on screen width
    const updateVisibleImages = () => {
      setVisibleImages(window.innerWidth <= 880 ? 1 : 4); // Show 1 image in mobile, 4 in desktop
    };

    updateVisibleImages(); // Initial check
    window.addEventListener("resize", updateVisibleImages); // Listen for screen resize

    return () => window.removeEventListener("resize", updateVisibleImages);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % Math.ceil(images.length / visibleImages)
      );
    }, duration);

    return () => clearInterval(interval);
  }, [images.length, duration, visibleImages]);

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.slider}
        ref={sliderRef}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.slide} style={{ flex: `0 0 ${100 / visibleImages}%` }}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
