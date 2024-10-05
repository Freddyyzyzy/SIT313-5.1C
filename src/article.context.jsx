import React, { createContext, useEffect, useState } from "react";
import { fetchCollectionAndDocuments } from "./firebase";

export const ArticleContext = createContext({
  articles: {},
  refreshArticles: () => {},
});

export const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState({});

  const fetchArticleMap = async () => {
    const articlesMap = await fetchCollectionAndDocuments("articles");
    setArticles(articlesMap);
    console.log(articlesMap);
  };

  useEffect(() => {
    fetchArticleMap();
  }, []);

  const refreshArticles = () => {
    fetchArticleMap();
  };

  const value = { articles, refreshArticles };

  return (
    <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>
  );
};
