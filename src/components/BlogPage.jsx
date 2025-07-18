import React, { useEffect, useRef } from "react";
import "../components/Blog.css";
import { useParams } from "react-router-dom";
import { blogPosts } from "./blogData";
import Categories from "./Categories";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlogPage = () => {
    const categoriesRef = useRef();
    const contentRef = useRef();

        useEffect(() => {
            const mm = ScrollTrigger.matchMedia();
            mm.add("(min-width: 1024px)", () => {
                // 👇 Only runs this block on desktop
                const trigger = ScrollTrigger.create({
                trigger: contentRef.current,
                start: "top top",
                end: "bottom bottom",
                pin: categoriesRef.current,
                pinSpacing: false,
                });
            
                return () => trigger.kill(); // clean up
            });
        
            return () => mm.kill(); // clean up all matchMedia triggers
            }, []);

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
                <div className="blog-cont" ref={contentRef}>
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
                <div className="categories-wrapper" ref={categoriesRef}>
                    <Categories />
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
