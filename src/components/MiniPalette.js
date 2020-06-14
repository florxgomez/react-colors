import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  main: {
    backgroundColor: 'purple',
    border: '3px solid teal',
  },
};

const MiniPalette = ({ classes }) => {
  return (
    <div className={classes.main}>
      <h1>Mini Palette</h1>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
