import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import styles from "./header.module.css";
import "bootstrap/dist/css/bootstrap.min.css";


const Header = () => {
    return (

        <div className={styles.header}>
        <div className={styles.infoItem}>
          <FaPhone className={styles.icon} />
          <span>0111014700</span>
        </div>
        <div className={styles.infoItem}>
          <FaEnvelope className={styles.icon} />
          <span>info@numeraliot.com</span>
        </div>
        <div className={styles.infoItem}>
          <FaMapMarkerAlt className={styles.icon} />
          <span>Solanite Godowns, Mombasa Road, Nairobi, Kenya.</span>
        </div>
        <div className={styles.infoItem}>
          <FaClock className={styles.icon} />
          <span>Mon - Fri : 8:00am - 5:00pm, Sat 9:00am to 1:00pm</span>
        </div>
      </div>
      );
};

export default Header;