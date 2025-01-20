import React, { useState } from "react";
import styles from "./ContactContainer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

export const ContactContainer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.mobile) {
      errors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      errors.mobile = "Invalid mobile number";
    }
    if (!formData.subject) errors.subject = "Subject is required";
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, handle submission
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <span className={styles.title}>Contact</span>
        </div>
        <div className={styles.row}>
          <div className={styles.left}>
            <form className={styles.form} onSubmit={handleSubmit} action="https://script.google.com/a/macros/meaec.edu.in/s/AKfycbx14w-p0_AZ3ICp6riiW5Bl-CKBggOCWReS-Do1R9zpPigohCYzPALUHv9NLlHWX1NRbQ/exec">
              <div className={styles.formRow}>
                <span className={styles.formTitle}>Give Us a Message</span>
              </div>
              <div className={styles.formItemRow}>
                <div className={styles.infoBox}>
                  <div className={styles.textBox}>
                    <input
                      type="text"
                      name="name"
                      className={styles.inputField}
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <span className={styles.error}>{errors.name}</span>}
                  </div>
                  <div className={styles.textBox}>
                    <input
                      type="text"
                      name="email"
                      className={styles.inputField}
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className={styles.error}>{errors.email}</span>}
                  </div>
                  <div className={styles.textBox}>
                    <input
                      type="text"
                      name="mobile"
                      className={styles.inputField}
                      placeholder="Mobile Number"
                      value={formData.mobile}
                      onChange={handleChange}
                    />
                    {errors.mobile && <span className={styles.error}>{errors.mobile}</span>}
                  </div>
                </div>
                <div className={styles.subjectBox}>
                  <input
                    type="text"
                    name="subject"
                    className={styles.inputField}
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && <span className={styles.error}>{errors.subject}</span>}
                </div>
                <div className={styles.txtArea}>
                  <textarea
                    name="message"
                    rows={8}
                    className={styles.inputField}
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && <span className={styles.error}>{errors.message}</span>}
                </div>
              </div>
              <div className={styles.formRow}>
                <button type="submit" className={styles.submitButton}>
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className={styles.right}>
            <div className={styles.rightRow}>
              <span className={styles.contactInfo}>Contact Info</span>
              <span className={styles.contactdesc}>
                Send a message through given form, If your enquiry is time
                sensitive please use below contact details.
              </span>
            </div>

            <div className={styles.rightRow}>
              <div className={styles.rightBox}>
                <div className={styles.colleft}>
                  <div className={styles.iconWrap}>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className={styles.icon}
                    />
                  </div>
                </div>
                <div className={styles.colRight}>
                  <span className={styles.rightTitle}>Post Address</span>
                  <span className={styles.rightInfo}>
                    Nellikunnu-Vengoor, Perinthalmanna, Malappuram, Kerala 679325
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.rightRow}>
              <div className={styles.rightBox}>
                <div className={styles.colleft}>
                  <div className={styles.iconWrap}>
                    <FontAwesomeIcon
                      icon={faPhone}
                      className={styles.icon}
                    />
                  </div>
                </div>
                <div className={styles.colRight}>
                  <span className={styles.rightTitle}>General Enquires</span>
                  <span className={styles.rightInfo}>+91 9061834479</span>
                </div>
              </div>
            </div>

            <div className={styles.rightRow}>
              <div className={styles.rightBox}>
                <div className={styles.colleft}>
                  <div className={styles.iconWrap}>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className={styles.icon}
                    />
                  </div>
                </div>
                <div className={styles.colRight}>
                  <span className={styles.rightTitle}>E-mail</span>
                  <span className={styles.rightInfo}>tacs@meaec.edu.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
