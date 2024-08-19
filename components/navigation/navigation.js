"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./navigation.module.css";
import Image from "next/image";

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className={styles.nav}>
      {/* <div className={`${styles.hamburger} ${styles.mobileOnly}`} onClick={toggleNav}>
      </div> */}

      <ul className={`${styles.navList}`}>
        <li className={styles.logo}>
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={200} height={50} />
          </Link>
        </li>
        <li>
          {/* <Link href="/" className={styles.homeLink}> */}
          <Link href="/" className={styles.homeLink}>
            Home
          </Link>
        </li>
        {/* <li className="nav-with-dropdown">
          <h1 className={`${styles.about1} ${styles.pointerCursor}`}>About</h1>
          <div className="dropdown">
            <div className="dropdown_content">
              <ul> */}
        <li>
          <Link href="/pages/about/whoweare">About Us</Link>
        </li>
        {/* <li>
                  <Link href="/pages/about/client">Our Clients</Link>
                </li> */}
        {/* <li>
                  <Link href="/pages/about/partners">Our Partners</Link>
                </li> */}
        {/* <li>
          <Link href="/about/staff-login">Staff Login</Link>
        </li> */}
        {/* </ul>
            </div>
          </div>
        </li> */}

        {/* <li className="nav-with-dropdown">
          <h1 className={`${styles.about1} ${styles.pointerCursor}`}>
            Solutions
          </h1>
          <div className="dropdown">
            <div className="dropdown-content">
              <ul> */}
        <li>
          <Link href="/pages/solutions/hardware">Solutions</Link>
        </li>
        {/* <li>
                  <Link href="/pages/solutions/user">User Application</Link>
                </li>
                <li>
                  <Link href="/pages/solutions/platform">IOT Platform</Link>
                </li>
                <li>
                  <Link href="/pages/solutions/network">
                    Network Connectivity
                  </Link>
                </li> */}
        {/* </ul>
            </div>
          </div>
        </li> */}
        <li>
          <Link href="/pages/products">Products</Link>
        </li>
        <li>
          <Link href="/pages/history">History</Link>
        </li>
        <li>
          <Link href="/pages/blog">Blog</Link>
        </li>
        <li>
          <Link href="/pages/faqs">FAQs</Link>
        </li>
        <li>
          <Link href="/pages/contact" className={styles.homeLink}>
            {" "}
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
