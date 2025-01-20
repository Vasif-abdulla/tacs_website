import React from "react";
import about from "../../assets/about.jpg";
import styles from "./AboutUs.module.css";
import { useLocation } from "react-router-dom";


export const AboutUsComponent = () => {
  const location = useLocation();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>About Us</div>
        <div className={styles.wrap}>
          <div className={styles.left}>
            <span className={styles.subTitle}>
              Technical Association for Cyber Streams (TACS)
            </span>
            <p className={styles.desc}>
              <b>Technical Association for Cyber Streams (TACS) </b> is the student association of the Department of Computer Science & Engineering at MEA Engineering College, guided by faculty and staff.
              TACS provides a platform for students to apply their skills in technical and non-technical fields, organizing all extracurricular activities for the department.
              With the support of dedicated faculty, TACS nurtures future leaders, equipping them to design innovative solutions for societal and computational challenges.
              Its inclusive approach encourages participation from anyone interested in computer science, uniting diverse fields like arts and technology. 
              Members can enhance their skills, explore their passions, and contribute to the association’s motto:<b>“Nurturing Talents.”</b>
            </p>
            <div className={styles.buttons}>
              <a href="https://www.meaec.edu.in/uploads/Blob-23.pdf"  className={styles.button} target="_blank">Magazine</a>
              <a href="https://www.meaec.edu.in/uploads/Newsletter23-24Oddr.pdf" className={styles.button} target="_blank">Newsletter</a>
            </div>
          </div>
          <div className={styles.right}>
            <img src={about} alt="" className={styles.img} />
          </div>
        </div>

        {location?.pathname === '/aboutus' &&
        <>
        <div className={styles.wrap}>
          <div className={styles.left}>
            <span className={styles.subTitle}>About cs department
            </span>
            <p className={styles.desc}>
              The<b> Department of Computer Science & Engineering</b> at MEA Engineering College, established in 2002, is now affiliated with APJ Abdul Kalam Technological University (APJAKTU).
              It has evolved into a center of excellence, offering advanced technical knowledge and research opportunities with dedicated faculty and modern facilities.
              The B.Tech. curriculum emphasizes hardware and software design, including fields like computer graphics, operating systems, microprocessor-based design, and data storage. 
              The department houses five laboratories, including a Research Lab and Computing Labs, equipped with over 180 state-of-the-art systems, accommodating 30–60 students per session.
            </p>
          </div>
        </div>

        <div className={styles.wrap}>
          <div className={styles.left}>
            <span className={styles.subTitle}>About MEA EC </span>
            <p className={styles.desc}>
              <b>MEA Engineering College</b>, the first NAAC accredited self-financing engineering college in Malappuram district,
              is committed to provide excellent and value-based education with a flair for ethics and professionalism.
              The College is located amidst panoramic natural beauty over-looking the hills and valleys at Nellikunnu,
              near Perinthalmanna – a city of various educational institutions- on the Perinthalmanna- Melattur road.
              The College is easily accessible by road, rail and air. 
              The institution is affiliated to the APJ Abdul Kalam Technological University and approved by the AICTE.
            </p>
          </div>
        </div>
        </>
        }
      </div>
    </div>
  );
};
