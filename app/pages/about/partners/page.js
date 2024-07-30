// app/pages/about/partners/page.js
import Navigation from "@/components/navigation/navigation";
import styles from "./partners.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const Partners = () => {
  return (
    <>
      <Header />
    <div>
      <Navigation />
      <main>
        <h1 className={styles.title}>Our Partners</h1>
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
        
      </main>

      <Footer />
    </div>
    </>
  );
};

export default Partners;
