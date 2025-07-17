import "./Blog.css";
import { blogPosts } from "./blogData";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div id="categories">
      <div className="categories-container">
        {blogPosts.map((post) => (
          <div className="category-box" key={post.id}>
            <div className="category-img">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="cat-details">
              <div className="category-name">{post.title}</div>
              <Link to={`/blog/${post.id}`} className="category-link">
                Read More...
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
