import './App.css';
import React from 'react';
import {SocialIcon} from "react-social-icons";
import profile from "./img/profile2.jpg";

class Home extends React.Component {
    render() {
        return (
            <div className="Slant">
                <div className="section-one">
                    <div className="content">
                        <div className="text">
                            <h1>Hello There</h1>
                            <p1>I'm Alon Nusem, an Engineering and Computer Science student at The University of
                                Queensland. Passionate about all things technology, this is a space for me to share
                                the projects I'm working on, my design process, and more.
                            </p1>
                            <br></br>
                            <SocialIcon className="space-out" url="https://github.com/4lon" bgColor="#f8f9fa"/>
                            <SocialIcon className="space-out" url="https://linkedin.com/in/alonn"/>
                        </div>
                    </div>
                </div>
                <div className="overflow-cover"></div>
                <div className="section-two">
                    <img
                        className="profile"
                        src={profile}
                        height="100%"
                        alt="Profile of Alon Nusem"
                    />
                </div>
            </div>
        );
    }
}

export default Home;