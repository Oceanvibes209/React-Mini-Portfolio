import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Certifications.css"

const Certifications = () => {
    return (
        <div className="certs-main">

            <div className="certs-nav">
                <Link to="/Home"><img src="./images/2.png" alt="logo"/></Link>
                <Link to="/About" className="certs-links">About Me</Link>
                <Link to="/Portfolio" className="certs-links">Portfolio</Link>
                <p><a href="https://www.linkedin.com/in/alexandro-aguilera-aa3b43143/" target="_blank" rel="noreferrer" className="certs-links">LinkedIn</a></p> {/* Will change it to a Contacts page later on*/}
            </div>

            <div>
                <p className="certs-body">
                    I began my journey at Bay Valley Tech in June 2023, delving into the world of web development and coding.
                    Starting with HTML and CSS, I grasped the fundamentals of web structure and styling, exploring the versatility of flexbox.
                    As I delved into JavaScript, the challenges of creating dynamic websites tested my understanding, but the process was rewarding.
                    The introduction of ReactJS added complexity, requiring me to connect and synchronize different components. Despite the trials, I gained a solid understanding and utilized React Browsers to create multi-page websites.
                    The certificates earned represent countless hours of dedication, marking my progress toward the ultimate goal of becoming a skilled full-stack developer.
                </p>
            </div>

            <div className="certs-images">

                <div className="certificate">
                    <img src="/images/BVT-HTML-Cert.png" alt="Certificates" loading="lazy"></img>
                </div>
                <div className="certificate">
                    <img src="/images/BVT-CSS-Cert.png" alt="Certificates" loading="lazy"></img>
                </div>
                <div className="certificate">
                    <img src="/images/BVT-CMS-Cert.png" alt="Certificates" loading="lazy"></img>
                </div>
                <div className="certificate">
                    <img src="/images/BVT-JavaScript-Cert.png" alt="Certificates" loading="lazy"></img>
                </div>

                <div className="certificate">
                    <img src="./images/FCC-Web-Design-Cert.png" alt="Certificates" loading="lazy"></img>
                </div>
            </div>

        </div>
    )
}

export default Certifications