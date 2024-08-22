"use client";
import { useState } from "react";
import React from "react";
import Navigation from "@/components/navigation/navigation";
import styles from "./hardware.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const Hardware = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <Header />
      <div>
        <Navigation />
        <main>
          <div className="container">
            <div className="row">
              <div className={styles.flexContainer}>
                <div className={styles.textImagePair}>
                  <div className="col-6">
                    <div className={styles.textContent}>
                      <h1 className={styles.title}>Hardware Manufacturing</h1>
                      <p className={styles.content}>
                        We prioritize sensors and manufacturing techniques that
                        allow us to create low-cost IOT devices. Our focus on
                        these areas
                      </p>
                      {isExpanded && (
                        <>
                          <p>
                            allows usto provide affordable solutions for IoT
                            Adoption. Whether it’s for industrial or personal
                            use, we strive to make IoT technology accessible and
                            cost-effective for all Africans. A Surface Mount
                            Technology (SMT) machine is used to mount electronic
                            components to the surface of the printed circuit
                            board (PCB) as opposed to inserting components
                            through holes as with conventional assembly.
                          </p>
                          <p>
                            We produce our own custom devices because we
                            understand that Africa is a price-sensitive market
                            where low-cost devices are essential.
                          </p>
                        </>
                      )}
                      <button
                        onClick={toggleReadMore}
                        className={styles.readMoreButton}
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    </div>
                  </div>
                  <div className="col-6">
                    <img
                      src="/images/Hardware-2.jpg"
                      className={`${styles.image} img-fluid`}
                    />
                  </div>
                </div>

                <div className={styles.textImagePair}>
                  <div className="col-6">
                    <div className={styles.textContent}>
                      <h2 className={styles.title}>
                        The Manufacturing Process:
                      </h2>
                      <p>1. 001 Solder paste mixing</p>
                      <p>2. 002 PCB Stencil Printing</p>
                      <p>3. 003 PCB Automatic loading</p>

                      {isExpanded && (
                        <>
                          <p>4. 004 SMT Component Placing</p>
                          <p>5. 005 Reflow Oven heating</p>
                          <p>6. 006 Wave soldering</p>
                          <p>7. 007 Assembly Line</p>
                        </>
                      )}
                      <button
                        onClick={toggleReadMore}
                        className={styles.readMoreButton}
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    </div>
                  </div>
                  <div className="col-6">
                    <img
                      src="/images/Hardware-3.jpg"
                      className={`${styles.image} img-fluid`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.container} container`}>
            <div className="row">
              <div className="col-6">
                <div className={styles.imageContainer}>
                  <img
                    src="/images/new-01.jpg"
                    className={`${styles.images} img-fluid`}
                    alt="Network Solutions"
                  />
                  <div className={styles.card}>
                    <h1 className={styles.title}>Network Solutions</h1>
                    <p>
                      Our devices are designed with connectivity in mind. They
                      are equipped with network protocols such as WiFi and
                      cellular, allowing them to communicate over the internet
                      and connect to a wide range of networks. This enables them
                      to exchange data, receive updates, and be remotely
                      controlled from anywhere with an internet connection.
                      Whether you need to connect your devices at home, at the
                      office, or on the go, our devices have you covered.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
          <div className="container">
          
            <div className="row">
            
              <div className="col-6">
                <img
                  src="/images/Software-user2.jpg"
                  className={`${styles.image3} img-fluid`}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
              
                <div className={styles.container2}>
                  <div className={styles.content2}>
                  <h2>Software Development</h2>
                    <p>
                      The software department complements the hardware team. We
                      believe that technology should be easy to use and
                      accessible to everyone. That’s why we design user-friendly
                      software and mobile apps that allow users to monitor and
                      manage data from their devices. Whether you’re a business
                      owner looking to keep track of your asset, or a homeowner
                      interested in managing your energy consumption, our apps
                      provide the tools you need to stay connected and in
                      control.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img
                  src="/images/iso-01.png"
                  className={`${styles.image4} img-fluid`}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className={styles.container}>
                  <div className={styles.content}>
                    <h1 className={styles.title}>IOT Platform</h1>
                    <p>
                      Our platform serves as a central hub for storing,
                      processing, and analyzing data from the iot devices. It
                      also provides tools for visualizing this data in
                      meaningful ways. We take cyber security and data
                      protection seriously, and have implemented measures to
                      ensure the safety and privacy of all data on our platform.
                      Whether you’re a business looking to gain insights from
                      your data or an individual looking to manage your own
                      personal information, you can trust that our platform is
                      secure and reliable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Hardware;
