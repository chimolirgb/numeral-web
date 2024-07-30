import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/navigation/navigation";
import styles from "../components/navigation/navigation.module.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      <Header />
      <Navigation />
      <main className={styles.main}>
        <div className="hero-section">
          <div className={styles.landing}>
            <div className={styles.imageContainer}>
              <img
                src="/images/newsletter.jpg"
                alt="newsletter"
                className={styles.image}
              />
            </div>
            <div className={styles.gradient}>
              <div className={styles.overlay}>
                <p className={styles.ptop}>
                  We are on a mission to build Africa's largest IoT service
                  platform, powered by our proprietary hardware
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={styles.container1}>
            <div>
              <div className="composite-image">
                <div className="composite-image-container">
                  <div className="image-wrapper image-1-container">
                    <img
                      src="/images/discover-img1.png"
                      alt="Discover"
                      className={styles.image1}
                    />
                  </div>

                  <div className="image-wrapper image-2-container">
                    <img src="/images/discover-img2.jpg" alt="Discover" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.container2}>
              <h1 className={styles.h1}>
                About <span className={styles.highlight}>Us</span>
              </h1>
              <p>
                We are an IoT company with the vision of building Africa's
                largest IoT service platform, which will power utilities,
                telcos, and direct consumers. Aside from the platform,we
                understand Africa is a price sensitive market. That's why we
                have designed and set up a factory to mass produce our own
                sensors and devices, allowing us to onboard and connect
                customers to our platform at lower costs.
              </p>
              <Link href="/pages/about/whoweare" passHref>
                <button className={styles.discover}>Discover More</button>
              </Link>
            </div>
          </div>
        </div>

        <h1 className={styles.solutions}>Our Solutions</h1>
        <div className={styles.solutionsContainer}>
          <div className={styles.solution}>
            <h2>Hardware Manufacturing</h2>
            <p>
              We prioritize sensors and manufacturing techniques that allow us
              to create low-cost IoT devices. Our focus on these areas allows us
              to provide affordable solutions for IoT adoption. Whether it’s for
              industrial or personal use, we strive to make IoT technology
              accessible and cost-effective for all Africans.
            </p>

            <Link className={styles.readMore} href="/pages/solutions/hardware">
              Read More
            </Link>
          </div>
          <div className={styles.solution}>
            <h2>User Application</h2>
            <p>
              The software department complements the hardware team. We believe
              that technology should be easy to use and accessible to everyone.
              That’s why we design user-friendly software and mobile apps that
              allow users to monitor and manage data from their devices. Whether
              you’re a business owner...
            </p>
            <Link className={styles.readMore} href="/pages/solutions/user">
              Read More
            </Link>
          </div>
          <div className={styles.solution}>
            <h2>Network Connectivity</h2>
            <p>
              Our platform serves as a central hub for storing, processing, and
              analyzing data from the IoT devices. It also provides tools for
              visualizing this data in meaningful ways. We take cyber security
              and data protection seriously, and have implemented measures to
              ensure the safety and privacy of all data on...
            </p>
            <Link className={styles.readMore} href="/pages/solutions/network">
              Read More
            </Link>
          </div>
        </div>
        <h2 className={styles.solutions}>Our Products</h2>
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
        <h2 className={styles.solutions}>Why Choose Us</h2>

        <div className={styles.solutionsContainer}>
          <div className={styles.solution}>
            <h2 className={styles.solutions}>
              Innovative Technology and Solutions
            </h2>
            <p>
              We help customers connect and manage their devices, as well as
              solutions that help them analyse and make use of the data
              generated by those devices.
            </p>
          </div>

          <div className={styles.solution}>
            <h2 className={styles.solutions}>Quality and reliability</h2>
            <p>
              We commit to provide excellent customer service and support to
              help customers get the most out of their IoT solutions.
            </p>
          </div>
          <div className={styles.solution}>
            <h2 className={styles.solutions}>Transparency</h2>
            <p>
              We are open about how our products and services work. We empower
              our customers by providing them with the tools and support they
              need to succeed in their own IoT projects.
            </p>
          </div>

          <div className={styles.solution}>
            <h2 className={styles.solutions}>IOT Awareness</h2>
            <p>
              By increasing awareness of IoT, individuals and organisations can
              make more informed decisions about how to use this technology to
              their advantage.
            </p>
          </div>
        </div>
        <div className="container">
          <h2 className={styles.solutions}>Some of our esteemed Customers</h2>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <img
                src="/images/Equity-Bank.png"
                alt="Equity Bank"
                className={styles.customerImage}
              />
            </div>
            <div className="col-md-3 col-sm-6">
              <img
                src="/images/Kenya-Railways.png"
                alt="Kenya Railways"
                className={styles.customerImage}
              />
            </div>
            <div className="col-md-3 col-sm-6">
              <img
                src="/images/Kenya-Women-Microfinance-Bank.png"
                alt="Kenya Women Microfinance"
                className={styles.customerImage}
              />
            </div>
            <div className="col-md-3 col-sm-6">
              <img
                src="/images/kyoga-hauliers.jpg"
                alt="kyoga hauliers"
                className={styles.customerImage}
              />
            </div>
          </div>
        </div>
        <div className={styles.contacts}>
          <h2 className={styles.solutions}>Contact Us</h2>
          <div className={styles.customersContainer}>
            <div className="row">
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h2 className={styles.card_title}>Phone Number</h2>
                    <p className={styles.card_text}>+254 794 475 599</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h2 className={styles.card_title}>Office Location</h2>
                    <p className={styles.card_text}>
                      Solanite Limited godowns Mombasa Road, Carbanas stage near
                      Tuskys Headquarters
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h2 className={styles.card_title}>Email Address</h2>
                    <p className={styles.card_text}>info@numeraliot.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </main>

      <Footer />
    </>
  );
}

























