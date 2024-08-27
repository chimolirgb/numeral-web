"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./navigation.module.css";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [isMenuSmallOpen, setIsMenuSmallOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuSmallOpen(!isMenuSmallOpen);
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

            <ul className="menu-large">
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

            <div>
              <button className="_hamburger_menu_btn" onClick={toggleMenu}>
                <i className="bi bi-list"></i>
              </button>
            </div>
            {isMenuSmallOpen && (
              <div className="my-menu-small">
                <ul>
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
              </div>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
