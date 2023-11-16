import React from "react";
import { Link } from "react-router-dom";
import "../Certifications.css"

const Certifications = () => {
    return (
        <div className="certs-main">

            <div className="certs-nav">
                <Link to="/Home" className="certs-links">Home</Link>
                <Link to="/About" className="certs-links">About Me</Link>
                <Link to="/Portfolio" className="about-links">Portfolio</Link>
                <a href="https://www.linkedin.com/in/alexandro-aguilera-aa3b43143/" target="_blank" rel="noreferrer"><img src="./images/2.png" alt="logo"></img></a>
            </div>

            <div className="certs-images">

                <div className="certificate">
                    <img src="/images/BVT-HTML-Cert.png" alt="Certificates"></img>
                </div>
                <div className="certificate">
                    <img src="/images/BVT-CSS-Cert.png" alt="Certificates"></img>
                </div>
                <div className="certificate">
                    <img src="/images/BVT-CMS-Cert.png" alt="Certificates"></img>
                </div>
                <div className="certificate">
                    <img src="/images/BVT-JavaScript-Cert.png" alt="Certificates"></img>
                </div>

                <div className="certificate">
                    <img src="./images/FCC-Web-Design-Cert.png" alt="Certificates"></img>
                </div>
            </div>

        </div>
    )
}

export default Certifications