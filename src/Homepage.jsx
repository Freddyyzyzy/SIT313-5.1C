
import React from 'react';
import Tutorials from './Tutorial';
import Articles from './Article';
import HeadImage from './HeaderImage';
import TutorialsHeading from './TutorialsHeading';
import ArticlesHeading from './ArticlesHeading';
import NewsletterSignup
 from './WelcomeEmail';
const HomePage = () => {
  return (
    <div>
      <HeadImage />
      <TutorialsHeading />
      <Tutorials />
      <ArticlesHeading />
      <Articles />
      <NewsletterSignup />
    </div>
  );
};

export default HomePage;