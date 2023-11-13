import React, { useState } from 'react';
import './Offers.css';

const Modal = ({ message, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const Offers = () => {
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [topUpAmount, setTopUpAmount] = useState(50);
  const [purchasedData, setPurchasedData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const dataOffers = [
    { id: 1, data: '1 GB', price: 50 },
    { id: 2, data: '2 GB', price: 100 },
    { id: 3, data: '5 GB', price: 200 },
    { id: 4, data: '10 GB', price: 350 },
    { id: 5, data: '15 GB', price: 500 },
    { id: 6, data: '20 GB', price: 700 },
    { id: 7, data: '25 GB', price: 850 },
    { id: 8, data: '30 GB', price: 1000 },
    { id: 9, data: '40 GB', price: 1200 },
    { id: 10, data: '50 GB', price: 1500 },
    { id: 11, data: '75 GB', price: 2000 },
    { id: 12, data: '100 GB', price: 2500 },
  ];

  const handleTopUp = (amount) => {
    setTopUpAmount(amount);
  };

  const handlePurchase = () => {
    if (selectedOffer && topUpAmount >= selectedOffer.price) {
      // Add logic to handle the purchase
      // For simplicity, let's just set the purchased data
      setPurchasedData(selectedOffer);
      setShowModal(true);
    } else {
      setShowModal(true); // Show the modal with an error message
    }
  };
  

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="offers-container">
      <h1>Mobile Data Offers</h1>
      <ul>
        {dataOffers.map((offer) => (
          <li key={offer.id}>
            <strong>{offer.data}</strong> for {offer.price} KES
          </li>
        ))}
      </ul>

      <div className="top-up-container">
        <label htmlFor="topUpSelect">Top Up: </label>
        <select
          id="topUpSelect"
          className="top-up-select"
          value={topUpAmount}
          onChange={(e) => handleTopUp(parseInt(e.target.value))}
        >
          {[50, 100, 200, 500, 1000, 1500, 2000, 2500].map((amount) => (
            <option key={amount} value={amount}>{amount} KES</option>
          ))}
        </select>
        <button className="top-up-button" onClick={handleTopUp}>
          Top Up
        </button>
      </div>

      <div>
        <label htmlFor="offerSelect">Select Offer: </label>
        <select
          id="offerSelect"
          className="offer-select"
          onChange={(e) => setSelectedOffer(dataOffers.find(offer => offer.id === parseInt(e.target.value)))}
        >
          <option value="">Select an offer</option>
          {dataOffers.map((offer) => (
            <option key={offer.id} value={offer.id}>{offer.data} for {offer.price} KES</option>
          ))}
        </select>
      </div>

      <button className="purchase-button" onClick={handlePurchase}>
        Purchase
      </button>

      {showModal && purchasedData && (
        <Modal
          message={`Congratulations! You have successfully purchased ${purchasedData.data} for ${purchasedData.price} KES.`}
          onClose={closeModal}
        />
      )}

      {showModal && !purchasedData && (
        <Modal
          message="Error: Insufficient airtime or no offer selected."
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Offers;
