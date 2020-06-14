import React from 'react';
import '../styles/ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ColorBox = ({ background, name }) => {
  return (
    <CopyToClipboard text={background}>
      <div style={{ background }} className="color-box">
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">MORE</span>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
