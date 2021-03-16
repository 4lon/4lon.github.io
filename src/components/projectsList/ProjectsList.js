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
                        title = {project.title}
                        description = {project.blurb}
                        link = {project.link}
                    />
                )
            })}
            <ProjectBlurb
                title = {"More Projects Coming Soon"}
            />
        </div>
    )
}

export default ProjectsList;