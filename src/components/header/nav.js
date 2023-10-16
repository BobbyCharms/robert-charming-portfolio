import "./nav.css";
import {FaBars, FaTimes} from "react-icons/fa";
import { useRef } from "react";

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
    const navRef = useRef();

    const showNavbar    = () => navRef.current.classList.toggle("responsive_nav");

    return (
        <header>
            <h3>A Charming Portfolio</h3>
            <h3>{date}</h3> 
            {/* Nav Bar */}
            <nav ref={navRef}>
                <h3 className="nav-link"> 
                    <a href="google.com">About</a> 
                    <a href="https://www.linkedin.com/in/robertcharming/">LinkedIn</a> 
                    <a href="https://github.com/BobbyCharms">Github</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
                </h3>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    )
}

export default Nav;