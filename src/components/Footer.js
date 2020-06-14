import React from 'react';

const Footer = ({ paletteName, emoji }) => {
  return (
    <footer className="palette-footer">
      {paletteName}
      <span className="emoji">{emoji}</span>
    </footer>
  );
};

export default Footer;
