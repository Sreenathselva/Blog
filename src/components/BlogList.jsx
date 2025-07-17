// // BlogList.jsx
import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "./blogData";

const BlogList = () => {
  return (
    <div className="blogs">
      {blogPosts.map((post) => (
        <div className="blog-box" key={post.id}>
          <div className="blog-img">
            <div className="blog-type">{post.category}</div>
            <img src={post.image} alt={post.title} />
          </div>
          <p className="blog-name">{post.title}</p>
          <div className="blog-date">{post.date}</div>
          <Link to={`/blog/${post.id}`}>
            <button className="blog-btn">Know More</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
