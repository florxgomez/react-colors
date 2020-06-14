import React, { useState } from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import '../styles/Palette.css';

const Palette = ({ palette: { colors, paletteName, emoji } }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  const colorBoxes = colors[level].map((color) => {
    return (
      <ColorBox background={color[format]} name={color.name} key={color.id} />
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
      />
      <div className="palette-colors">{colorBoxes}</div>
      <footer className="palette-footer">
        {paletteName}
        <span className="emoji">{emoji}</span>
      </footer>
    </div>
  );
};
export default Palette;
