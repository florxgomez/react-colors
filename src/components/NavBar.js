import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../styles/NavBar.css';

const NavBar = ({ level, changeLevel, handleChange }) => {
  const [format, setFormat] = useState('hex');

  const handleChangeFormat = (e) => {
    setFormat(e.target.value);
    handleChange(e.target.value);
  };

  return (
    <header className="navbar">
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
      <div className="select-container">
        <Select value={format} onChange={handleChangeFormat}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
        </Select>
      </div>
    </header>
  );
};

export default NavBar;
