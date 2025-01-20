import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo1.png";
import { OtherLinks, navbarLinks } from "../../Utils/Constants";

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <div className={styles.col1}>
            <img src={logo} alt="" className={styles.logo} />
          </div>
          <div className={styles.wrapCol}>
          <div className={styles.col2}>
            <span className={styles.title}>Useful links</span>
            <div className={styles.linkBox}>
              {navbarLinks?.map((link,index) => (
                <div className={styles.linkWrap} key={index}>
                  <a href={link?.link} className={styles.link}>
                    {link?.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.col2}>
            <span className={styles.title}>Other Links</span>
            <div className={styles.linkBox}>
              {OtherLinks?.map((link,index) => (
                <div className={styles.linkWrap} key={index}>
                  <a href={link?.link} target="_blank" className={styles.link}>
                    {link?.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
        <div className={styles.hr}></div>
        <div className={styles.creditRow}>
            <div className={styles.left}>
                <span className={styles.credits}>All Rights Reserved</span>
            </div>
            <div className={styles.left}>
                <span className={styles.credits}>Crafted by Tech Team of Tacs </span>
            </div>
            <div className={styles.left}>
            <span className={styles.credits}>© Copyright | TACS MEA</span>
            </div>
        </div>
      </div>
    </div>
  );
};
