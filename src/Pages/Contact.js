import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Contact.css"
const Contact = () => {
    return (
        <div className="contact-main">
            <div className="contact-nav">
                <Link to="/Home"><img src="./images/2.png" alt="logo" /></Link>
                <Link to="/About" className="contact-links">About Me</Link>
                <Link to="/Portfolio" className="contact-links">Portfolio</Link>
                <Link to="/Certifications" className="contact-links">Certifications</Link>
            </div>
            <form action="https://formsubmit.co/your@email.com" method="POST">
                <input type="text" name="name" required placeholder="Full Name" />
                <input type="email" name="email" required placeholder="Email Address" />
                <textarea placeholder="Your Message" name="message"></textarea>
                <button type="submit">Send</button>
            </form>
            <div className="contact-social-links">
                <a href="https://github.com/Oceanvibes209" target="_blank" rel="noreferrer" ><img src="./images/github-blue.png" alt="github logo" ></img></a>
                <a href="https://www.linkedin.com/in/alexandro-aguilera-aa3b43143/" target="_blank" rel="noreferrer"><img src="./images/linkedin.png" alt="linkedin logo" ></img></a>
            </div>
            <footer>
                <p>Website Designed and Created by Alexandro Aguilera</p>
                <a href="https://www.flaticon.com/free-icons/github" title="github icons" target="_blank" rel="noreferrer">Github icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons" target="_blank" rel="noreferrer">Linkedin icons created by riajulislam - Flaticon</a>
            </footer>
        </div>
    )
}

export default Contact