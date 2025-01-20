import React from "react";
import styles from "./GalleryContainer.module.css";
import { galleryImages } from "../../../../Utils/Constants";

export const GalleryContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <span className={styles.title}>Gallery</span>
        </div>
        <div className={styles.gallery}>
          {galleryImages?.map((image, index) => (
            <div className={styles.wrap} key={index}>
              <img src={image} alt={"Gallery_Image"+index+1} className={styles.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
