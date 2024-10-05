import React, { useState } from "react";
import "./index.css";
import starImage from "./images/ratingStar.png";
import g1 from "./images/g1.jpeg";
import g2 from "./images/g2.jpeg";
import g3 from "./images/g3.jpeg";

const tutorials = [
    {
        image: g1,
        name: 'Creating Compelling Game Mechanics',
        description: 'Learn how to design engaging game mechanics that captivate players. This tutorial covers the principles of creating fun and balanced gameplay, including the importance of player feedback and iterative design.',
        rating: '5',
        author: 'Alice Johnson, Game Designer'
    },
    {
     image: g2,
        name: 'Implementing Realistic Game Physics',
        description: 'Explore techniques for integrating realistic physics into your game. This guide explains how to simulate real-world forces and interactions, enhancing the immersion and believability of your virtual environment.',
        rating: '5',
        author: 'David Smith, Software Engineer'
    },
    {
        image: g3,
        name: 'Optimizing Game Performance for Various Devices',
        description: 'Discover strategies for optimizing your game to run smoothly on different platforms. This tutorial addresses performance issues, such as reducing load times and managing resources, to ensure a consistent experience across devices.',
        rating: '5',
        author: 'Emma Lee, Game Developer'
    },
    {
        image: g1,
        name: 'Creating Compelling Game Mechanics',
        description: 'Learn how to design engaging game mechanics that captivate players. This tutorial covers the principles of creating fun and balanced gameplay, including the importance of player feedback and iterative design.',
        rating: '5',
        author: 'Alice Johnson, Game Designer'
    },
    {
     image: g2,
        name: 'Implementing Realistic Game Physics',
        description: 'Explore techniques for integrating realistic physics into your game. This guide explains how to simulate real-world forces and interactions, enhancing the immersion and believability of your virtual environment.',
        rating: '5',
        author: 'David Smith, Software Engineer'
    },
    {
        image: g3,
        name: 'Optimizing Game Performance for Various Devices',
        description: 'Discover strategies for optimizing your game to run smoothly on different platforms. This tutorial addresses performance issues, such as reducing load times and managing resources, to ensure a consistent experience across devices.',
        rating: '5',
        author: 'Emma Lee, Game Developer'
    }
    
];

function Tutorial() {
    const [visibleTutorials, setVisibleTutorials] = useState(3);

    const handleSeeAll = () => {
        setVisibleTutorials(tutorials.length);
    };

    return (
        <div id="articleSection">
            <div id="articleContainer">
                {tutorials.slice(0, visibleTutorials).map((tutorial, index) => (
                    <div className="article" key={index}>
                        <img src={tutorial.image} alt={tutorial.name} className="articleImage" />
                        <h2>{tutorial.name}</h2>
                        <p className="description">{tutorial.description}</p>
                        <div className="dashedLine"></div>
                        <div className="rating">
                            <img src={starImage} alt="Star:" />
                            <p>{tutorial.rating} {tutorial.author}</p>
                        </div>
                    </div>
                ))}
            </div>
            {visibleTutorials < tutorials.length && (
                <button onClick={handleSeeAll}>See all tutorials</button>
            )}
        </div>
    );
}

export default Tutorial;
