"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./navigation.module.css";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className={styles.navContainer}>
      <div className="container">
        <div className="row">
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={200}
                  height={50}
                />
              </Link>
            </div>
            <div className={styles.hamburger} onClick={toggleNav}>
              {navOpen ? <FaTimes /> : <FaBars />}
            </div>
            <ul
              className={`${styles.navList} ${
                navOpen ? styles.navListOpen : ""
              }`}
            >
              <li>
                <Link href="/" className={styles.homeLink}>
                  Home
                </Link>
              </li>

              <li>
                <Link href="/pages/about/whoweare">About</Link>
              </li>

              <li>
                <Link href="/pages/solutions/hardware">Solutions</Link>
              </li>

              <li>
                <Link href="/pages/products">Products</Link>
              </li>
              <li>
                <Link href="/pages/blog">Blog</Link>
              </li>
              <li>
                <Link href="/pages/contact" className={styles.contactLink}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
