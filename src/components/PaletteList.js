import React from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
const PaletteList = ({ palettes }) => {
  return (
    <div>
      <MiniPalette />
      <h1>My Color Palette</h1>
      {palettes.map((palette) => (
        <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
      ))}
    </div>
  );
};

export default PaletteList;
