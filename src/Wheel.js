// src/Wheel.js
import React, { useState } from 'react';
import './Wheel.css';

const offers = [
  { label: '10% Off', color: '#FF6347' },
  { label: '20% Off', color: '#FFD700' },
  { label: 'Buy 1 Get 1 Free', color: '#ADFF2F' },
  { label: '10% Off', color: '#FF6347' },
  { label: '20% Off', color: '#FFD700' },
  { label: 'Buy 1 Get 1 Free', color: '#ADFF2F' },
];

const Wheel = () => {
  const [rotation, setRotation] = useState(0);
  const [selectedOffer, setSelectedOffer] = useState(null);

  const spinWheel = () => {
    const randomSpin = Math.floor(Math.random() * 360) + 720; // Spin at least twice
    const finalRotation = rotation + randomSpin;
    setRotation(finalRotation);

    const selectedIndex = Math.floor(((finalRotation % 360) / 360) * offers.length);
    setSelectedOffer(offers[selectedIndex]);
  };

  return (
    <div className="wheel-container">
      <div
        className="wheel"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {offers.map((offer, index) => (
          <div
            key={index}
            className="segment"
            style={{
              backgroundColor: offer.color,
              transform: `rotate(${(index * 360) / offers.length}deg)`,
            }}
          >
            <span className="offer-label">{offer.label}</span>
          </div>
        ))}
      </div>
      <button onClick={spinWheel}>Spin the Wheel</button>
      {selectedOffer && (
        <div className="selected-offer">
          Congratulations! You won: {selectedOffer.label}
        </div>
      )}
    </div>
  );
};

export default Wheel;

