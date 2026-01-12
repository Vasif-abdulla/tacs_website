import React from "react";
import styles from "./PersonDetailsCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faSquareEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { logo } from "../../../../Utils/Icons/Icons";

export const PersonDetailsCard = ({ execom }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <img
            src={execom?.image}
            alt=""
            loading="lazy"
            className={styles.image}
          />
        </div>
        <div className={styles.right}>
          <div className={styles.row}>
            <span className={styles.name}>{execom?.name}</span>
            <span className={styles.designation}>{execom?.designation}</span>
          </div>
          <div className={styles.row}>
            <div className={styles.socials}>
              {/* <a
                href={execom?.linkedin}
                target="_blank"
                className={styles.link}
              >
                <img src={logo?.linkedinLogo} alt="" className={styles.icon} />
              </a> */}
              {/* <a
                href={execom?.linkedin}
                target="_blank"
                className={styles.link}
              >
                <img src={logo?.mailLogo} alt="" className={styles.icon} />
              </a>
              <a
                href={execom?.linkedin}
                target="_blank"
                className={styles.link}
              >
                <img src={logo?.whatsapp} alt="" className={styles.icon} />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
