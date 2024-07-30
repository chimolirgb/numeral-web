import React from "react";
import Navigation from "@/components/navigation/navigation";
import styles from "./clients.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const Client = () => {
  return (
    <>
      <Header />
      <div>
        <Navigation />
        <main className={styles.hero}>
        <div className={styles.img}>
              <img
                src="/images/background1.jpg"
                alt="background"
                className="img-fluid"
              />
               </div>
               <div>
          <div className="container">
            
              <h1 className={styles.title}>Our Clients</h1>
              <p className={styles.description}>
                Some of our Esteemed Clients.
              </p>
              <div className={`container ${styles.customersContainer}`}>
                <div className={styles.wrapper}>
                  <div className="row">
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                      <img
                        src="/images/diamond-trust-bank.png"
                        alt="diamond trust bank"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                      <img
                        src="/images/Equity-Bank.png"
                        alt="Equity Bank"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                      <img
                        src="/images/Kenya-Railways.png"
                        alt="Kenya Railways"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                      <img
                        src="/images/Kenya-Women-Microfinance-Bank.png"
                        alt="Kenya Women Microfinance"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                      <img
                        src="/images/kyoga-hauliers.jpg"
                        alt="kyoga hauliers"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                      <img
                        src="/images/Multi-media-university.png"
                        alt="Multi-media university"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                      <img
                        src="/images/National-Bank.png"
                        alt="National Bank"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                      <img
                        src="/images/National-Cereals-and-Produce-Board.png"
                        alt="National Cereals and Produce Board"
                        className="img-fluid"
                      />
                    </div>
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

export default Client;
