import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import Footer from './Footer';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/PaletteStyles';

const SingleColorPalette = ({ palette, colorId, classes }) => {
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
        showingFullPalette={false}
      />
    );
  });
  const { paletteName, emoji, id } = palette;
  return (
    <div className={classes.palette}>
      <NavBar handleChange={changeFormat} showingAllColors={false} />
      <div className={classes.paletteColors}>
        {colorBoxes}
        <div className={classes.goBack}>
          <Link to={`/palette/${id}`}>GO BACK</Link>
        </div>
      </div>
      <Footer paletteName={paletteName} emoji={emoji} />
    </div>
  );
};

export default withStyles(styles)(SingleColorPalette);
