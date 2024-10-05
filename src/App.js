import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import HomePage from "./Homepage";
import Footer from "./Footer";
import PostPage from "./PostPage";
import "semantic-ui-css/semantic.min.css";

function App() {
    return (
      <div>
        <Navigation />
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="/post" element={<PostPage />}></Route>
        </Routes>
        <Footer />
      </div>
    );
}
  
export default App;
