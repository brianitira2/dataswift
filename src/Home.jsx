import React from 'react';
import './Home.css';
import Footer from './Footer';

import { Link } from 'react-router-dom/dist';

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>DataSwift Network</h1>
        <p>Your source for mobile data offers</p>
      </header>

      <main>
        <section className="featured-offer">
          <h2>Featured Offer</h2>
          <div className="offer-details">
          <img src="https://i.ibb.co/MnXXFbz/generate-a-cool-3d-rainbow-colours-splash-text-s-1.jpg" alt="generate-a-cool-3d-rainbow-colours-splash-text-s-1" border="0"/>
            <div>
              <h3>Special Data Package</h3>
              <p>Get exclusive access to our limited-time data package. Stay connected without worrying about data limits.</p>
            </div>
          </div>
        </section>

        <section className="benefits">
          <h2>Why Choose DataSwift?</h2>
          <ul>
            <li>High-speed mobile data</li>
            <li>Flexible and affordable plans</li>
            <li>24/7 customer support</li>
           
          </ul>
        </section>
      </main>

      <footer>
       

        <Link to="/Dialer">
        <button className="connect-button">Connect to DataSwift</button>
        </Link>
      </footer>
      <Footer/>
    </div>
  );
};

export default Home;
