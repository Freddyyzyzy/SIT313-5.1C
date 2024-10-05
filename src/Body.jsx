import React from "react";
import "./index.css"
import ArticlesHeading from "./ArticlesHeading";
import Article from "./Article";
import TutorialsHeading from "./TutorialsHeading";
import Tutorial from "./Tutorial";
import WelcomeEmail from "./WelcomeEmail";

function Body(){
    return(
        <div id="bodyDiv">
            <div id="articlesDiv">
                <ArticlesHeading />
                <Article />
                <TutorialsHeading />
                <Tutorial />
                <WelcomeEmail />
            </div>
        </div>
    )
}
export default Body