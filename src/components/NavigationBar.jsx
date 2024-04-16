import React, { Component, useState, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';

export const NavigationBar = () => {
    const [active_link, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);

    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <div id="header-navbar" expand="lg" className={scrolled ? "scrolled" : ""}>
            <div id="left-side">
                <div id="internal-title-div">
                    <h1 style={{paddingLeft: 10}} id="main-title">Abdiel Souza</h1>
                    <h2 style={{paddingLeft: 10}} id="main-subtitle">Main Page</h2>
                </div>
            </div>

            <div id="right-side">
                <div style={{display: 'inline-block'}}>
                    <div className="social-icon" style={{float: 'right'}}>
                        <SocialIcon
                        as="a"
                        network="instagram" 
                        url="https://instagram.com/abdielsouza988" 
                        style={{
                            width: 42,
                            height: 42,
                            background: "rgba(217, 217, 217, 0.1)",
                            borderRadius: "50%",
                            marginRight: "6px",
                            alignItems: "center",
                            justifyContent: "center",
                            lineHeight: 1,
                            border: "1px solid rgba(255, 255, 255, 0.5)"
                        }}/>
                        <SocialIcon
                        as="a"
                        network="linkedin" 
                        url="https://www.linkedin.com/in/abdiel-c-413703223"
                        style={{
                            width: 42,
                            height: 42,
                            background: "rgba(217, 217, 217, 0.1)",
                            borderRadius: "50%",
                            marginRight: "6px",
                            alignItems: "center",
                            justifyContent: "center",
                            lineHeight: 1,
                            border: "1px solid rgba(255, 255, 255, 0.5)"
                        }}/>
                    </div>

                    <text style={{fontSize: 12, alignSelf: 'center', justifyContent: 'center'}}>
                        Contact: +55 (31) 99335-0829
                    </text>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;