import React from "react";
import "./index.css"
import twitterLogo from "../src/images/twitterLogo.png"
import instagramLogo from "../src/images/instagramLogo.png"
import facebookLogo from "../src/images/facebookLogo.png"

function Footer(){
    return(
        <div>
            <div id="footerDiv">
                <div id="explore">
                    <h1 id="exploreTitle">Explore</h1>
                    <ul>
                    <a href="#Home">Home</a>
                    </ul>
                    <ul>
                    <a href="#Questions">Questions</a>
                    </ul>
                    <ul>
                    <a href="#Articles">Articles</a>
                    </ul>
                    <ul>
                    <a href="#Tutorials">Tutorials</a>
                    </ul>
                </div>
                <div id="support">
                    <h1>Support</h1>
                    <ul>
                    <a href="#FAQs">FAQs</a>
                    </ul>
                    <ul>
                    <a href="#Help">Help</a>
                    </ul>
                    <ul>
                    <a href="#Contact Us">Contact Us</a>
                    </ul>
                </div>
                <div id="connected">
                    <h1>Stay Connected</h1>
                    <div id="connectedLogos">
                        <img src={facebookLogo} alt="Facebook Logo" width="50px" height="50px"></img>
                        <img src={twitterLogo} alt="Twitter Logo" width="50px" height="50px"></img>
                        <img src={instagramLogo} alt="Instagram Logo" width="50px" height="50px"></img>
                    </div>
                </div>
            </div>
            <div id="conditions">
                <h1>DEV@Deakin 2024</h1>
                <ul>
                <li><a href="#PrivacyPolicy">Privacy Policy</a></li>
                <li><a href="#Terms">Terms</a></li>
                <li><a href="#CodeOfConduct">Code of Conduct</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Footer