// components/Footer.js
import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./footer.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          {/* WHO WE ARE */}
          <div className="col-md-3 mb-4">
            <h5>Who we are</h5>
            <div className="card-body">
              <div>
                <p className="card-text">
                  Numeral IOT is an electronic design and manufacturing company
                  which specializes in the research, development and production
                  of smart electronics devices.
                </p>
                <br />
              </div>
            </div>
          </div>
          {/* SOLUTIONS & PORTFOLIO */}
          <div className="col-md-3 mb-4">
            <div>
              <h5> Get in touch </h5>
              <div className={styles.infoItem}>
                <FaMapMarkerAlt className={styles.icon} />
                <span>Solanite Godowns, Mombasa Road, Nairobi, Kenya.</span>
              </div>
              <br />
              <div className={styles.infoItem}>
                <FaPhone className={styles.icon} />
                <span>0111014700</span>
              </div>
              <br />
              <div className={styles.infoItem}>
                <FaEnvelope className={styles.icon} />
                <a href="mailto:info@numeraliot.com" className="text-white">
                  info@numeraliot.com
                </a>
              </div>
              <br />
              <a href="mailto:careers@numeraliot.com" className="text-white">
                Jobs | careers@numeraliot.com
              </a>
            </div>
          </div>
          {/* QUICK LINKS */}

          <div className="col-md-3 mb-4">
            <h5>Quick links</h5>
            <div>
              <div className="card-body">
                <p>
                  <Link href="/pages/about/whoweare" className="text-white">
                    Who We Are
                  </Link>
                  <br />
                  <Link href="/pages/history" className="text-white">
                    Our History
                  </Link>
                  <br />
                  <Link href="/pages/blog" className="text-white">
                    Our Blogs
                  </Link>
                  <br />
                  <Link href="/pages/contact" className="text-white">
                    Our Contacts
                  </Link>
                  <br />
                  <Link href="/pages/solutions/hardware" className="text-white">
                    Our Solutions
                  </Link>
                  <br />
                  <Link href="/pages/products" className="text-white">
                    Our Products
                  </Link>
                  <br />
                  <Link href="/pages/contact" className="text-white">
                    Contact Us
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* NEWSLETTER SIGNUP */}
          <div className="col-md-3 mb-4">
            <h5>Newsletter Signup</h5>
            <div>
              <div className="card-body">
                <p>Subscribe to get latest updates</p>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button type="submit" className={styles.discover}>
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className={styles.footerCopyright}>
          <div className={styles.footerItem}>
            <p>Copyright © 2024 Numeral IoT </p>
          </div>
          <div className={styles.footerItem}>
            <p>All rights reserved</p>
          </div>
          <div className={styles.footerItem}>
            <p>Terms & Conditions</p>
          </div>
          <div className={styles.footerItem}>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
