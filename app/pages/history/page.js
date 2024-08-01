"use client";
import React from "react";
import Navigation from "@/components/navigation/navigation";
import styles from "./history.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const History = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <Navigation />
      <div>
        <main>
          <h1>History</h1>
          <div className={styles.slidercontainer}>
            <Slider {...settings}>
              <div className={styles.card}>
                <h3 className={styles.h3}>
                  2000 In his early years the founder and CEO of Numeral IOT, Mr
                  Morris Mbetsa was a child that had profound interest in
                  electronics. At the young age of 10 years, he discovered that
                  his goats were far less expensive than a goat tracking device.
                  It was clear to him that the tracker wasn't made for the
                  normal African. From his young age, he grasped that Africans
                  had challenges that are unique and thus Africans needed tailor
                  made solutions from fellow Africans.
                </h3>
              </div>
              <div className={styles.card}>
                <h3 className={styles.h3}>
                  2008 At the young age of 18 years; Morris Mbetsa developed a
                  car security system. This system was a 1st of its kind in
                  Kenya; it was a time when smartphones were very rare to find.
                  The system enabled a user to control various functions of his
                  car through commands via a mobile phone. He came up with this
                  idea after he noted a rise in carjacking incidents across the
                  country.
                </h3>
              </div>
              <div className={styles.card}>
                <h3 className={styles.h3}>
                  2009 At the age of 19 years he developed a traffic monitoring
                  system. This system had multiple benefits to Kenya revenue
                  authority, Kenya traffic police and the Ministry of health but
                  despite showing great innovativeness at a young age, the
                  Kenyan Government never showed interest in tapping such
                  talents.
                </h3>
              </div>
              <div className={styles.card}>
                <h3 className={styles.h3}>
                  2014 Back in his home county, Morris built a passionate, multi
                  skilled team. Together, they developed a revenue collection
                  system for the Kilifi County Government. The system is still
                  in use up to date.
                </h3>
              </div>
              <div className={styles.card}>
                <h3 className={styles.h3}>
                  2015 Morris moved his operations to Nigeria. He started an
                  electronics manufacturing plant with the help of investors and
                  the Nigeria government. He spent a couple of years in Nigeria
                  and China. During this time he was in charge of mass producing
                  digital speed governors for the Nigeria market.
                </h3>
              </div>
              <div className={styles.card}>
                <h3 className={styles.h3}>
                  2018 With his own resources, he led his team to develop
                  Africa's 1st human carrying Drone. The Drone successfully
                  carried passengers, including Morris at an expansive field in
                  Isinya, Kajiado County. This invention has continued to
                  inspire a lot of Africans up to date.
                </h3>
              </div>
              <div className={styles.card}>
                <h3 className={styles.h3}>
                  End of 2018 The birth of Numeral IOT, his childhood dream is
                  now a reality. Morris Mbetsa and his Co-founders, set
                  themselves on a journey to make Numeral IOT the premier
                  technology in Africa. Design, manufacturing hub, and solution
                  provider in Africa by Africans.
                </h3>
              </div>
            </Slider>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default History;
