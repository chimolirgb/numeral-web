import React from "react";
import Navigation from "@/components/navigation/navigation";
import styles from "./history.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";


const History = () => {

    return (
        <>
        <Header />
        <Navigation />
        <div>
            <main>
            <h1>History</h1>
            </main>
        </div>
        <Footer />

        </>

    );
};
export default History;