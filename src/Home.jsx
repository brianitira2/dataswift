import React from 'react';
import './Home.css';

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
            <img src="your_offer_image_url" alt="Featured Offer" />
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
            {/* Add more benefits as needed */}
          </ul>
        </section>
      </main>

      <footer>
        <button className="connect-button">Connect to DataSwift</button>
      </footer>
    </div>
  );
};

export default Home;
