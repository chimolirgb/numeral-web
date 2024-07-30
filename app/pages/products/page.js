import React from "react";
import Navigation from "@/components/navigation/navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import styles from "./products.module.css";



const Products = ()=>{

    return (
        <>
        <Header />
        <Navigation />
        <main>
        <div>
            <h1 className={styles.h1}>Products</h1>
            <div className="container">
          <div className="row">
            <div className="col-3">
              <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <img
                      src="/images/simba.png"
                      alt="Simba"
                      className={`card-img-top ${styles.customImage}`}
                    />
                  </div>
                  <div className={styles.flipCardBack}>
                    <h5>Simba 4G Speed Governor</h5>
                    <p className={styles.flipCardText}>
                      We have been licensed to deploy IoT devices that track,
                      limit speed, and transmit live data to the National
                      Transport and Safety Authority. So far, our Nairobi
                      factory has produced and connected over 15,000 devices
                      under the brand name Simba Speed Governor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <img
                      src="/images/bundi.jpeg"
                      alt="bundi"
                      className={`card-img-top ${styles.customImage}`}
                    />
                  </div>
                  <div className={styles.flipCardBack}>
                    <h5>Bundi Vehicle Tracking & Security</h5>
                    <p className={styles.flipCardText}>
                      Numeral IOT has created firmware, hardware, and software
                      for the BUNDI tracking device and car security system. The
                      tracking device is intended to serve Kenya's and East
                      Africa's large motorcycle and tuk tuk population.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className={styles.flipCard}>
                <div className={styles.flipCardInner}>
                  <div className={styles.flipCardFront}>
                    <img
                      src="/images/gas.jpeg"
                      alt="gas"
                      className={`card-img-top ${styles.customImage}`}
                    />
                  </div>
                  <div className={styles.flipCardBack}>
                    <h5>NIOT Smart Power Meter</h5>
                    <p className={styles.flipCardText}>
                      Smart meters communicate through a home area network (HAN)
                      when inside your home to send consumption details to your
                      Phone or computer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card">
                <img
                  src="/images/Lipa-Cashless.jpg"
                  alt="bundi"
                  className={`card-img-top ${styles.customImage}`}
                />
              </div>
            </div>
          </div>
        </div>
        </div>
        </main>
        <Footer />
        </>

    );
};

export default Products