import React from "react";
import "../styles/Connect.css";
import twitter from "../assets/twitter.png";
import LinkedIn from "../assets/LinkedIn.png";
import Github from "../assets/Github.png";



function Connect() {
    return (
        <div class="flex-container">
            <div class="logo">
                <div class="git">
                    <a href="https://github.com/CeeVeeRao108" ><img src={Github} alt="" /></a>
                </div>
            </div>
            <div class="logo">
                <a href="https://twitter.com/Rao_Bhargav18" ><img src={twitter} alt="" /></a>
            </div>
            <div class="logo">
                <a href="https://www.linkedin.com/in/bhargav-rao-87a453199/" ><img src={LinkedIn} alt="" /></a>

            </div>
        </div>
    );
}

export default Connect;