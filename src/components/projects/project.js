import "./project.css";
import React from "react";

function Project(props) {
    const imgeSrc = require('./jslogo.png');

    return (
        <div className="project">
            <h3>{props.name}Project One</h3>
            {/* This will be updated to a Link tag instead of the a tag to allow it to be a React Router Link */}
            <a href="{props.link}">
                <img src={imgeSrc} alt="Project One" />
            </a>
            <p>{props.description}This project was done with me and classmates. </p>
            <h3>{props.link}</h3>
        </div>
    )
}

export default Project;