import React, { createContext, useEffect, useState } from "react";
import { fetchCollectionAndDocuments } from "./firebase";

export const QuestionContext = createContext({
  questions: {},
  refreshQuestions: () => {},
});

export const QuestionProvider = ({ children }) => {
  const [questions, setQuestions] = useState({});

  const fetchQuestionMap = async () => {
    const questionsMap = await fetchCollectionAndDocuments("questions");
    setQuestions(questionsMap);
    console.log(questionsMap);
  };

  useEffect(() => {
    fetchQuestionMap();
  }, []);

  const refreshQuestions = () => {
    fetchQuestionMap();
  };

  const value = { questions, refreshQuestions };

  return (
    <QuestionContext.Provider value={value}>{children}</QuestionContext.Provider>
  );
};
