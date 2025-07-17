import "../components/Blog.css";
import { useParams } from "react-router-dom";
import { blogPosts } from "./blogData";
import Categories from "./Categories";

const BlogPage = () => {
    const { id } = useParams();
    const blog = blogPosts.find(post => post.id === id);

    if (!blog) return <h2 style={{ padding: '2rem', color: '#ffffff' }}>Blog not found</h2>;

    return (
        <div id="blog-page">
            <div className="blog-top">
                <h1>{blog.title}</h1>
                <p>{blog.date} | {blog.category}</p>
            </div>
            <div className="blog-page-container">
                <div className="blog-cont">
                    <div className="blog-image">
                        <img src={blog.image} alt={blog.title} />
                    </div>
                    <div className="blog-content">
                        {blog.content.map((block, idx) => {
                            switch (block.type) {
                                case 'paragraph':
                                    return <p key={idx} className="para">{block.text}</p>;
                                case 'heading':
                                    return <h2 key={idx}>{block.text}</h2>;
                                case 'subheading':
                                    return <h3 key={idx}>{block.text}</h3>;
                                case 'list':
                                    return (
                                        <ul key={idx}>
                                            {block.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    );
                                default:
                                    return null;
                            }
                        })}
                    </div>
                </div>

                <Categories />
            </div>
        </div>
    );
};

export default BlogPage;
