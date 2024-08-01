"use client";
import React from "react";
import Navigation from "@/components/navigation/navigation";
import styles from "./blog.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

const Blog = () => {
  const blogs = [
    {
      date: "August 1, 2024",
      title: "Introduction to IoT",
      content:
        "IoT stands for Internet of Things. It refers to the network of physical objects embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the internet.",
      image: "/images/blog1.jpg",
    },
    {
      date: "July 31, 2024",
      title: "Benefits of IoT in Healthcare",
      content:
        "IoT is revolutionizing the healthcare industry by enabling remote monitoring, reducing errors, and improving the quality of care.",
      image: "/images/blog2.jpg",
    },
    {
      date: "July 30, 2024",
      title: "IoT in Smart Homes",
      content:
        "Smart home devices use IoT to provide homeowners with security, comfort, and energy efficiency through the control of smart devices.",
      image: "/images/blog3.jpg",
    },
    {
      date: "July 29, 2024",
      title: "Industrial IoT Applications",
      content:
        "Industrial IoT applications enhance manufacturing efficiency, reduce waste, and provide better resource management.",
      image: "/images/blog4.jpg",
    },
    {
      date: "July 28, 2024",
      title: "IoT in Agriculture",
      content:
        "IoT technology helps farmers monitor crop health, soil conditions, and livestock to increase productivity and reduce costs.",
      image: "/images/blog5.jpg",
    },
    {
      date: "July 27, 2024",
      title: "IoT Security Challenges",
      content:
        "With the proliferation of IoT devices, ensuring security and privacy has become a significant challenge.",
      image: "/images/blog6.jpg",
    },
  ];

  return (
    <>
      <Header />
      <div>
        <Navigation />
        <main>
          <div className="container">
            <div className={styles.blogContainer}>
              <h1>Blog</h1>
              {blogs.map((blog, index) => (
                <div key={index} className={styles.blogCard}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className={styles.blogImage}
                  />
                  <div className={styles.blogContent}>
                    <h2>{blog.title}</h2>
                    <p className={styles.blogDate}>{blog.date}</p>
                    <p>{blog.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};
export default Blog;
