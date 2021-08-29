import React from 'react';
import ListEntry from "./components/ListEntry";

const divStyle = {
    maxWidth: '50rem',
    margin: 'auto',
};

class About extends React.Component {
    render() {
        return (
            <div style={divStyle}>
                <ListEntry
                    heading="About"
                    supertitle="Thanks for coming to my page!"
                    content="This page is a space for me to share the projects I'm working on and my experiences. My projects range from software to hardware, with a passion for sustainable, modular, and biomimetic design. If you want to know more about my experience read below, otherwise head to my projects page to learn more."
                > </ListEntry>
                <ListEntry
                    heading="Education"
                    supertitle="University"
                    title="Bachelors of Engineering (Hons) & Computer Science"
                    subtitle="The University of Queensland"
                    italicised="Jan 2018 - Jun 2023"
                    content="Majors: Mechatronics and Machine Learning."
                > </ListEntry>
                <ListEntry
                    heading="Experience"
                    supertitle="Employment"
                    title="Casual Academic - Tutor"
                    subtitle="The University of Queensland"
                    italicised="Jul 2021 - Current"
                    content="Tutor for the following courses; METR2800 (Mechatronic System Design Project I), CSSE2010 (Introduction to Computer Systems)."
                > </ListEntry>
                <ListEntry
                    title="Senior Instructor"
                    subtitle="Junior Engineers"
                    italicised="Nov 2020 - Jul 2021"
                    content="Robotics and Coding instructor, mainly teaching Arduino, Python, and Scratch."
                > </ListEntry>
                <ListEntry
                    title="Front-end Web Developer"
                    subtitle="Sparebrainz"
                    italicised="Sep 2020 - Dec 2020"
                    content="Internship in a start up environment developing a front end react app."
                > </ListEntry>
                <ListEntry
                    supertitle="Student Societies/Volunteering"
                    title="VP Sponsorship"
                    subtitle="UQ Engineering Undergraduate Society"
                    italicised="2022"
                    content="Liaising with major company representatives and coordination of all sponsorship across EUS and it's 6 affiliated societies, worth over 80k in total and resulting in 20+ industry sponsors."
                > </ListEntry>
                <ListEntry
                    title="Technical Officer"
                    subtitle="UQ Engineering Undergraduate Society"
                    italicised="2021"
                    content="Managing and updating the dynamic UQ EUS website as well as helping executive with technical issues. Relevant technologies include Wordpress, SQL, PHP, HTML/CSS, Javascript, Linux, and Google Workspace Administration."
                > </ListEntry>
                <ListEntry
                    heading="Extra-Curricular"
                    title="UQ Engineering Undergraduate Society"
                    italicised="Jan 2018 - Jun 2023"
                > </ListEntry>
                <ListEntry
                    title="UQ Computing Society"
                    italicised="Jan 2019 - Jun 2023"
                > </ListEntry>
                <ListEntry
                    title="UQ Innovation and Entrepreneurship Society"
                    italicised="Jan 2020 - Jun 2023"
                > </ListEntry>
                <ListEntry
                    title="UQ Mechatronics and Robotics Society"
                    italicised="Jan 2020 - Jun 2023"
                > </ListEntry>
                <ListEntry
                    title="UQ Space"
                    italicised="Jun 2021 - Current"
                > </ListEntry>
            </div>
        )
    }

}

export default About;