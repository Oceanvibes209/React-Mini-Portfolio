import React from "react";
import { Link } from "react-router-dom";
import "../About.css"
const About = () => {
  return (
    <div className="about-main">
      <div className="about-nav">
        <Link to="/Home" className="about-links">Home</Link>
        <Link to="/Certifications" className="about-links">Certifications</Link>
        <Link to="/Portfolio" className="about-links">Portfolio</Link>
        <a href="https://www.linkedin.com/in/alexandro-aguilera-aa3b43143/" target="_blank" rel="noreferrer"><img src="./images/2.png" alt="logo"></img></a>
      </div>
      <div className="about-body">
        <h1 className="about-title">My Journey in Web Development</h1>
        <hr />
        <p>Hello, my name is Alexandro Aguilera, and I'd like to share my story as I embark on the exciting journey to become a junior web developer.</p>
        <p>At the age of 28, I find myself immersed in the ever-evolving world of technology. From a young age, I've been drawn to the possibilities that the digital realm offers. I've always had a knack for problem-solving and an insatiable curiosity, making web development a natural fit for me.</p>
        <p>My adventure began with a fundamental understanding of web technologies. I honed my skills in HTML, CSS, and JavaScript, laying the foundation for what was to come. These languages opened up a world of creativity and innovation, and I was eager to learn more.</p>
        <p>The introduction of Bootstrap and React.js brought a new dimension to my development journey. These frameworks allowed me to craft beautiful, responsive, and dynamic web applications. As I explored their potential, I knew I was on the right path.</p>
        <p>To bolster my knowledge and credentials, I pursued certificates from Bay Valley Tech. These certificates are more than pieces of paper; they symbolize dedication and the commitment to self-improvement. They're milestones on my road to becoming a Junior Full Stack Developer.</p>
        <p>But for me, web development is about more than just technical know-how. It's about solving real-world problems and making a positive impact. It's about collaborating with others, learning from their experiences, and giving back to the tech community.</p>
        <p>As I continue my studies and practical experiences, I'm not only building the technical skills required but also cultivating a mindset of innovation and adaptability. The world of web development is a dynamic one, and I'm excited to be part of it, constantly evolving and embracing change.</p>
        <p>My journey is far from over. I'm fueled by a passion for coding and an insatiable curiosity for the future. I see each project, each line of code, as an opportunity to learn and grow. I'm excited about the challenges that lie ahead and the people I'll meet along the way.</p>
      </div>
    </div>

  )
};

export default About;
