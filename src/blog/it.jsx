const styles = {
    body: {
      margin: 0,
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f4f4',
      overflowX: 'hidden',
    },
    header: {
      backgroundImage: 'url(https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724833335/Screenshot_15_xnb6le.png)', // Replace with your image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '30px 20px',
      width: '100%',
      height: '280px',
      minHeight: '198px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      animation: 'fadeIn 1s ease-in-out',
      textAlign: 'center',
      position: 'relative',
      left: '2px',
      right: '2px',
      marginTop: '2px',
    },
    headerH1: {
      fontSize: '2.5em',
      margin: 0,
      animation: 'slideIn 1s ease-out',
    },
    main: {
      padding: '20px',
      width: '100%',
      boxSizing: 'border-box',
      backgroundColor: '#fff',
    },
    h1: {
      fontSize: '2.5em',
      color: '#333',
      marginBottom: '20px',
      transition: 'color 0.3s ease',
    },
    h1Hover: {
      color: '#4CAF50',
    },
    h2: {
      fontSize: '1.8em',
      color: '#555',
      marginTop: '20px',
      marginBottom: '10px',
      fontWeight: 'bold',
      textAlign: 'left', // Align text to the left
      transition: 'color 0.3s ease',
    },
    h2Hover: {
      color: '#4CAF50',
    },
    p: {
      lineHeight: '1.8',
      color: '#000000',
      marginBottom: '20px',
      textAlign: 'justify',
    },
    socialIcons: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
    },
    socialIcon: {
      textDecoration: 'none',
      margin: '0 10px',
      fontSize: '24px',
      color: '#007BFF', 
      transition: 'color 0.3s ease, transform 0.3s ease',
    },
    socialIconHover: {
      color: '#0056b3', 
      transform: 'scale(1.2)',
    },
    socialIconInner: {
      background: 'none',
      border: 'none',
      padding: '0', 
      borderRadius: '0',
    },
  };
  
  const BlogPage = () => {
    return (
      <div style={styles.body}>
        {/* Banner */}
        <header style={styles.header}>
          
        </header>
  
        {/* Main Content */}
        <main style={styles.main}>
          <h1 style={styles.h1}>IT Stocks Propel Nifty to Fresh All-Time High; Sensex Surges Over 250 Points</h1>
  
          
          <p style={styles.p}>
          The Indian stock market witnessed a significant surge today as the Nifty 50 index reached a fresh all-time high, driven primarily by gains in IT stocks. The Sensex, another benchmark index, also saw a remarkable rise, climbing over 250 points. This bullish trend in the market reflects strong investor confidence, particularly in the IT sector, which has been a major contributor to this rally.
          </p>
  
          <h2 style={styles.h2}>Key Highlights:</h2>
          <p style={styles.p}>
          ⭐<strong>Nifty 50 Hits Record High:</strong> The Nifty 50 index surged to an all-time high, crossing the previous records and setting a new benchmark. This rally was predominantly led by IT stocks, which have shown strong growth and resilience amid global market uncertainties.<br></br>

          ⭐<strong>Sensex Gains Over 250 Points:</strong> The Sensex followed suit, gaining over 250 points. This rise is indicative of a broader market rally, with several sectors contributing to the positive momentum, though IT remains the standout performer.<br></br>

          ⭐<strong>Strong Performance of IT Stocks:</strong> Leading IT companies like TCS, Infosys, and Wipro were among the top gainers in today’s trade. The sector’s growth can be attributed to several factors, including robust quarterly earnings, positive outlooks, and increasing demand for IT services globally.
          </p>
  
          <h2 style={styles.h2}>Factors Driving the Rally</h2>
          <p style={styles.p}>
          ➡️<strong>Robust Earnings Reports:</strong> Several IT companies have posted better-than-expected quarterly results, which have bolstered investor sentiment. The strong financial performance has been a key driver of the recent surge in IT stocks.
           <br></br>
          ➡️<strong>Global Demand for IT Services:</strong> With the increasing reliance on digital services and remote work, the demand for IT solutions has skyrocketed. Indian IT companies, known for their cost-effective and high-quality services, are well-positioned to capitalize on this demand, leading to a positive outlook for the sector.
          <br></br>
          ➡️<strong>Favorable Economic Indicators:</strong> Recent economic data points, such as improved GDP growth rates and lower inflation, have also contributed to the positive market sentiment. The Indian economy’s resilience in the face of global challenges has instilled confidence among investors.
          <br></br>
          ➡️<strong>Foreign Institutional Investments (FII):</strong> The Indian stock market has seen a steady inflow of foreign institutional investments, particularly in the IT sector. The consistent investment flow from global investors has further fueled the rally in IT stocks.
          <br></br>
          ➡️<strong>Positive Market Sentiment:</strong> Overall, market sentiment has been buoyant, with investors showing optimism about the growth prospects of the Indian economy. The IT sector, being a major growth driver, has naturally benefited from this optimism.
          </p>
  
          <h2 style={styles.h2}>Impact on Investors</h2>
          <p style={styles.p}>
          ➡️ For investors, the recent surge in IT stocks and the overall market rally presents both opportunities and risks. While the strong performance of the IT sector suggests potential for further gains, it is also essential to remain cautious of potential corrections, especially after such a sharp rise.
          <br></br>
          ➡️ Long-term investors may find value in holding onto their IT stocks, given the sector’s strong fundamentals and growth prospects. However, short-term traders should be mindful of volatility and consider taking profits if they have made substantial gains during this rally.
          </p>
  
          <p style={styles.p}>
          The Indian stock market’s recent performance, led by the IT sector, marks a significant milestone, with the Nifty 50 reaching a fresh all-time high and the Sensex surging over 250 points. As the IT sector continues to thrive, investors can expect continued momentum, though caution is advised given the potential for market corrections.
          For those looking to invest, the IT sector presents a promising opportunity, but it is essential to stay informed and make decisions based on thorough analysis and a clear understanding of market dynamics.
          </p>
  
          {/* Social Media Icons */}
          <div style={styles.socialIcons}>
            <a href="https://twitter.com/share?url=https://stockarchery.in/it&text=Check%20out%20this%20blog%20page%20I%20found" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
              <i className="fab fa-twitter" style={styles.socialIconInner}></i>
            </a>
            <a href="https://www.facebook.com/sharer/sharer.php?u=https://stockarchery.in/it" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
              <i className="fab fa-facebook-f" style={styles.socialIconInner}></i>
            </a>
            <a href="https://wa.me/?text=https://stockarchery.in/it" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
              <i className="fab fa-whatsapp" style={styles.socialIconInner}></i>
            </a>
            <a href="https://t.me/share/url?url=https://stockarchery.in/it&text=Check%20out%20this%20blog%20page%20I%20found" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
              <i className="fab fa-telegram" style={styles.socialIconInner}></i>
            </a>
            <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://stockarchery.in/it" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
              <i className="fab fa-linkedin" style={styles.socialIconInner}></i>
            </a>
          </div>
        </main>
  
        <style>
          {`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
  
            @keyframes slideIn {
              from { transform: translateY(-20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
  
            @media (max-width: 768px) {
              header {
                padding: 30px 10px;
              }
              header h1 {
                font-size: 2em;
              }
              main {
                padding: 15px;
              }
              h1 {
                font-size: 2em;
              }
              h2 {
                font-size: 1.5em;
              }
              .social-icons a {
                margin: 0 8px;
                font-size: 20px;
              }
            }
  
            @media (max-width: 480px) {
              header {
                padding: 20px 5px;
              }
              header h1 {
                font-size: 1.5em;
              }
              main {
                padding: 10px;
              }
              h1 {
                font-size: 1.8em;
              }
              h2 {
                font-size: 1.3em;
              }
              .social-icons {
                flex-direction: row;
                align-items: center;
              }
              .social-icons a {
                margin: 5px 5px;
                font-size: 18px;
              }
            }
          `}
        </style>
      </div>
    );
  };
  
  export default BlogPage;
  
