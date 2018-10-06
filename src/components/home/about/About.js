import React from 'react';

import profilePic from "../../../assets/images/profile.jpg"

import "../../_common/common.css"
import "./about.css"

const About = () => {

    return (
        <div className="home-section container-about">        
            <img className="profile-picture-about" alt="profilepic" src={profilePic} />
            <div className="about-text">
                <span className="about-text-main">Hi! I'm <span className="about-name">Pier</span></span>
                <br/><span className="about-text-subtitle">I'm a software engineer</span>
                <br/><br/>I like to build things with code
                <br/>Some of my interests are: Android, UI/UX design, Web development, games development, VR and computer graphics.
                <br/><br/>Keep scrolling to see some of the projects I've worked on.
            </div>                
        </div>
    );
}

export default About;