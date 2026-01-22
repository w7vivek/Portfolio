import React, { useState, useEffect } from "react";
import profileImage from "../../public/profile_image.jpeg";
import "./s.css";

const Portfolio = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        document.body.className = isDarkMode ? "dark-mode" : "light-mode";
    }, [isDarkMode]);

    return (
        <div className={isDarkMode ? "dark-mode" : "light-mode"}>
            <div className="main">
                <div className="container">
                    {/* Profile Section */}
                    <div className="contobjec">
                        <button
                            className="theme-btn"
                            onClick={() => setIsDarkMode(!isDarkMode)}
                        >
                            {isDarkMode ? "🌙" : "☀️"}
                        </button>

                        <div className="status">
                            <span className="dot"></span>
                            Available to work
                        </div>

                        <h1 className="name">Vivek Mahesh Kumar Wadhwani</h1>
                        <img src={profileImage} className="img" alt="Profile" />
                        <h2>Web Developer</h2>
                    </div>

                    {/* About Section */}
                    <div className="about">
                        <h1 className="int">About Me</h1>
                        <p>
                            Vivek is a skilled Full-Stack Web Developer specializing in
                            JavaScript, React.js, and backend technologies. Passionate about
                            building real-world, scalable web applications.
                        </p>

                        <div className="about_in">
                            <div>
                                <p>Ahmedabad, India</p>
                                <p>Web Developer & Product Designer</p>
                            </div>
                            <div>
                                <p>Full Stack & Software Developer</p>
                                <p>GLS University</p>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="follow">
                        <h3 className="int">Follow Me</h3>
                        <a href="https://x.com/w_vivek181" target="_blank" rel="noreferrer">
                            Twitter
                        </a>
                        <a
                            href="https://www.linkedin.com/in/wadhwani-vivek-mahesh-kumar-b838a2259/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://www.instagram.com/_w_vivek/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Instagram
                        </a>
                    </div>
                </div>

                {/* Interests */}
                <div className="interest">
                    <h2 className="int">Interests</h2>
                    <ul className="interestclass">
                        <li>Coding</li>
                        <li>Gaming</li>
                        <li>Editing</li>
                        <li>Sports</li>
                    </ul>
                </div>

                {/* Skills */}
                <div className="done">
                    <h2>Skills</h2>
                    <div className="tech">
                        <button>HTML</button>
                        <button>CSS</button>
                        <button>Bootstrap</button>
                        <button>React.js</button>
                        <button>Next.js</button>
                        <button>Git & GitHub</button>
                    </div>

                    <h2>Programming</h2>
                    <div className="prog">
                        <button>C++</button>
                        <button>Java</button>
                        <button>Python</button>
                    </div>
                </div>

                {/* Projects */}
                <div className="projects">
                    <h1 className="int">Projects</h1>

                    <div className="project-card">
                        <h3>AI Resume Generator</h3>
                        <p>
                            Web-based resume generator that helps users create professional,
                            structured resumes through a clean and intuitive interface.
                        </p>
                        <a
                            href="https://w7vivek.github.io/ai-resume-generator/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Demo
                        </a>
                    </div>

                    <div className="project-card">
                        <h3>AI Chat Application</h3>
                        <p>
                            Real-time chat application with dynamic message handling and
                            interactive UI.
                        </p>
                        <a
                            href="https://w7vivek.github.io/ai-chat/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Demo
                        </a>
                    </div>

                    <div className="project-card">
                        <div className="project-card final-project">
                            <div className="final-badge">Final Year Project</div>

                            <h3>WorkforceHub</h3>
                            <p>
                                Full-stack workforce management system developed in collaboration
                                with <a href="https://mspconcepts.com" target="_blank" rel="noreferrer">MSP Concepts</a>, focusing on employee management, attendance,
                                and scheduling.
                            </p>
                        </div>
                    </div>

                    <div className="project-card">
                        <h3>ProductHub</h3>
                        <p>
                            E-commerce demo application built with React Router and deployed
                            on GitHub Pages.
                        </p>
                        <a
                            href="https://w7vivek.github.io/ProductHub/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Live Demo
                        </a>
                    </div>
                </div>

                {/* Training Section */}
                <div className="training">
                    <h1 className="int">Training</h1>

                    <div className="training-card">
                        <h3>Full Stack Web Development</h3>
                        <p>
                            Completed online training from Elevance Skills with hands-on
                            project experience, including development of a Twitter v2–like
                            production-level website.
                        </p>
                        <a
                            href="https://www.elevanceskills.com/certificates"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Certificate
                        </a>
                    </div>
                </div>

                {/* Certificates Section */}
                <div className="certificates">
                    <h1 className="int">Certificates</h1>

                    <div className="certificate-card">
                        <h3>Meta Front-End Developer</h3>
                        <p>
                            Professional certification covering HTML, CSS, JavaScript,
                            React, and modern frontend development practices.
                        </p>
                        <a
                            href="https://www.coursera.org/account/accomplishments/verify/S4M3NM8C2Z9W"
                            target="_blank"
                            rel="noreferrer"
                        >
                            View Certificate
                        </a>
                    </div>

                    <div className="experience">
                        <h1 className="int">Experience & Activities</h1>

                        <div className="exp-card">
                            <h3>Frontend Development Internship</h3>
                            <p><strong>CodeAlpha</strong> | Jan 2026 – Feb 2026</p>
                            <p>
                                Selected for a Frontend Development Internship focused on hands-on learning
                                and real-world tasks. Improved skills in UI development, responsive design,
                                and core web technologies.
                            </p>
                        </div>

                        <div className="exp-card">
                            <h3>Hackathon Participation – HACKOUT’25</h3>
                            <p><strong>DA-IICT</strong></p>
                            <p>
                                Participated in a national-level hackathon, gaining experience in
                                collaborative problem-solving, idea development, and implementing
                                solutions under time constraints.
                            </p>
                        </div>
                    </div>


                    {/* You can add more certificates like this */}
                    {/*
                    <div className="certificate-card">
                        <h3>Certificate Name</h3>
                        <p>Short description</p>
                        <a href="#">View Certificate</a>
                    </div>
                    */}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
