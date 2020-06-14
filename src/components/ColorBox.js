import React from 'react';
import '../styles/ColorBox.css';

const ColorBox = ({ background, name }) => {
  return (
    <div style={{ backgroundColor: background }} className="color-box">
      <span>{name}</span>
      <span>MORE</span>
    </div>
  );
};

export default ColorBox;
