import React from "react";
import styles from "./Gallery.module.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import { GalleryContainer } from "./Components/GalleryContainer/GalleryContainer";

export const Gallery = () => {
  return (
    <>
      <Navbar />
      <GalleryContainer/>
      <Footer />
    </>
  );
};
