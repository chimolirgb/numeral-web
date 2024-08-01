"use client";
import React, { useState } from "react";
import Navigation from "@/components/navigation/navigation";
import styles from "./faqs.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

const Faqs = () => {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (cardIndex) => {
    setOpenCard(openCard === cardIndex ? null : cardIndex);
  };

  return (
    <>
      <Header />
      <div>
        <Navigation />
        <main>
          <div className={styles.faqContainer}>
            <div className={styles.card} onClick={() => toggleCard(1)}>
              <div className={styles.cardHeader}>
                <h3 className={styles.question}>What is Numeral IOT?</h3>
                <FontAwesomeIcon
                  icon={openCard === 1 ? faTimes : faPlus}
                  className={styles.icon}
                />
              </div>
              {openCard === 1 && (
                <div className={styles.answer}>
                  <p>
                    Numeral IOT is an electronic design and manufacturing company
                    which specializes in the research, development and production
                    of smart electronics devices.
                  </p>
                </div>
              )}
            </div>
            <div className={styles.card} onClick={() => toggleCard(2)}>
              <div className={styles.cardHeader}>
                <h3 className={styles.question}>What are the solutions provided by Numeral IOT?</h3>
                <FontAwesomeIcon
                  icon={openCard === 2 ? faTimes : faPlus}
                  className={styles.icon}
                />
              </div>
              {openCard === 2 && (
                <div className={styles.answer}>
                  <p>
                    Numeral IOT focuses on Hardware Manufacturing, Software
                    Development, UI/UX Design, and Digital Marketing.
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Faqs;
