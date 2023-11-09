import React from "react";
import { Link } from "react-router-dom";
import "../Certifications.css"

const Certifications = () => {
    return (
        <div className="certs-main">

            <div className="certs-nav">
                <Link to="/Home" className="certs-links">Home</Link>
                <Link to="/About" className="certs-links">About Me</Link>
                <img src="./images/2.png" alt="logo"></img>
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