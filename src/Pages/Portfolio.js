import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Portfolio.css"
const Portfolio = () => {
    return (
        <div className="port-main">
            <div className="port-nav">
                <Link to="/Home"><img src="./images/2.png" alt="logo"/></Link>
                <Link to="/About" className="port-links">About Me</Link>
                <Link to="/Certifications" className="port-links">Certifications</Link>
                <Link to="/Contact" className="port-links">Contact</Link>
            </div>

                <div className="project">
                <h1>BVT Email Template</h1>
                <a href="https://aguilera-jetmail.netlify.app/" target="_blank" rel="noreferrer"><img src="./images/JetMail.png" alt=""></img></a>
                <p>My portfolio showcases some of my best work as a web developer. With experience gained from Bay Valley Tech, 
                    I am proficient in designing and programming websites that are both functional and visually appealing. 
                    One of the projects I am particularly proud of is my email template project replicating some of the most popular emails websites today. 
                    This project can be shown in desktop, tablet, and mobile view using breakpoints from Bootstrap.
                </p>
                </div>

                <div className="project">
                <h1>HylianBee's Website</h1>
                <a href="https://hylianbee-clips-webpage-aa.netlify.app/" target="_blank" rel="noreferrer"><img src="./images/HB-website.png" alt=""></img></a>
                <p>
                    A simple website made for a friend for her Twitch channel. It uses mainly HTML and CSS. It has various links to her socials, the banner linking to her offical Twitch
                    so users can gain instant access to see her channel and increase traffic. It has an updated list of games she has played with images linking to her twitch clips corresponding
                    to the game. There is also a list of future games she will play on her channel. The style of the website is inspired by all the things she loves.
                </p>
                </div>
                
                <div className="project">
                <h1>BVT Login UI</h1>
                <a href="https://login-ui-aguilera.netlify.app/" target="_blank" rel="noreferrer"><img src="./images/login-ui-final-draft.png" alt=""></img></a>
                <p>
                Login UI website with a space theme. This project used only flexbox to center and align everything. 
                This is able to shrink with the browser and convert into column when the browser size is to small to be easily readable.
                </p>
                </div>

                <div className="project">
                <h1>BVT Rock Paper Scissors</h1>
                <a href="https://rock-paper-scissors-project-aa.netlify.app/" target="_blank" rel="noreferrer"><img src="./images/BVT-JSfinal-RPSLS.png" alt=""></img></a>
                <p>
                    A spin on the classic rock paper scissors inspired by The Big Bang Theory. This final project for the BVT JavaScript is mainly JS with some CSS styling.
                    The goal was to showcase some JavaScript logic and make a fun game that works well and looks just as good.  
                </p>
                </div>

                <div className="project">
                <h1>Business Card</h1>
                <a href="https://react-aguilera-business-card.netlify.app/" target="_blank" rel="noreferrer"><img src="./images/React-business-card-aa.png" alt=""></img></a>
                <p>
                    A online business card showcasing some of my ability with ReactJS
                </p>
                </div>
                
                <div className="project">
                <h1>Random Dog Image Generator</h1>
                <a href="https://react-dog-imager.netlify.app/" target="_blank" rel="noreferrer"><img src="./images/dog-generator.png" alt=""></img></a>
                <p>
                    A ReactJS project showcasing skills using React and an API that fetches random dog images each time you click on the button
                </p>
                </div>

        </div>
    )
}

export default Portfolio