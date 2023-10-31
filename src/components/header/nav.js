import "./nav.css";
import React from "react";

const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

let today = new Date();
let date = today.toLocaleDateString("en-US", options);

console.log(date);

function Nav(props) {
    return (
        <header>
            <h3>A Charming Portfolio</h3>
            <h3>{date}</h3> 
            <div>
            <h3 className="nav-link"> About <a href="https://www.linkedin.com/in/robertcharming/">LinkedIn</a> <a href="https://github.com/BobbyCharms">Github</a></h3>
            </div>
        </header>
    )
}

export default Nav;