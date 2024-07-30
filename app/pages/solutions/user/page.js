import React from "react";
import Navigation from "@/components/navigation/navigation";
import styles from "./user.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

const User = () => {
  return (
    <>
      <Header />
    <div>
      <Navigation />
      <main>
      <div className="container">
      <div className="row">
            <div className="col-6">
              <img src="/images/Software-user2.jpg" className={`${styles.image1} img-fluid`} />
            </div>
            </div>
            <div className="row">
            <div className="col-12">
      <div className={styles.container}>
      <div className={styles.content}>
        <h1 className="title">Software Development</h1>
        <p>
          The software department complements the hardware team. We believe that
          technology should be easy to use and accessible to everyone. That’s
          why we design user-friendly software and mobile apps that allow users
          to monitor and manage data from their devices. Whether you’re a
          business owner looking to keep track of your asset, or a homeowner
          interested in managing your energy consumption, our apps provide the
          tools you need to stay connected and in control.
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

export default User;
