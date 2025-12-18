import { useEffect } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import styles from "./PrivacyPolicy.module.css";

export const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last Updated: {new Date().toLocaleDateString()}</p>

          <section className={styles.section}>
            <strong>1. Introduction</strong>
            <p>
              Welcome to the official website of TACS (Technical Association for Cyberstream). This Privacy Policy specifically covers the <strong>AIMA Blood Donation App</strong>, a college-level blood donation coordination application developed under TACS for internal academic and social service purposes.
            </p>
            <p>
              This app is non-commercial and used exclusively within the college ecosystem. Our primary purpose is blood donation coordination, not medical diagnosis or treatment. We are committed to protecting your privacy and ensuring your data is handled responsibly in compliance with the Indian IT Act, 2000 and reasonable data protection practices.
            </p>
          </section>

          <section className={styles.section}>
            <strong>2. Information We Collect</strong>
            <p>To facilitate blood donation coordination, we may collect the following basic personal data:</p>
            <ul>
              <li>Name</li>
              <li>Phone Number</li>
              <li>Blood Group</li>
              <li>Department and Year of Study</li>
              <li>Availability Status</li>
              <li>Location within Campus</li>
            </ul>
            <p>
              <strong>Note:</strong> We do NOT collect sensitive medical records, financial data, or government-issued IDs.
            </p>
          </section>

          <section className={styles.section}>
            <strong>3. How We Use the Information</strong>
            <p>The data collected is used strictly for the following purposes:</p>
            <ul>
              <li>Connecting blood donors with those in need within the college community.</li>
              <li>Communicating urgent blood donation requests.</li>
              <li>Coordinating donation camps and awareness activities.</li>
            </ul>
            <p>We do not use your data for marketing, profiling, or commercial purposes.</p>
          </section>

          <section className={styles.section}>
            <strong>4. Data Storage and Security Measures</strong>
            <p>
              All user data is stored securely on restricted servers with access controls. We verify all student coordinators and faculty advisors who have access to the data. While no system is completely infallible, we implement standard security measures to protect against unauthorized access, alteration, or destruction of data.
            </p>
          </section>

          <section className={styles.section}>
            <strong>5. Data Sharing and Disclosure</strong>
            <p>
              <strong>No Commercial Sharing:</strong> We do NOT sell, rent, or trade your personal information to third parties, advertisers, or marketing agencies.
            </p>
            <p>Data may be shared only in the following limited circumstances:</p>
            <ul>
              <li>With authorized student coordinators and faculty advisors for operational purposes.</li>
              <li>If required by law or legal process.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <strong>6. User Consent and Responsibility</strong>
            <p>
              By using the AIMA Blood Donation App, you consent to the collection and use of your information as described in this policy. You are responsible for providing accurate information and updating your availability status.
            </p>
          </section>

          <section className={styles.section}>
            <strong>7. Data Retention and Deletion Policy</strong>
            <p>
              We retain personal data only as long as necessary for the purposes outlined above or as long as you are a student/member of the institution. You may request the deletion of your data at any time by contacting us. Upon graduation or withdrawal from the college, your data will be removed from our active database during our annual maintenance cycle.
            </p>
          </section>

          <section className={styles.section}>
            <strong>8. Third-Party Services</strong>
            <p>
              The AIMA Blood Donation App does not utilize third-party tracking services or analytics for commercial purposes. Any infrastructure providers (e.g., hosting) are chosen for their strict privacy compliance.
            </p>
          </section>

          <section className={styles.section}>
            <strong>9. Children’s Privacy</strong>
            <p>
              This application is intended for college students and faculty. We do not knowingly collect personal information from children under the age of 18 without parental consent, although most users are expected to be above 18 years of age.
            </p>
          </section>

          <section className={styles.section}>
            <strong>10. Policy Updates</strong>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Updated policies will be posted on this page with a revised &quot;Last Updated&quot; date.
            </p>
          </section>

          <section className={styles.section}>
            <strong>11. Contact Information</strong>
            <p>
              If you have any questions or concerns regarding this Privacy Policy or your data, please contact the TACS official team at:
            </p>
            <p className={styles.contactEmail}>[TACS Official Email Placeholder]</p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};
