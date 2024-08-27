import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/navigation/navigation";
import styles from "../components/navigation/navigation.module.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faCheckCircle,
  faLock,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <div className={styles.header}>
        <Header />
        <Navigation />
      </div>

      <main className={styles.main}>
        <div className={styles.landing}>
          <div className={styles.imageContainer}>
            <img
              src="/images/landing7.jpg"
              alt="newsletter"
              className={styles.image}
            />
          </div>

          <div className={styles.gradient}>
            <div className={styles.overlay}>
              <p className={styles.ptop}>
                We are on a mission to build Africa's largest IoT service
                platform, powered by our
                proprietary hardware
              </p>
            </div>
          </div>
        </div>

        <div className={styles.text_img}>
          <div className="container">
            <div className="row">
              <div className={styles.container1}>
                <div className="composite-image">
                  <div className="composite-image-container">
                    <div className="image-wrapper image-1-container">
                      <img
                        src="/images/download2.jpeg"
                        alt="Discover"
                        className={styles.image1}
                      />
                    </div>

                    <div className="image-wrapper image-2-container">
                      <img
                        src="/images/downlo.jpeg"
                        alt="Discover"
                        className={styles.image1}
                      />
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
          </div>
        </div>
        <div className="container">
          <div className="row">
            <h1 className={styles.solutions}>Our <span className={styles.highlight}>Solutions</span></h1>
            <div className={styles.solutionsContainer}>
              <div className={styles.solution}>
                <h2>Hardware Manufacturing</h2>
                <p>
                  We prioritize sensors and manufacturing techniques that allow
                  us to create low-cost IoT devices. Our focus on these areas
                  allows us to provide affordable solutions for IoT adoption.
                  Whether it’s for industrial or personal use, we strive to make
                  IoT technology accessible and cost-effective for all Africans.
                </p>

                <Link
                  className={styles.readMore}
                  href="/pages/solutions/hardware"
                >
                  Read More
                </Link>
              </div>
              <div className={styles.solution}>
                <h2>User Application</h2>
                <p>
                  The software department complements the hardware team. We
                  believe that technology should be easy to use and accessible
                  to everyone. That’s why we design user-friendly software and
                  mobile apps that allow users to monitor and manage data from
                  their devices. Whether you’re a business owner...
                </p>
                <Link className={styles.readMore} href="/pages/solutions/user">
                  Read More
                </Link>
              </div>
              <div className={styles.solution}>
                <h2>Network Connectivity</h2>
                <p>
                  Our platform serves as a central hub for storing, processing,
                  and analyzing data from the IoT devices. It also provides
                  tools for visualizing this data in meaningful ways. We take
                  cyber security and data protection seriously, and have
                  implemented measures to ensure the safety and privacy of all
                  data on...
                </p>
                <Link
                  className={styles.readMore}
                  href="/pages/solutions/network"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.text_img2}>
          <div className="container">
            <div className="row">
              <h3 className={styles.solutions1}>Our Products</h3>
              <div className={styles.productContainer}>
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
                <div className={styles.flipCard}>
                  <div className={styles.flipCardInner}>
                    <div className={styles.flipCardFront}>
                      <img
                        src="/images/bundi.jpeg"
                        alt="Bundi"
                        className={`card-img-top ${styles.customImage}`}
                      />
                    </div>
                    <div className={styles.flipCardBack}>
                      <h5>Bundi Vehicle Tracking & Security</h5>
                      <p className={styles.flipCardText}>
                        Numeral IOT has created firmware, hardware, and software
                        for the BUNDI tracking device and car security system.
                        The tracking device is intended to serve Kenya's and
                        East Africa's large motorcycle and tuk tuk population.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.flipCard}>
                  <div className={styles.flipCardInner}>
                    <div className={styles.flipCardFront}>
                      <img
                        src="/images/gas.jpeg"
                        alt="Gas"
                        className={`card-img-top ${styles.customImage}`}
                      />
                    </div>
                    <div className={styles.flipCardBack}>
                      <h5>NIOT Smart Power Meter</h5>
                      <p className={styles.flipCardText}>
                        Smart meters communicate through a home area network
                        (HAN) when inside your home to send consumption details
                        to your Phone or computer.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.flipCard}>
                  <div className={styles.flipCardInner}>
                    <div className={styles.flipCardFront}>
                      <img
                        src="/images/Lipa-Cashless.jpg"
                        alt="Lipa Cashless"
                        className={`card-img-top ${styles.customImage}`}
                      />
                    </div>
                    <div className={styles.flipCardBack}>
                      <h5>Lipa Cashless System</h5>
                      <p className={styles.flipCardText}>
                        The Lipa Cashless system provides seamless and secure
                        payment solutions, enhancing convenience for users and
                        vendors alike.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <h2 className={styles.solutions3}>Why Cho<span className={styles.highlight}>ose Us</span></h2>

            <div className={styles.solutionsContainer}>
              <div className={styles.solution}>
                <div className="icon-wrapper">
                  <FontAwesomeIcon
                    icon={faLaptopCode}
                    className={styles.icon}
                  />
                  <h2 className={styles.solutions}>
                    Innovative Technology and Solutions
                  </h2>
                </div>
                <p>
                  We help customers connect and manage their devices, as well as
                  solutions that help them analyse and make use of the data
                  generated by those devices.
                </p>
              </div>

              <div className={styles.solution}>
                <div className="icon-wrapper">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className={styles.icon}
                  />
                  <h2 className={styles.solutions}>Quality and Reliability</h2>
                </div>
                <p>
                  We commit to provide excellent customer service and support to
                  help customers get the most out of their IoT solutions.
                </p>
              </div>

              <div className={styles.solution}>
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faLock} className={styles.icon} />
                  <h2 className={styles.solutions}>Transparency</h2>
                </div>

                <p>
                  We are open about how our products and services work. We
                  empower our customers by providing them with the tools and
                  support they need to succeed in their own IoT projects.
                </p>
              </div>

              <div className={styles.solution}>
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faLightbulb} className={styles.icon} />
                  <h2 className={styles.solutions}>IoT Awareness</h2>
                </div>
                <p>
                  By increasing awareness of IoT, individuals and organisations
                  can make more informed decisions about how to use this
                  technology to their advantage.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.text_img3}>
          <div className="container">
            <div className="row">
              <h2 className={styles.solutions4}>
                Some Of Our <span className={styles.highlight}>Esteemed Customers</span>
              </h2>

              <div className={styles.customerContainer}>
                <div className={styles.cussy}>
                  <img src="/images/Equity-Bank.png" alt="Equity Bank" />
                </div>
                <div className={styles.centralImage}>
                  <img src="/images/prod1.jpg" alt="Central Image" />
                </div>
                <div className={styles.cussy}>
                  <img src="/images/Kenya-Railways.png" alt="Kenya Railways" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className={styles.customerContainer}>
                <div className={styles.cussy}>
                  <img
                    src="/images/Kenya-Women-Microfinance-Bank.png"
                    alt="Kenya Women Microfinance"
                  />
                </div>
                <div className={styles.cussy}>
                  <img src="/images/kyoga-hauliers.jpg" alt="kyoga hauliers" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className={styles.contacts}>
              <h2 className={styles.solutions5}>Contact <span className={styles.highlight}>Us</span></h2>
              <div className={styles.customersContainer}>
                <div className={styles.card}>
                  <div className={styles.cardBody}>
                    <h2 className={styles.cardTitle}>Phone Number</h2>
                    <p className={styles.cardText}>+254 794 475 599</p>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardBody}>
                    <h2 className={styles.cardTitle}>Office Location</h2>
                    <p className={styles.cardText}>
                      Solanite Limited godowns Mombasa Road, Carbanas stage near
                      Tuskys Headquarters
                    </p>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardBody}>
                    <h2 className={styles.cardTitle}>Email Address</h2>
                    <p className={styles.cardText}>info@numeraliot.com</p>
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
