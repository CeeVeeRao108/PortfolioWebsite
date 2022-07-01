import React from "react";

import "../styles/Home.css";

function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2> Bhargav Rao </h2>
                <div className="prompt">
                    <p> I see myself as a relentless problem-solver, and I’m always looking for a new challenge.</p>


                </div>
            </div>
            <div className="skills">
                <h1> Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2> Front-End</h2>
                        <span>
                            ReactJS, HTML, CSS, Javascipt, BootStrap, MaterialUI, Sass.
                        </span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>
                            MySQL, PHP ,NodeJS, ExpressJS, MongoDB,
                        </span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span> Python, JavaScript, C, C++, </span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Home;