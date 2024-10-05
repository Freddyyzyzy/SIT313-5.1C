import React from "react";
import "./index.css"

function WelcomeEmail(){
    return(
        <div id="welcomeEmailSection">
            <form action="/" method="post">
                <div id="welcomeLabelDiv">
                    <label id="welcomeLabel" for="email">SIGN UP FOR OUR DAILY INSIDER</label>
                </div>
                <div id="emailInputDiv"> 
                    <input type="email" id="email" name="email" placeholder="Please enter your email" required autocomplete="email"/>
                </div>
                <div id="welcomeButtonDiv">
                    <button type="submit" id="subscribeButton">Subscribe</button>
                </div>
            </form>
        </div>
    )
}
export default WelcomeEmail