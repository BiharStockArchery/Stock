import React, { useState, useEffect } from 'react';

const AboutPage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    width: '100%',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: 'rgba(37, 37, 37, 1)',
    color: '#febb12'
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: isMobile ? 'column' : 'row',
    marginBottom: '40px',
    textAlign: isMobile ? 'center' : 'left',
    gap: isMobile ? '20px' : '40px',
    
  };

  const imageStyle = {
    width: isMobile ? '100%' : '60%',
    maxWidth: isMobile ? '300px' : '500px',
    height: isMobile ? 'auto' : '400px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: isMobile ? '20px' : '0'
  };

  const textContainerStyle = {
    marginTop: isMobile ? '20px' : '0',
    textAlign: isMobile ? 'center' : 'left',
    flex: 1
  };

  const titleStyle = {
    fontSize: isMobile ? '2.5rem' : '3rem',
    marginBottom: '20px',
    color: '#febb12'
  };

  const paragraphStyle = {
    fontSize: isMobile ? '1.5rem' : '1.8rem',
    lineHeight: '1.6',
    marginBottom: '15px',
    textAlign: 'justify',
    color: '#FDD788'
  };

  const cardsHeaderStyle = {
    fontSize: isMobile ? '2.5rem' : '3rem',
    textAlign: 'center',
    marginBottom: '30px',
    color: '#febb12'
  };

  const cardsContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: '20px'
  };

  const cardContainerStyle = {
    position: 'relative',
    width: '100%',
    maxWidth: '300px',
    perspective: '1000px',
    margin: '0 auto'
  };

  const flipCardInnerStyle = (isHovered) => ({
    position: 'relative',
    width: '100%',
    height: '350px',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0deg)'
  });

  const flipCardFrontStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    backgroundColor: 'rgba(37,37,37,255)',
    color: '#febb12',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    borderRadius: '10px',
    overflow: 'hidden'
  };

  const flipCardBackStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    backgroundColor: '#333',
    color: '#FDD788',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    transform: 'rotateY(180deg)',
    borderRadius: '10px',
    overflow: 'hidden'
  };

  const cardImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px'
  };

  const cardHeadingStyle = {
    fontSize: isMobile ? '1.8rem' : '2rem',
    margin: '10px 0',
    color:'#febb12'
  };
  

  const cardTextStyle = {
    fontSize: isMobile ? '1.6rem' : '1.5rem',
    color:'#FDD788'
  };

  const backHeadingHiddenStyle = {
    display: 'none'
  };

  const cardData = [
    { 
      title: 'Live market Sessions', 
      text: 'Our trading floor, the first of its kind in Bihar, offers a unique opportunity to learn and trade during live market.',
      image: './images/1st.jpeg',
      backText: 'Join our live market sessions to gain real-time trading experience and insights from industry experts.'
    },
    { 
      title: 'One-on-One Mentorship', 
      text: 'Stock Archery offers personalized mentorship, empowering you with tailored guidance and support for success',
      image: './images/2nd.jpeg',
      backText: 'Our one-on-one mentorship program is designed to provide you with tailored support, helping you navigate the complexities of the stock market with confidence.'
    },
    { 
      title: 'Doubt Clearing Sessions', 
      text: 'We are dedicated to sustainable practices that protect the environment and promote a healthier future.',
      image: './images/3rd.jpeg',
      backText: 'Clear your doubts with in-depth sessions focused on addressing your specific trading challenges.'
    },
    { 
      title: 'One Year Handhold Support', 
      text: 'We actively engage with and support our local communities through various initiatives and partnerships.',
      image: './images/4th.jpeg',
      backText: 'Enjoy a full year of support, ensuring you stay on track with your trading goals and progress.'
    }
  ];

  return (
    
    <div style={containerStyle}>
      <div style={headerStyle}>
        <img
          src="./images/about1.svg"
          alt="About Us"
          style={imageStyle}
        />
        <div style={textContainerStyle}>
        
          <h1 style={titleStyle}>ABOUT US</h1>
          
          <p style={paragraphStyle}>
            Stock Archery is a premier trading floor and educational hub located in Bihar, specializing in hands-on trading education during live market sessions. As the first of its kind in the region, Stock Archery empowers traders with practical skills and real-time market experience. Our seasoned experts provide comprehensive training, guiding students through every step of the trading process. At Stock Archery, we believe in learning by doing. Our unique approach allows students to trade alongside professionals, offering an immersive experience that bridges the gap between theory and practice. Whether you're a novice trader or looking to sharpen your skills, Stock Archery provides tailored classes designed to meet your needs.
          </p>
        </div>
      </div>
    
      <h1 style={cardsHeaderStyle}>What We Offer</h1>
    
      <div style={cardsContainerStyle}>
        {cardData.map((card, i) => (
          <div
            key={i}
            style={cardContainerStyle}
            onMouseEnter={() => setHoveredCard(i)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={flipCardInnerStyle(hoveredCard === i)}>
              <div style={flipCardFrontStyle}>
                <img
                  src={card.image}
                  alt={card.title}
                  style={cardImageStyle}
                />
                <h2 style={cardHeadingStyle}>{card.title}</h2>
                <p style={cardTextStyle}>{card.text}</p>
              </div>
              <div style={flipCardBackStyle}>
                <h2 style={backHeadingHiddenStyle}>{card.title}</h2>
                <p style={cardTextStyle}>
                  {card.backText}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
