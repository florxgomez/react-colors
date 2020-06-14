import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
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
      <div className="slider">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={changeLevel}
          trackStyle={{ backgroundColor: 'transparent' }}
          handleStyle={{
            backgroundColor: 'purple',
            outline: 'none',
            border: '2px solid purple',
            boxShadow: 'none',
            width: '13px',
            height: '13px',
            marginLeft: '-7px',
            marginTop: '-3px',
          }}
          railStyle={{ height: '8px' }}
        />
      </div>
      {/* navbar */}
      <div className="palette-colors">{colorBoxes}</div>
      {/* footer */}
    </div>
  );
};
export default Palette;
