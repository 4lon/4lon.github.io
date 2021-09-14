import React from 'react';
import ListEntry from "./components/ListEntry";

class Projects extends React.Component {
    render() {
        return (
            <div>
                <ListEntry
                    heading="WebDev"
                    title="This Website right here"
                    subtitle="4lon.space (Github page)"
                    link="https://github.com/4lon/4lon.github.io"
                    content="A purely front end website built with the react framework, deployed to Github pages."
                > </ListEntry>
                <ListEntry
                    title="UQ Engineering Undergraduate Society"
                    subtitle="uqeus.org.au"
                    link="https://uqeus.org.au"
                    content="A dynamic website hosted on UQ's servers, built with wordpress, custom PHP plugins, HTML/CSS, Javascript, SQL, and probably some other stuff. I didn't build this website but I currently maintain it and may or may not be working on a new one built with React and Django... More information coming soon."
                > </ListEntry>
                <ListEntry
                    heading="Extra-Curricular"
                    title="MicroMouse"
                    subtitle="UQ Mechatronics and Robotics Society"
                    link="https://uqmars.com/micromouse/"
                    content="MicroMouse is a competition to create an autonomous robot capable of reaching the centre of the maze. The goal is to reach the centre in the fastest time."
                > </ListEntry>
                {/*<ListEntry*/}
                {/*    title="Rockets"*/}
                {/*    subtitle="UQ Space"*/}
                {/*    link="https://uqspace.com.au/"*/}
                {/*    content=""*/}
                {/*> </ListEntry>*/}
                <ListEntry
                    heading="University"
                    title="METR4810 (Mechatronics Team Project 2)"
                    subtitle="5 Seconds to Mars"
                    link="https://metr4810.uqcloud.net/2021/index.php"
                    content="Built a powered descent-arrest system for a spacecraft's terminal landing phase: the spacecraft released from its service module, then descended under gravity, decelerated and touched down at the mission site. The craft transmitted atmospheric, orientation, and acceleration data to allow Mission Control to monitor its progress during descent. Mission Control received the telemetry from the spacecraft, extracted and ploted the measurements live. Our final craft was mainly 3D printed, used a custom PCB hosting an ATMEGA128, Temperature, pressure, and gyroscope sensors while communicating with a Raspberry Pi Zero, transmitting live data to a GUI built with PyQT."
                > </ListEntry>
                <ListEntry
                    title="METR2800 (Mechatronics Team Project 1)"
                    subtitle="Killer Satellite II"
                    content="Designed and built a working model of a satellite defence system for demonstration purposes. This system was required to identify targets (in the form of IR light sources) and simulate their elimination by the accurate 'firing' of a laser pointer. The targets were simulated by three target arrays, each with three targets at different levels. Additionally the satellite was required to operate while suspended from a thread that anchored in a frame simulating a low-gravity earth orbit."
                > </ListEntry>
                <ListEntry
                    heading="Future"
                    supertitle="More Coming Soon"
                    content="Want to work with me on something (or maybe even hire me)? Feel free to reach out to me on LinkedIn."
                > </ListEntry>
            </div>
        );
    }
}

export default Projects;