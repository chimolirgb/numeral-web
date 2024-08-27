import React from "react";
import Navigation from "@/components/navigation/navigation";
import styles from "./contact.module.css";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <>
      <Header />
      <div>
        <Navigation />
        <main>
          <div className="container">
            <h3 className={styles.h3}>Contact <span style={{ color: "#009673" }}>Us</span></h3>
            <div className={styles.contact_form_container}>
              <form className={styles.contact_form}>
                <div className={styles.form_row}>
                  <div className={styles.form_group}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                    />
                  </div>
                  <div className={styles.form_group}>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required />
                  </div>
                </div>
                <div className={styles.form_row}>
                  <div className={styles.form_group}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className={styles.form_group}>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      required
                    />
                  </div>
                </div>
                <div className={styles.form_row}>
                  <div className={styles.form_group}>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className={styles.form_row}>
                  <button type="submit" className={styles.submit_button}>
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
