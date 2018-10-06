import React from 'react';

import profilePic from "../../../assets/images/about-me.jpg"

import "../../_common/common.css"
import "./about.css"

const About = () => {

    return (
        <div className="home-section container-about">        
            <img className="profile-picture-about" alt="profilepic" src={profilePic} />
            <div className="about-text">
                <span className="about-text-main">Hi! I'm learning three.js </span>
                <br/><span className="about-text-subtitle">I'm a curios person whith some time</span>
                <br/><br/>I like to build things with code and without code
                
            </div>                
        </div>
    );
}

export default About;