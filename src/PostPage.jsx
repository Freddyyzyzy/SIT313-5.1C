import React, { useState } from "react";
import QuestionForm from "./QuestionForm";
import ArticleForm from "./ArticleForm";
import "./Post.css";

const PostPage = () => {
  const [postType, setPostType] = useState("question");

  return (
    <div id="post">
      <h1>New Post</h1>
      <div id="post-type">
        <label>Select Post Type:</label>
        <div className="radio-container">
          <label className="radio-label">
            <input
              type="radio"
              className="radio"
              name="post-type"
              value="question"
              checked={postType === "question"}
              onChange={() => setPostType("question")}
            />
            Question
          </label>
          <label className="radio-label">
            <input
              type="radio"
              className="radio"
              name="post-type"
              value="article"
              checked={postType === "article"}
              onChange={() => setPostType("article")}
            />
            Article
          </label>
        </div>
      </div>
      <h1>What do you want to ask or share</h1>
      {postType === "question" ? <QuestionForm /> : <ArticleForm />}
    </div>
  );
};

export default PostPage;
