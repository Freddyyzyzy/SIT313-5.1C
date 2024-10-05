import React from "react";
import "./index.css"
import headerImage from "../src/images/headerImage.jpeg"

function HeaderImage(){
    return(
        <div id="headerImage">
            <img src={headerImage} alt="HeaderImage" width="100%" height="650vh"></img>
        </div>
    )
}
export default HeaderImage