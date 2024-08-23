import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const BlogPage = () => {
    const handleShare = (platform, route, title) => {
        const baseUrl = window.location.origin; // Get the base URL of the current site
        const url = `${baseUrl}${route}`; // Combine base URL with the route

        const encodedUrl = encodeURIComponent(url);
        const encodedTitle = encodeURIComponent(title);

        let shareUrl = '';

        switch (platform) {
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`;
                break;
            case 'telegram':
                shareUrl = `https://telegram.me/share/url?url=${encodedUrl}&text=${encodedTitle}`;
                break;
            case 'whatsapp':
                shareUrl = `https://api.whatsapp.com/send?text=${encodedTitle} ${encodedUrl}`;
                break;
            default:
                return;
        }

        window.open(shareUrl, '_blank');
    };

    const posts = [
        {
            title: "Ola Electric IPO Success: Journey, Milestones, and Market Impact",
            description: "Ola Electric, a subsidiary of the ride-hailing giant Ola, has become a symbol of India's electric vehicle (EV) revolution.",
            imgUrl: "https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724310017/OLA_t93aul.png",
            route: "/ola", // Use route for sharing
        },
        {
            title: "Zerodha Cancels Referral Program",
            description: "Zerodha Cancels Referral Program: A Detailed Analysis",
            imgUrl: "https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724323330/ZERODHA_2_pmuw17.png",
            route: "/ref", // Use route for sharing
        },
        {
            title: "COMING SOON",
            description: "Coming Soon",
            imgUrl: "https://via.placeholder.com/600x400",
            route: "/coming-soon", // Use route for sharing
        },
    ];

    return (
        <div className="blog-page">
            <style>
                {`
                /* General Styles */
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                }

                .container {
                    width: 100%;
                    max-width: 100%;
                    margin: 0 auto;
                    padding: 20px;
                    background: rgba(37, 37, 37, 255);
                }

                /* Hero Section Styles */
                .hero {
                    color: black;
                    text-align: center;
                    background: rgba(37, 37, 37, 255);
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
                    position: relative;
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
                    font-weight: bold;
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

                .share-icons {
                    display: flex;
                    justify-content: flex-end;
                    gap: 10px;
                    position: absolute;
                    bottom: 20px;
                    right: 20px;
                }

                .share-icon {
                    font-size: 3rem;
                    cursor: pointer;
                    color: #0056b3;
                    transition: color 0.3s ease;
                }

                .share-icon:hover {
                    color: #0056b3;
                }
                `}
            </style>

            <section className="hero">
                <div className="container">
                    <h2>BLOGS</h2>
                </div>
            </section>

            <div className="container">
                <div className="cards-container">
                    {posts.map((post, index) => (
                        <a href={post.route} className="card" key={index}>
                            <img src={post.imgUrl} alt={post.title} className="card-image" />
                            <div className="card-content">
                                <h3 className="card-title">{post.title}</h3>
                                <p className="card-description">{post.description}</p>
                                <span className="card-link">Read More</span>
                            </div>
                            <div className="share-icons">
                                <FontAwesomeIcon icon={faLinkedin} className="share-icon" onClick={() => handleShare('linkedin', post.route, post.title)} />
                                <FontAwesomeIcon icon={faTelegram} className="share-icon" onClick={() => handleShare('telegram', post.route, post.title)} />
                                <FontAwesomeIcon icon={faWhatsapp} className="share-icon" onClick={() => handleShare('whatsapp', post.route, post.title)} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;