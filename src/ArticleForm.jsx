import React, { useContext, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  addCollectionAndDocument,
  db,
  storage,
} from "./firebase";
import { getAuth } from "firebase/auth";
import "./Post.css";
import { useNavigate } from "react-router-dom";
import { ArticleContext } from "./article.context";
import { doc, getDoc } from "firebase/firestore";

const ArticleForm = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;
  const { refreshArticles } = useContext(ArticleContext);

  const [article, setArticle] = useState({
    title: "",
    abstract: "",
    description: "",
    tags: "",
  });
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState("");

  const { title, abstract, description, tags } = article;

  const handleTextChange = (event) => {
    const { name, value } = event.target;
    setArticle((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setImageURL(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let imageURL = "";
      let displayName = "Anonymous";

      if (image) {
        const imageRef = ref(storage, `articles/${image.name}`);
        console.log(imageRef);
        const snapshot = await uploadBytes(imageRef, image);
        imageURL = await getDownloadURL(snapshot.ref);
      }

      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        displayName = userDoc.data().displayName;
      }

      const articleData = {
        ...article,
        image: imageURL,
        date: new Date(),
        author: displayName,
      };

      await addCollectionAndDocument("articles", [articleData]);
      refreshArticles();
      navigate("/");

      console.log("Article posted successfully!");
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
          placeholder="Enter a descriptive title"
          onChange={handleTextChange}
          value={title}
          required
        ></input>
      </div>
      <div className="flex">
        <label>Add an image</label>
        <input
          type="file"
          id="upload-image"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
          required
        />
        <button
          type="button"
          id="upload-button"
          onClick={() => document.getElementById("upload-image").click()}
        >
          Upload
        </button>
      </div>
      <div>
        {imageURL && (
          <div className="image-preview">
            Image Preview:
            <img
              src={imageURL}
              alt="Selected Preview"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        )}
      </div>
      <div>
        <label>Abstract</label>
        <textarea
          id="abstract"
          name="abstract"
          className="input"
          placeholder="Enter a 1-paragraph abstract"
          onChange={handleTextChange}
          value={abstract}
          required
        />
      </div>
      <div>
        <label>Article Text</label>
        <textarea
          id="article"
          name="description"
          className="input"
          placeholder="Enter your article text"
          onChange={handleTextChange}
          value={description}
          required
        />
      </div>
      <div className="flex">
        <label>Tags</label>
        <input
          className="input"
          name="tags"
          placeholder="Please add up to 3 tags to describe what your article is about e.g., Java"
          onChange={handleTextChange}
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

export default ArticleForm;
