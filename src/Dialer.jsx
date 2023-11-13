import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dialer.css';
import Footer from './Footer';

const Dialer = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sendButtonClicked, setSendButtonClicked] = useState(false);

  const handleButtonClick = (number) => {
    if (number === '*' && phoneNumber.length > 0) {
      // Delete the last digit
      setPhoneNumber((prevNumber) => prevNumber.slice(0, -1));
    } else {
      // Append the entered number
      setPhoneNumber((prevNumber) => prevNumber + number);
    }
  };

  const handleSendButtonClick = () => {
    if (phoneNumber === '*544#') {
      setIsLoading(true);
      setSendButtonClicked(true);
    } else {
      // Handle other phone numbers or actions as needed
      console.log('Sending phone number:', phoneNumber);
      setPhoneNumber('');
      setSendButtonClicked(true);
    }
  };

  const handleClearButtonClick = () => {
    setPhoneNumber('');
  };

  useEffect(() => {
    let timer;
    if (isLoading) {
      // Simulate processing time
      timer = setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    }

    return () => {
      // Clear the timer if the component unmounts or the phoneNumber changes
      clearTimeout(timer);
    };
  }, [isLoading, phoneNumber]);

  return (
    <div className="dialer-container">
      <h1>DataSwift Dialer</h1>

      <div className="phone-display">
        <input type="text" value={phoneNumber} readOnly />
      </div>

      <div className="button-grid">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '*', '#'].map((number) => (
          <button key={number} onClick={() => handleButtonClick(number)}>
            {number}
          </button>
        ))}
        <button className="clear-button" onClick={handleClearButtonClick}>
          Clear
        </button>
      </div>

      <button className="send-button" onClick={handleSendButtonClick}>
        Send
      </button>

      {sendButtonClicked && !isLoading && phoneNumber === '*544#' && (
        <Link to="/offers" className='redirect-link'>
          <div className="redirect-message">Click here to view offers</div>
        </Link>
      )}

      {isLoading && <div className="loader">DataSwift is processing your request...</div>}

      <Footer/>
    </div>
  );
};

export default Dialer;
