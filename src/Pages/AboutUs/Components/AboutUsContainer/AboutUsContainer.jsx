import React from "react";
import styles from "./AboutUsContainer.module.css";
import { AboutUsComponent } from "../../../../Components/AboutUs/AboutUs";

export const AboutUsContainer = () => {
  return (
    <div className={styles.container}>
      <AboutUsComponent />
    </div>
  );
};
