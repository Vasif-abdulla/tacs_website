import React, { useEffect, useState, useRef } from "react";
import styles from "./ImageSlider.module.css";

export const ImageSlider = ({ images, duration = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % Math.ceil(images.length / 4) // Advance by one set of three images
      );
    }, duration);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length, duration]);

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.slider}
        ref={sliderRef}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
