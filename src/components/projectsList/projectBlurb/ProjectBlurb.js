import React from "react";
import "./ProjectBlurb.css";

const ProjectBlurb = (props) => {

    return (
        <div className="ProjectBlurb">
            <h1>{props.supertitle}</h1>
            <a href={props.link} target="_blank"><h3>{props.title}</h3></a>
            <h4>{props.subtitle}</h4>
            <p>{props.description}</p>
        </div>
    );
}

export default ProjectBlurb;