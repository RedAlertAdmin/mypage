import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import React, { Component } from 'react';

import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import MyPhoto from '../assets/images/my-photo.jpg';

export const HomePage = ({ Component }) => {

    const date = new Date();

    const skills = {
        python: 80,
        cpp: 70,
        js: 60,
        html: 70,
        css: 50,
        java: 40,
        lua: 90,
        elixir: 45,
        csharp: 50
    };

    const frameworks_and_libraries = {
        react: 35,
        sfml: 50,
        opengl: 60,
    };

    return (
        <div id="home" hidden={false}>
            <div id="header-div">
                <NavigationBar/>

                <header id="title-and-presentation">
                    <h1>Hi! I'm Abdiel Souza!</h1>
                    <p>A young electrical technician and developer by hobby</p>
                </header>
            </div>

            <div id="my-introduction" className="default-portfolio-div two-column">
                <div id="my-photo">
                    <img src={MyPhoto}/>
                </div>
                <div>
                    <h2>About me</h2>
                    <p style={{fontSize: 14}}>
                        My name is Abdiel Souza and I'm a brazilian "generalist" developer, since I practice a little of each area in programming.
                        So far I've worked in the programming area only as a hobby on personal projects. I'm more familiar with C++ and Python
                        in the area of game development, embedded systems and a little web development. I am also an electrical technician and
                        I'm looking to expand my knowledge by working in the job market.
                    </p>
                </div>
            </div>

            <div id="my-skills" className="default-portfolio-div">
                <h2>My Skills</h2>
                <h3>Programming Languages</h3>
                <div id="skills-indicator-div">
                    <div>
                        <CircularProgressbar value={skills.python} text={`${skills.python}%`}
                        styles={buildStyles({
                            pathColor: '#E1FF1E',
                            pathTransitionDuration: 1,
                            pathTransition: 'stroke-dashoffset 0.5s ease 0s'
                        })}
                        />
                        <text>Python</text>
                    </div>

                    <div>
                        <CircularProgressbar value={skills.cpp} text={`${skills.cpp}%`}
                        styles={buildStyles({
                            pathColor: '#0F7EFE',
                            pathTransitionDuration: 1,
                            pathTransition: 'stroke-dashoffset 0.5s ease 0s'
                        })}/>
                        <text>C++</text>                        
                    </div>

                    <div>
                        <CircularProgressbar value={skills.js} text={`${skills.js}%`}
                        styles={buildStyles({
                            pathColor: '#FFE51E',
                            pathTransitionDuration: 1,
                            pathTransition: 'stroke-dashoffset 0.5s ease 0s'
                        })}/>
                        <text>Javascript</text>
                    </div>

                    <div>
                        <CircularProgressbar value={skills.html} text={`${skills.html}%`}
                        styles={buildStyles({
                            pathColor: '#FE4B0F',
                            pathTransitionDuration: 1,
                            pathTransition: 'stroke-dashoffset 0.5s ease 0s'
                        })}/>
                        <text>HTML</text>
                    </div>

                    <div> 
                        <CircularProgressbar value={skills.css} text={`${skills.css}%`}
                        styles={buildStyles({
                            pathColor: '#0FCEFE',
                            pathTransitionDuration: 1,
                            pathTransition: 'stroke-dashoffset 0.5s ease 0s'
                        })}/>
                        <text>CSS</text>
                    </div>

                    <div>
                        <CircularProgressbar value={skills.java} text={`${skills.java}%`}
                        styles={buildStyles({
                            pathColor: '#FA8520',
                            pathTransitionDuration: 1,
                            pathTransition: 'stroke-dashoffset 0.5s ease 0s'
                        })}/>
                        <text>Java</text>
                    </div>

                    <div>
                        <CircularProgressbar value={skills.lua} text={`${skills.lua}%`}
                        styles={buildStyles({
                            pathColor: '#0D33F3',
                            pathTransitionDuration: 1,
                            pathTransition: 'stroke-dashoffset 0.5s ease 0s'
                        })}/>
                        <text>Lua</text>
                    </div>

                    <div>
                        <CircularProgressbar value={skills.elixir} text={`${skills.elixir}%`}
                        styles={buildStyles({
                            pathColor: '#8B0DF3',
                            pathTransitionDuration: 1,
                            pathTransition: 'stroke-dashoffset 0.5s ease 0s'
                        })}/>
                        <text>Elixir</text>
                    </div>

                    <div>
                        <CircularProgressbar value={skills.csharp} text={`${skills.csharp}%`}
                        styles={buildStyles({
                            pathColor: '#5D0DF3',
                            pathTransitionDuration: 1,
                            pathTransition: 'stroke-dashoffset 0.5s ease 0s'
                        })}/>
                        <text>C#</text>
                    </div>
                </div>
            </div>

            <div id="last-div" className="default-portfolio-div">
               <div id="github-link-container">
                    <SocialIcon
                    as="a"
                    network="github" 
                    url="https://github.com/abdielsouza"
                    target="_blank"
                    style={{
                        width: 32,
                        height: 32,
                        background: "rgba(217, 217, 217, 0.1)",
                        borderRadius: "50%",
                        marginRight: "6px",
                        alignItems: "center",
                        justifyContent: "center",
                        lineHeight: 1,
                        border: "1px solid rgba(255, 255, 255, 0.5)"
                    }}/>
                    <text> My Github Account</text>
                </div>
            </div>
            <footer>
                <text>In development! Made with ReactJS</text>
            </footer>
        </div>
    );
};
