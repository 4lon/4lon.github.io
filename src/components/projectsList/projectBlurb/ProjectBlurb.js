import React from "react";
import "./ProjectBlurb.css";

const ProjectBlurb = (props) => {

    return (
        <div className="ProjectBlurb">
            <a href={props.link}>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </a>
        </div>
    );
}

export default ProjectBlurb;