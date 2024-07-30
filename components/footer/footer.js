// components/Footer.js
import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5">
      <div className="container">
        <div className="row">
          {/* WHO WE ARE */}
          <div className="col-md-3 mb-4">
            <h5>WHO WE ARE</h5>
            <div>
              <div className="card-body">
                <p>
                  Numeral IOT is an electronic design and manufacturing company
                  which specializes in the research, development and production
                  of smart electronics devices.
                  <br />
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
                  <a
                    href="mailto:careers@numeraliot.com"
                    className="text-white"
                  >
                    Jobs | careers@numeraliot.com
                  </a>
                  <br />
                  <a href="mailto:rnd@numeraliot.com" className="text-white">
                    Ideas & Solutions | rnd@numeraliot.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* SOLUTIONS & PORTFOLIO */}
          <div className="col-md-3 mb-4">
            <h5>SOLUTIONS & PORTFOLIO</h5>
            <div>
              <div className="card-body">
                <p>
                  <Link href="/pages/solutions/hardware" className="text-white">
                    Hardware Manufacturing
                  </Link>
                  <br />
                  <Link href="/pages/solutions/user" className="text-white">
                    User Application
                  </Link>
                  <br />
                  <Link href="/pages/solutions/platform" className="text-white">
                    IOT Platform
                  </Link>
                  <br />
                  <Link href="/pages/solutions/network" className="text-white">
                    Network Connectivity
                  </Link>
                </p>
              </div>
            </div>
          </div>
          {/* QUICK LINKS */}

          <div className="col-md-3 mb-4">
            <h5>QUICK LINKS</h5>
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
                  <Link href="/pages/about/client" className="text-white">
                    Our Clients
                  </Link>
                  <br />
                  <Link href="/pages/about/partners" className="text-white">
                    Our Partners
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
            <h5>NEWSLETTER SIGNUP</h5>
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
        <div className="footer-copyright">
          <p>Copyright 2024 Numeral IOT | All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
