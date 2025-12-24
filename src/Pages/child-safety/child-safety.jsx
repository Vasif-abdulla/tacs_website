import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";

const ChildSafety = () => {
  return (
    <>
    <Nav/>
        <div style={styles.container}>
        <h1 style={styles.title}>Child Safety Standards</h1>

        <p style={styles.text}>
            AIMA – Blood Donation & Requests is committed to protecting children
            from sexual abuse and exploitation.
        </p>

        <p style={styles.text}>
            This app is intended for users aged 18 and above. We do not permit
            accounts for users under the age of 18 and do not allow the sharing of
            sexual or exploitative content.
        </p>

        <p style={styles.text}>
            Any content or users found to be in violation of these standards will
            be removed immediately.
        </p>

        <p style={styles.text}>
            Reports related to child safety can be submitted through the app or by
            contacting us at:
        </p>

        <p style={styles.email}>
            📧 <a href="mailto:tacs@meaec.edu.in">tacs@meaec.edu.in</a>
        </p>

        <p style={styles.text}>
            We comply with all applicable local and national child safety laws and
            cooperate with relevant authorities when required.
        </p>
        </div>
    <Footer/>
    </>
  );
};

const styles = {
  container: {
    marginTop: "80px",
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
  },
  title: {
    marginBottom: "20px",
  },
  text: {
    marginBottom: "15px",
  },
  email: {
    fontWeight: "bold",
  },
};

export default ChildSafety;
