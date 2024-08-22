import React from "react";
import Navigation from "@/components/navigation/navigation";
import styles from "./blog.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

const Blog = () => {
  const blogData = [
    {
      img1: '/images/iot6.jpg',
      img2: '/images/iot5.jpg',
      date: 'Aug 21, 2024',
      excerpt: 'Small blog writing 1...',
    },
    {
      img1: '/images/blog3.jpg',
      img2: '/images/blog4.jpg',
      date: 'Aug 22, 2024',
      excerpt: 'Small blog writing 2...',
    },
    {
      img1: '/images/blog5.jpg',
      img2: '/images/blog6.jpg',
      date: 'Aug 23, 2024',
      excerpt: 'Small blog writing 3...',
    },
  ];
  
  return (
    <>
      <Header />
      <div>
        <Navigation />
        <main>
          <div className={styles.sidebar}>
            <div className={styles.imageGrid}>
              {blogData.map((blog, index) => (
                <div key={index} className={styles.row}>
                  <div className={styles.imageCard}>
                    <img src={blog.img1} alt="Blog" />
                    <div className={styles.cardOverlay}>
                      <div className={styles.cardContent}>
                        <p className={styles.date}>{blog.date}</p>
                        <p className={styles.excerpt}>{blog.excerpt}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.imageCard}>
                    <img src={blog.img2} alt="Blog" />
                    <div className={styles.cardOverlay}>
                      <div className={styles.cardContent}>
                        <p className={styles.date}>{blog.date}</p>
                        <p className={styles.excerpt}>{blog.excerpt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.searchBar}>
              <input type="text" placeholder="Search..." />
            </div>

            <div className={styles.popularPosts}>
              <h3>Popular Posts</h3>
              <ul>
                <li><a href="#">Post 1</a></li>
                <li><a href="#">Post 2</a></li>
                <li><a href="#">Post 3</a></li>
              </ul>
            </div>

            <div className={styles.categories}>
              <h3>Categories</h3>
              <ul>
                <li><a href="#">Business</a></li>
                <li><a href="#">Technology</a></li>
                <li><a href="#">Tips</a></li>
                <li><a href="#">Privacy</a></li>
              </ul>
            </div>

            <div className={styles.tags}>
              <h3>Tags</h3>
              <ul>
                <li><a href="#">IT</a></li>
                <li><a href="#">Games</a></li>
                <li><a href="#">Fashion</a></li>
                <li><a href="#">Travel</a></li>
                <li><a href="#">Marketing</a></li>
              </ul>
            </div>

            <div className={styles.pagination}>
              <a href="#">Previous</a>
              <a href="#">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
