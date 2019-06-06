import React from "react";
import NavBar from "../Components/NavBar";
import "../Styles/Blog.css";

const BlogPost = ({ children }) => {
  return (
    <>
      <NavBar />
      <article>{children}</article>
    </>
  );
};

export default BlogPost;
