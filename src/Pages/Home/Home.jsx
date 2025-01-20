import React from "react";
import styles from "./Home.module.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Banner } from "./Components/Banner/Banner";
import { Footer } from "../../Components/Footer/Footer";
import { AboutUsComponent } from "../../Components/AboutUs/AboutUs";
import { Counter } from "./Components/Counter/Counter";
import { CardView } from "./Components/CardView/CardView";
import { ImageSlider } from "./Components/ImageSlider/ImageSlider";
import { sliderImages } from "../../Utils/Constants";




export const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <AboutUsComponent />
      <Counter/>
      <CardView/>
      <div className={styles.section}>
        <h2 className={styles.heading}>Recent Events</h2>
        <ImageSlider images={sliderImages} />
      </div>
      <Footer />
    </>
  );
};
