import React from 'react';
import ColorBox from './ColorBox';
import '../styles/Palette.css';

const Palette = ({ colors }) => {
  const colorBoxes = colors.map((color) => {
    return <ColorBox background={color.color} name={color.name} />;
  });

  return (
    <div className="palette">
      {/* navbar */}
      <div className="palette-colors">{colorBoxes}</div>
      {/* footer */}
    </div>
  );
};
export default Palette;
