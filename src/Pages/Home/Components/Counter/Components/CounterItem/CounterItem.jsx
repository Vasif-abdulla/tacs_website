import React, { useEffect, useState, useRef } from "react";
import styles from "./CounterItem.module.css";

export const CounterItem = ({ svg, limit, speed, title, start = 0 }) => {
  const [count, setCount] = useState(start);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setCount((currentCount) => {
        if (currentCount < limit) {
          return currentCount + 1;
        } else {
          clearInterval(interval);
          return currentCount;
        }
      });
    }, speed); // Counts every 'speed' milliseconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [isInView, limit, speed, start]); // Add 'start' to the dependency array

  return (
    <div className={styles.container} ref={ref}>
      {svg}
      <span className={styles.count}>{count}</span>
      <span className={styles.title}>{title}</span>
    </div>
  );
};
