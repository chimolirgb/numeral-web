// components/about/about.js

import Navigation from "../components/navigation/navigation";
import Link from "next/link";
import styles from "./about.module.css";
import React from 'react';



const About = () => {
  return (
    <div>
      <Navigation /> {/* Use Navigation component instead of Navbar */}
      <main>
        <h1>About Us</h1>
        <p>
        Our team is dedicated to helping our clients tap into the vast potential of IoT technology, enabling them to collect and analyze data from connected devices and make more informed data-driven decisions. We offer a range of services, including IoT consulting, system design and deployment, and ongoing support and maintenance.
      </p>
      <p>
        Our passion for technology and our deep understanding of the African market allows us to deliver solutions that are tailored to the unique needs of our clients. Whether you are a small business looking to streamline your operations or a large corporation seeking to transform your industry, we have the expertise and experience to help you succeed.
      </p>
      </main>
    </div>
  );
}

export default About;
