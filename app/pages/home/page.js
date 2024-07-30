// pages/index.js
import React from 'react';
import Link from 'next/link';

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <nav>
                <ul>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/solutions">Solutions</Link></li>
                    <li><Link href="/product">Product</Link></li>
                    <li><Link href="/faqs">FAQs</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
