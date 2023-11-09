import React, { useState } from 'react';
import {Link } from "react-router-dom";
import "../Home.css"

const Home = () => {

        const [rotateValue, setRotateValue] = useState(0);
        // This line uses the useState hook to declare a piece of state called rotateValue and a function setRotateValue to update it. 
        // The initial value of rotateValue is set to 0. This state variable is used to control the rotation of a circle element.
      
        const rotateCircle = (degrees) => { // This line defines a function named rotateCircle that takes a degrees parameter. 
          // This function will be used to update the rotateValue state variable.
          const newRotateValue = rotateValue + degrees;
          // This line calculates a new value for rotateValue by adding the degrees parameter to its current value.
          setRotateValue(newRotateValue);
          // This line updates the rotateValue state variable with the new value, causing the component to re-render with the updated rotation value.
        };
      
      
        const handleUpBtnClick = () => {
          rotateCircle(-90);
          // This line calls the rotateCircle function with a value of -90 degrees when the "upBtn" (up button) is clicked, which rotates the circle counter-clockwise.
        };
      
        const handleDownBtnClick = () => {
          rotateCircle(90);
          // This line calls the rotateCircle function with a value of 90 degrees when the "upBtn" (up button) is clicked, which rotates the circle clockwise.
        };
      
        const circleStyle = {
          // This line defines an object called circleStyle, which is used to set the style of the circle element.
          transform: `rotate(${rotateValue}deg)`,
          // This line sets the CSS transform property to rotate the circle element by the number of degrees specified in the rotateValue state variable. 
          // This ensures that the circle's rotation visually updates when rotateValue changes.
        };
      
    return(
        <div className="main">
        <div className="information">
          <div className="overlay"></div>
          <img src="./images/2.png" alt="logo" className="main--logo" />
          <div className="circle" style={circleStyle}>
            <div className="feature one">
              
              <div>
                <h1>Who am I?</h1>
                <p>I am Alexandro Aguilera</p>
                <p>A Web Developer</p>
                <p>Certified by Bay Valley Tech</p>
              </div>
            </div>
            <div className="feature two">
              
              <div>
                <h1>Contact</h1>
                <p><a href="https://www.linkedin.com/in/alexandro-aguilera-aa3b43143/" target="_blank" rel="noreferrer">LinkedIn</a></p>
              </div>
            </div>
            <div className="feature three">
              
              <div>
                <h1>Portfolio</h1>
                <p><a href="https://aguileradetailing.wixsite.com/portfolio/resume" target="_blank" rel="noreferrer">Portfolio</a></p>
              </div>
            </div>
            <div className="feature four">
              
              <div>
                <h1>About Me</h1>
                <Link to="/About">Click me to find out</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="controls">
          <img src="./images/arrow.png" alt="arrow" className="upBtn" onClick={handleUpBtnClick} />
          <h2>Get to know me!</h2>
          <img src="./images/arrow.png" alt="arrow" className="downBtn" onClick={handleDownBtnClick} />
        </div>
      </div>

    )
  };
  
  export default Home;