import React, { useContext, useState } from "react";
import "./Post.css";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { addCollectionAndDocument, db } from "./firebase";
import { QuestionContext } from "./question.context";

const QuestionForm = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;
  const { refreshQuestions } = useContext(QuestionContext);

  const [question, setQuestion] = useState({
    title: "",
    description: "",
    tags: "",
  });

  const { title, description, tags } = question;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setQuestion((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let displayName = "Anonymous";

      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        displayName = userDoc.data().displayName;
      }

      const tagArray = tags.split(",").map(tag => tag.trim());

      const questionData = {
        ...question,
        tags: tagArray,
        date: new Date(),
        author: displayName,
      };

      await addCollectionAndDocument("questions", [questionData]);
      refreshQuestions();
      navigate("/find");

      console.log("Question posted successfully!");
    } catch (error) {
      console.error("Error in creating post ", error);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex">
        <label>Title</label>
        <input
          className="input"
          name="title"
          placeholder="Start your question with how, what, why, etc."
          onChange={handleChange}
          value={title}
          required
        />
      </div>
      <div>
        <label>Describe your problem</label>
        <textarea
          id="problem"
          name="description"
          className="input"
          onChange={handleChange}
          value={description}
          required
        />
      </div>
      <div className="flex">
        <label>Tags</label>
        <input
          className="input"
          name="tags"
          placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
          onChange={handleChange}
          value={tags}
          required
        />
      </div>
      <div id="post-button-container">
        <button id="post-button" type="submit">
          Post
        </button>
      </div>
    </form>
  );
};

export default QuestionForm;
