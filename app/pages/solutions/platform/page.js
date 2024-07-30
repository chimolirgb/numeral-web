import React from "react";
import Navigation from "@/components/navigation/navigation";
import styles from "./platform.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const Platform = () => {
  return (
    <>
      <Header />
    <div>
      <Navigation />
      <main>
      <div className="container">
      <div className="row">
            <div className="col-6">
              <img src="/images/iso-01.png" className={`${styles.image1} img-fluid`} />
            </div>
            </div>
            <div className="row">
            <div className="col-12">
      <div className={styles.container}>
      <div className={styles.content}>
        <h1 className="title">IOT Platform</h1>
        <p>
          Our platform serves as a central hub for storing, processing, and
          analyzing data from the iot devices. It also provides tools for
          visualizing this data in meaningful ways. We take cyber security and
          data protection seriously, and have implemented measures to ensure the
          safety and privacy of all data on our platform. Whether you’re a
          business looking to gain insights from your data or an individual
          looking to manage your own personal information, you can trust that
          our platform is secure and reliable.
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

export default Platform;
