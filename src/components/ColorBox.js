import React, { useState, useEffect } from 'react';
import '../styles/ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ColorBox = ({ background, name }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => setCopied(false), 1500);
  }, [copied]);

  const changeCopyState = () => {
    setCopied(true);
  };

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background }} className="color-box">
        <div
          style={{ background }}
          className={`copy-overlay ${copied && 'show'}`}
        />
          <div className={`copy-msg ${copied && 'show'}`}>
          <h1>Copied!</h1>
          <p>{background}</p>
        </div>
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
