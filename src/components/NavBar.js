import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../styles/NavBar.css';

const NavBar = ({ level, changeLevel }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="/">My Color Palette</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
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
      </div>
    </div>
  );
};

export default NavBar;
