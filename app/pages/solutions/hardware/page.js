import React from "react";
import Navigation from "@/components/navigation/navigation";
import styles from "./hardware.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const Hardware = () => {
  return (
    <>
      <Header />
      <div>
        <Navigation />
        <main>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img
                  src="/images/Hardware-2.jpg"
                  className={`${styles.image1} img-fluid`}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className={styles.container}>
                  <div className={styles.content}>
                    <h1 className={styles.title}>Hardware Manufacturing</h1>
                    <p className={styles.content}>
                      We prioritize sensors and manufacturing techniques that
                      allow us to create low-cost IOT devices. Our focus on
                      these areas allows us to provide affordable solutions for
                      Iot Adoption. Whether it’s for industrial or personal use,
                      we strive to make IoT technology accessible and
                      cost-effective for all africans.
                    </p>
                    <p>
                      A Surface Mount Technology (SMT) machine is used to mount
                      electronic components to the surface of the printed
                      circuit board (PCB) as opposed to inserting components
                      through holes as with conventional assembly.
                    </p>
                    <p>
                      We produce our own custom devices because we understand
                      that Africa is a price-sensitive market where low-cost
                      devices are essential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <img
                  src="/images/Hardware-3.jpg"
                  className={`${styles.image2} img-fluid`}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className={styles.container1}>
                  <div className={styles.content1}>
                    <h2 className={styles.title}>The Manufacturing Process:</h2>
                    <p>1. 001 Solder paste mixing</p>
                    <p>2. 002 PCB Stencil Printing</p>
                    <p>3. 003 PCB Automatic loading</p>
                    <p>4. 004 SMT Component Placing</p>
                    <p>5. 005 Reflow Oven heating</p>
                    <p>6. 006 Wave soldering</p>
                    <p>7. 007 Assembly Line</p>
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
