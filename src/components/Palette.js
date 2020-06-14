import React, { useState } from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import '../styles/Palette.css';

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);

  const colorBoxes = palette.colors[level].map((color) => {
    return <ColorBox background={color.hex} name={color.name} />;
  });

  const changeLevel = (newLevel) => {
    setLevel(newLevel);
  };

  return (
    <div className="palette">
      <NavBar level={level} changeLevel={changeLevel} />
      <div className="palette-colors">{colorBoxes}</div>
      {/* footer */}
    </div>
  );
};
export default Palette;
