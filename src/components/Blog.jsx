import React from "react";
import "./Blog.css";
import blogImg from "../assets/images/blog-img.webp"
import pizza from "../assets/images/pizza.jpg"


const Blog = () => {
  return (
    <div id="blog">
      <div className="blog-container">
        <div className="blogs">
            <div className="blog-box">
              <div className="blog-img">
                <div className="blog-type">Artificial Intellegence</div>
                  <img src={blogImg} alt="Aritificial_intellegence" />
              </div>
              <p className="blog-name">How AI Is Reshaping B2B Event Experiences ?</p>
              <div className="blog-date">July 18 2025</div>
              <button className="blog-btn">Know More</button>
            </div>
            <div className="blog-box">
              <div className="blog-img">
                <div className="blog-type">Pizza Bakery</div>
                  <img src={pizza} alt="" />
              </div>
              <p className="blog-name">How AI Is Reshaping B2B Event Experiences ?</p>
              <div className="blog-date">July 18 2025</div>
              <button className="blog-btn">Know More</button>
            </div>
            <div className="blog-box">
              <div className="blog-img">
                <div className="blog-type">Artificial Intellegence</div>
                  <img src={blogImg} alt="" />
              </div>
              <p className="blog-name">How AI Is Reshaping B2B Event Experiences ?</p>
              <div className="blog-date">July 18 2025</div>
              <button className="blog-btn">Know More</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;