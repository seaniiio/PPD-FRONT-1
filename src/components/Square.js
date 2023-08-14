import React from 'react';
import '../styles/Square.css';

const Square = ({ color, imageUrl, buttonText }) => {
  return (
    <div className="square">
      <img src={imageUrl} alt="Person" className="square-image" />
      <p className="date">날짜</p>
      <button className="square-button">{buttonText}</button>
    </div>
  );
};

export default Square;
