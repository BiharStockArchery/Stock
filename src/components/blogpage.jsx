import React from 'react';

const BlogPage = () => {
    return (
        <div className="blog-page">
            <style>
                {`
                /* General Styles */
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background:rgba(37, 37, 37, 255);
                }

                .container {
                    width: 90%;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                    
                }

                /* Hero Section Styles */
                .hero {
                    
                    color: black;
                    text-align: center;
                    padding: 60px 20px;
                    margin-bottom: 10px;
                    
                }

                .hero h2 {
                    font-size: 3.5rem;
                    margin: 0;
                    color: #febb12;
                }

                .hero p {
                    font-size: 2rem;
                    margin: 10px 0 0;
                }

                /* Cards Container Styles */
                .cards-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 20px;
                }

                .card {
                    background: white;
                    border-radius: 10px;
                    box-shadow: 0 6px 12px rgba(0,0,0,0.1);
                    overflow: hidden;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    text-decoration: none;
                    color: #febb12;
                }

                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 12px 24px rgba(0,0,0,0.2);
                }

                .card-image {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                }

                .card-content {
                    padding: 20px;
                }

                .card-title {
                    font-size: 2rem;
                    margin: 0 0 10px;
                    font-weight: bold;
                }

                .card-description {
                    font-size: 1.5rem;
                    margin: 0;
                    color: #000000;
                }

                .card-link {
                    display: block;
                    margin-top: 15px;
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #febb12;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }

                .card-link:hover {
                    color: #0056b3;
                }
                `}
            </style>

            <section className="hero">
                <div className="container">
                    <h2>Explore Our Latest Posts</h2>
                </div>
            </section>

            <div className="container">
                <div className="cards-container">
                    <a href="#post1" className="card">
                        <img src="https://via.placeholder.com/600x400" alt="Post 1" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">The Future of Web Development</h3>
                            <p className="card-description">Explore emerging trends in web development and what the future holds for developers.</p>
                            <span className="card-link">Read More</span>
                        </div>
                    </a>

                    <a href="#post2" className="card">
                        <img src="https://via.placeholder.com/600x400" alt="Post 2" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">Design Principles for Modern UI</h3>
                            <p className="card-description">Learn about key design principles that will help you create stunning user interfaces.</p>
                            <span className="card-link">Read More</span>
                        </div>
                    </a>

                    <a href="#post3" className="card">
                        <img src="https://via.placeholder.com/600x400" alt="Post 3" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">Mastering Responsive Design</h3>
                            <p className="card-description">Tips and techniques for creating responsive designs that work on any device.</p>
                            <span className="card-link">Read More</span>
                        </div>
                    </a>

                    <a href="#post4" className="card">
                        <img src="https://via.placeholder.com/600x400" alt="Post 4" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">JavaScript ES6: What’s New</h3>
                            <p className="card-description">Get up to speed with the latest features in JavaScript ES6 and how to use them.</p>
                            <span className="card-link">Read More</span>
                        </div>
                    </a>

                    <a href="#post5" className="card">
                        <img src="https://via.placeholder.com/600x400" alt="Post 5" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">Building Accessible Web Applications</h3>
                            <p className="card-description">Best practices for ensuring your web applications are accessible to all users.</p>
                            <span className="card-link">Read More</span>
                        </div>
                    </a>
                    <a href="#post5" className="card">
                        <img src="https://via.placeholder.com/600x400" alt="Post 5" className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">Building Accessible Web Applications</h3>
                            <p className="card-description">Best practices for ensuring your web applications are accessible to all users.</p>
                            <span className="card-link">Read More</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
