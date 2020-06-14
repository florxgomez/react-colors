import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import SnackBar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../styles/NavBar.css';

const NavBar = ({ level, changeLevel, handleChange }) => {
  const [format, setFormat] = useState('hex');
  const [open, setOpen] = useState(false);

  const handleChangeFormat = (e) => {
    setFormat(e.target.value);
    setOpen(true);
    handleChange(e.target.value);
  };

  const closeSnackBar = () => {
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">My Color Palette</Link>
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
              backgroundColor: '#422fcc',
              outline: 'none',
              border: '2px solid #422fcc',
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
      <SnackBar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={open}
        autoHideDuration={3000}
        message={
          <span id="message-id">Format changed to {format.toUpperCase()}</span>
        }
        ContentProps={{ 'arial-describedby': 'message-id' }}
        onClose={closeSnackBar}
        action={[
          <IconButton
            onClick={closeSnackBar}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </header>
  );
};

export default NavBar;
