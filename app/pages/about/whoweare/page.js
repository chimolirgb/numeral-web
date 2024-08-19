import React from "react";
import Navigation from "@/components/navigation/navigation";
import styles from "./whoweare.module.css";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";

const WhoWeAre = () => {
  return (
    <>
      <Header />
      <div>
        <Navigation /> {/* Use Navigation component instead of Navbar */}
        <main>
          <div className="container">
            <div className="row">
              <div className="col-md-6 about-image-wrapper">
                <div className="composite-image-wrapper">
                  <div className="image-wrapper-inner">
                    <div className="about-composite-image about-composite-image-1">
                      <img src="/images/about1.jpg" alt="about" />
                    </div>
                    <div className="about-composite-image about-composite-image-2">
                      <img src="/images/about3.jpeg" alt="about" />
                    </div>
                  </div>
                  <div className="image-wrapper-inner-2">
                    <div className="about-composite-image about-composite-image-3">
                      <img src="/images/about4.jpeg" alt="about" />
                    </div>
                    <div className="about-composite-image about-composite-image-4"></div>
                  </div>
                </div>

                <div className={styles.content1}>
                  <div className={styles.container1}>
                    <div className={styles.content}>
                      <h2>
                        Who We <span style={{ color: "#009673" }}>Are</span>
                      </h2>
                      <p>
                        Our team is dedicated to helping our clients tap into
                        the vast potential of IoT technology, enabling them to
                        collect and analyze data from connected devices and make
                        more informed data-driven decisions. We offer a range of
                        services, including IoT consulting, system design and
                        deployment, and ongoing support and maintenance.
                      </p>
                      <p>
                        Our passion for technology and our deep understanding of
                        the African market allows us to deliver solutions that
                        are tailored to the unique needs of our clients. Whether
                        you are a small business looking to streamline your
                        operations or a large corporation seeking to transform
                        your industry, we have the expertise and experience to
                        help you succeed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className={styles.description}>Some of our Esteemed Clients</p>
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
          <div className="container">
            <div className="row">
              <div className="col-12">
                <img
                  src="/images/about-pic.jpg"
                  className={`${styles.image5} img-fluid`}
                />
                <div className={styles.content4}>
                  <div className={styles.container2}>
                    <div className={styles.content1}>
                      <h1 className={styles.title1}>Why Choose Us?</h1>
                      <p>
                        1- Innovative technology and solutions: We help
                        customers connect and manage their devices, as well as
                        solutions that help them analyse and make use of the
                        data generated by those devices.
                      </p>
                      <p>
                        2- Quality and reliability: We commit to provide
                        excellent customer service and support to help customers
                        get the most out of their IoT solutions.
                      </p>
                      <p>
                        3- Transparency : We are open about how our products and
                        services work. We empower our customers by providing
                        them with the tools and support they need to succeed in
                        their own IoT projects.
                      </p>
                      <p>
                        4 – IOT Awareness : We are building awareness and
                        understanding of IoT technology among potential
                        customers in Africa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <p className={styles.description}>Some of our partners</p>
              <div className={`container ${styles.customersContainer}`}>
                <div className={styles.wrapper}>
                  <div className="row">
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                      <img
                        src="/images/Deveint.jpg"
                        alt="Deveint"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                      <img
                        src="/images/Family-Bank.jpg"
                        alt="Family"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                      <img
                        src="/images/Lori-Systems.jpg"
                        alt="Lori Systems"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                      <img
                        src="/images/Baro-Group.jpg"
                        alt="Baro Group"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                      <img
                        src="/images/Jambo-pay.jpg"
                        alt="Jambo Pay"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                      <img
                        src="/images/Ministry-of-Health.jpg"
                        alt="Ministry of Health"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3 mb-4">
                      <img
                        src="/images/Track-and-Trace.jpg"
                        alt="Track and Trace"
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

export default WhoWeAre;
