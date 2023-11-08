import './App.css';
import React, { useState } from 'react';

function App() {
  const [rotateValue, setRotateValue] = useState(0);

  const rotateCircle = (degrees) => {
    const newRotateValue = rotateValue + degrees;
    setRotateValue(newRotateValue);
  };

  const handleUpBtnClick = () => {
    rotateCircle(-90);
  };

  const handleDownBtnClick = () => {
    rotateCircle(90);
  };

  const circleStyle = {
    transform: `rotate(${rotateValue}deg)`,
  };


  return (
    <div className="main">
      <div className="information">
        <div className="overlay"></div>
        <img src="./images/2.png" alt="logo" className="main--logo"/>
        <div className="circle" style={circleStyle}>
          <div className="feature one">
            {/* <img src="./images/camera.png" alt="" /> */}
            <div>
              <h1>Who am I?</h1>
              <p>I am Alexandro Aguilera</p>
              <p>A Web Developer</p>
              <p>Certified by Bay Valley Tech</p>        
            </div>
          </div>
          <div className="feature two">
            {/* <img src="./images/processor.png" alt="" /> */}
            <div>
              <h1>Contact</h1>
              <p><a href="https://www.linkedin.com/in/alexandro-aguilera-aa3b43143/" target="_blank" rel="noreferrer">LinkedIn</a></p>        
            </div>
          </div>
          <div className="feature three">
            {/* <img src="./images/display.png" alt="" /> */}
            <div>
              <h1>Portfolio</h1>
              <p><a href="https://aguileradetailing.wixsite.com/portfolio/resume" target="_blank" rel="noreferrer">Portfolio</a></p>        
            </div>
          </div>
          <div className="feature four">
            {/* <img src="./images/battery.png" alt="" /> */}
            <div>
              <h1>About</h1>
              <p>about link</p>        
            </div>
          </div>
        </div>
      </div>
      <div className="controls">
        <img src="./images/arrow.png" alt="arrow" className="upBtn" onClick={handleUpBtnClick}/>
        <h2>Get to know me!</h2>
        <img src="./images/arrow.png" alt="arrow" className="downBtn" onClick={handleDownBtnClick}/>
      </div>

    </div>
  );
}

export default App;
