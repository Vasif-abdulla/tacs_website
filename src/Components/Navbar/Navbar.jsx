import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo1.png";
import { navbarLinks } from "../../Utils/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarWrapper}>
        <div className={styles.navRow}>
          <div className={styles.navbarLeft}>
            <a href="/" className="">
              <img src={logo} alt="" className={styles.logo} />
            </a>
          </div>
          <div className={styles.navbarCenter}>
            {navbarLinks?.map((navItem, index) => (
              <div className={styles.navbarLinkBox} key={index}>
                <a href={navItem?.link} className={styles.linkName}>
                  {navItem?.title}
                </a>
              </div>
            ))}
          </div>
          <div className={styles.navbarRight}>
            <a
              href="https://chat.whatsapp.com/Bb2E0Eg3otsFZU4gGG0FrB"
              target="_blank"
              className={styles.linkBtn}
            >
              <button className={styles.join}>Join Whatsapp Group</button>
            </a>
            {isDrawerOpen ? (
              <FontAwesomeIcon
                onClick={() => {
                  setIsDrawerOpen(false);
                }}
                icon={faClose}
                className={styles.moreIcon}
              />
            ) : (
              <FontAwesomeIcon
                onClick={() => {
                  setIsDrawerOpen(true);
                }}
                icon={faBars}
                className={styles.moreIcon}
              />
            )}
          </div>
        </div>

        {isDrawerOpen && (
          <div className={styles.drawer}>
            <div className={styles.mobileWrap}>
              <div className={styles.mobileNav}>
                {navbarLinks?.map((navItem, index) => (
                  <div key={index}>
                    <div className={styles.mobileNavbarLinkBox}>
                      <a
                        onClick={() => {
                          setIsDrawerOpen(false);
                        }}
                        href={navItem?.link}
                        className={styles.mobilelinkName}
                      >
                        {navItem?.title}
                      </a>
                      <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                    {navItem?.hr && <div className={styles.hr}></div>}
                  </div>
                ))}
              </div>
              <a
                href="https://chat.whatsapp.com/Bb2E0Eg3otsFZU4gGG0FrB"
                target="_blank"
                className={styles.linkBtn}
              >
                <button className={styles.mobileJoin}>
                  Join Whatsapp Group
                </button>
              </a>
              <div className={styles.credits}>
                <span className={styles.credit}>All Rights Reserved</span>
                <span className={styles.credit}>
                  Copyright © 2025 - TACSMEA
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
