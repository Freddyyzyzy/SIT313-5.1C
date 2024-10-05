import React, { useState } from "react";
import "./index.css";
import starImage from "./images/ratingStar.png";
import ai1 from "./images/AI1.webp";
import ai2 from "./images/AI2.jpeg";
import ai3 from "./images/AI3.webp";

const articles = [
    {
        image: ai1,
        name: 'Tech Analyst',
        description: 'AI is transforming industries by enabling smarter, data-driven decisions. From healthcare to finance, the potential of AI to optimize operations and enhance productivity is immense.',
        rating: '5',
        author: 'John Doe'
    },
    {
        image: ai2,
        name: 'Education Specialist',
        description: 'Artificial Intelligence has the power to revolutionize education by providing personalized learning experiences and adaptive learning technologies tailored to individual student needs.',
        rating: '5',
        author: 'Jane Smith'
    },
    {
        image: ai3,
        name: 'Healthcare Technology Expert',
        description: 'In the realm of healthcare, AI aids in diagnosing diseases with higher accuracy, predicting patient outcomes, and improving overall efficiency in medical practices.',
        rating: '5',
        author: 'Michael Brown'
    },
    {
        image: ai1,
        name: 'Tech Analyst',
        description: 'AI is transforming industries by enabling smarter, data-driven decisions. From healthcare to finance, the potential of AI to optimize operations and enhance productivity is immense.',
        rating: '5',
        author: 'John Doe'
    },
    {
        image: ai2,
        name: 'Education Specialist',
        description: 'Artificial Intelligence has the power to revolutionize education by providing personalized learning experiences and adaptive learning technologies tailored to individual student needs.',
        rating: '5',
        author: 'Jane Smith'
    },
    {
        image: ai3,
        name: 'Healthcare Technology Expert',
        description: 'In the realm of healthcare, AI aids in diagnosing diseases with higher accuracy, predicting patient outcomes, and improving overall efficiency in medical practices.',
        rating: '5',
        author: 'Michael Brown'
    }
];

function Article(){
    const [visibleArticles, setVisibleArticles] = useState(3);

    const handleSeeAll = () => {
        setVisibleArticles(articles.length)
    }

    return(
      <div id="articleSection">
        <div id="articleContainer">
            {articles.slice(0, visibleArticles).map((article, index) => (
                <div className="article" key={index}>
                    <img src={article.image} alt={article.name} className="articleImage"/>
                    <h2>{article.name}</h2>
                    <p className="description">{article.description}</p>
                    <div className="dashedLine"></div>
                    <div className="rating">
                        <img src={starImage} alt="Star:"/>
                        <p>{article.rating}/5 {article.author}</p>
                    </div>
                </div>
            ))}
        </div>
        {visibleArticles < articles.length && (
            <button onClick={handleSeeAll}>See all articles</button>
        )}
      </div>  
    );
}

export default Article;
