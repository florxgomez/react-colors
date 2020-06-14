import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import Footer from './Footer';

const SingleColorPalette = ({ palette, colorId }) => {
  const [format, setFormat] = useState('hex');

  const gatherShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  };

  const shades = gatherShades(palette, colorId);

  const changeFormat = (value) => {
    setFormat(value);
  };

  const colorBoxes = shades.map((color) => {
    return (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    );
  });
  const { paletteName, emoji, id } = palette;
  return (
    <div className="single-color-palette palette">
      <NavBar handleChange={changeFormat} showingAllColors={false} />
      <div className="palette-colors">
        {colorBoxes}
        <div className="go-back color-box">
          <Link to={`/palette/${id}`} className="back-button">
            GO BACK
          </Link>
        </div>
      </div>
      <Footer paletteName={paletteName} emoji={emoji} />
    </div>
  );
};

export default SingleColorPalette;
