import React, { useState } from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import Footer from './Footer';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/PaletteStyles';

const Palette = ({ palette: { colors, paletteName, emoji, id }, classes }) => {
  const [format, setFormat] = useState('hex');
  const [level, setLevel] = useState(500);

  const colorBoxes = colors[level].map((color) => {
    return (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        moreUrl={`/palette/${id}/${color.id}`}
        showingFullPalette
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
    <div className={classes.palette}>
      <NavBar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
        showingAllColors
      />
      <div className={classes.paletteColors}>{colorBoxes}</div>
      <Footer paletteName={paletteName} emoji={emoji} />
    </div>
  );
};
export default withStyles(styles)(Palette);
