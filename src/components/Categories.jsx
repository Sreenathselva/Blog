import "./Blog.css";
import { blogPosts } from "./blogData";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div id="categories">
      <div className="categories-container">
        {blogPosts.map((post) => (
          <Link to={`/blog/${post.id}`}key={post.id} className="category-link">
            <div className="category-box" >
              <div className="category-img">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="cat-details">
                <div className="category-name">{post.title}</div>

                  Read More...
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
