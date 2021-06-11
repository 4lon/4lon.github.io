import React from "react";
import "./ProjectsList.css";
import ProjectBlurb from "./projectBlurb/ProjectBlurb";
import ProjectIndex from "../projects/ProjectIndex";


const ProjectsList = () => {

    return (
        <div className="ProjectsList">
            {ProjectIndex.map((project) => {
                return (
                    <ProjectBlurb
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />
                )
            })}
            <ProjectBlurb
                title = {"Note"}
                description={"This website is new and is a work in progress. I'm still in the phase of adding projects that I have and am currently working on. My projects involve both hardware and software, using Raspberry Pis, Arduinos, micro controllers, and a variety of programming languages including C, Python, Javascript, and others."}
            />
            <ProjectBlurb
                supertitle={"Personal"}
                link={"https://github.com/4lon/4lon.github.io"}
                title = {"Website"}
                description={"I built this website, using HTML, CSS, and Javascript in the React framework. It's hosted and deployed to GitHub pages, so you can see how i made it on my GitHub"}
            />
            <ProjectBlurb
                supertitle={"University"}
                title={"METR2800 - Team Project 1:"}
                subtitle={"Killer Satellite II"}
                description={"Designed and built a working model of a satellite defence system for demonstration purposes. This system was required to identify targets (in the form of IR light sources) and simulate their elimination by the accurate 'firing' of a laser pointer. The targets were simulated by three target arrays, each with three targets at different levels. Additionally the satellite was required to operate while suspended from a thread that anchored in a frame simulating a low-gravity earth orbit"}
            />
            <ProjectBlurb
                link={"https://metr4810.uqcloud.net/2021/index.php"}
                title={"METR4810 - Team Project 2:"}
                subtitle={"5 Seconds to Mars"}
                description={"Build a powered descent-arrest system for a spacecraft's terminal landing phase: the spacecraft is to release from its service module, then descend through the atmosphere under gravity, decelerate and touch down at the mission site. Given the presence of a human crew, the landing must be as gentle as possible, and ideally as close to the centre of the designated landing zone.\n\nThe spacecraft will transmit atmospheric, orientation, and acceleration data to allow Mission Control to monitor its progress during descent. The spacecraft must also carry a condition sensor to measure and indicate the forces to which the astronauts are subjected during landing, and thus allow the health status of the crew to be determined. Mission Control will receive the telemetry from the spacecraft, extract and plot the measurements live.\n\n This is my current team project. I hope to be able to share more details like CAD, circuit design, code, and more. However for academic integrity I cannot share the solutions that myself or my team produce until the end of the project timeline. If you would like to know more, click the project title to see the project homepage."}
            />
            <ProjectBlurb
                supertitle={"More Coming Soon"}
            />
        </div>
    )
}

export default ProjectsList;