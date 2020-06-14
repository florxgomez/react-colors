import React, { useState } from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import Footer from './Footer';
import '../styles/Palette.css';

const Palette = ({ palette: { colors, paletteName, emoji, id } }) => {
  const [format, setFormat] = useState('hex');
  const [level, setLevel] = useState(500);

  const colorBoxes = colors[level].map((color) => {
    return (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        moreUrl={`/palette/${id}/${color.id}`}
        showLink={true}
      />
    );
  });

  const changeLevel = (newLevel) => {
    setLevel(newLevel);
  };

  const changeFormat = (value) => {
    setFormat(value);
  };

  return (
    <div className="palette">
      <NavBar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
        showingAllColors
      />
      <div className="palette-colors">{colorBoxes}</div>
      <Footer paletteName={paletteName} emoji={emoji} />
    </div>
  );
};
export default Palette;
