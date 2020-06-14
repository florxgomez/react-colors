import React from 'react';
import { Link } from 'react-router-dom';

const PaletteList = ({ palettes }) => {
  return (
    <div>
      <h1>My Color Palette</h1>
      {palettes.map((palette) => (
        <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
      ))}
    </div>
  );
};

export default PaletteList;
