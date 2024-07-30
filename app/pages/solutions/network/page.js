import React from "react";
import Navigation from "@/components/navigation/navigation";
import styles from "./network.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const Network = () => {
  return (
    <>
      <Header />
    <div>
      <Navigation />
      <main>
      <div className="container">
      <div className="row">
        <div className="col-6">
          <img src="/images/new-01.jpg" className={`${styles.image1} img-fluid`} />
        </div>
        </div>
      <div className={styles.container}>
      <div className={styles.content}>
        <h1 className="title">Network Solutions</h1>
        <p>
          Our devices are designed with connectivity in mind. They are equipped
          with network protocols such as WiFi and cellular, allowing them to
          communicate over the internet and connect to a wide range of networks.
          This enables them to exchange data, receive updates, and be remotely
          controlled from anywhere with an internet connection. Whether you need
          to connect your devices at home, at the office, or on the go, our
          devices have you covered.
        </p>
        </div>
        </div>

        </div>
      </main>

      <Footer />
    </div>
    </>
  );
};

export default Network;
