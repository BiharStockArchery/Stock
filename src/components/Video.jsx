// Video.jsx
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: rgba(37, 37, 37, 1);
  color: #febb12;
  padding: 20px;
  border-radius: none;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const VideoWrapper = styled.div`
  flex: 1;
  background-color: #333; /* Background color for the video box */
  border: 2px solid #000000; /* Border color around the video */
  border-radius: 10px;
  padding: 10px;

  iframe {
    width: 100%;
    height: 325px; /* Default height */
    border: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%; /* Decreased height for mobile view */
    
  }
`;

const TextContent = styled.div`
  flex: 1;
  
    h2{
    font-size:5rem;
    color:#fff;
    
    
    span{
    color:#febb12;
    
    }
    
    }

  p {
    font-size: 2rem;
    
    text-align: justify;
    color:#FDD788;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Video = () => {
  return (
    <Container>
      <VideoWrapper>
        <iframe
          src="https://www.youtube.com/embed/stxCGM-XAP0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>
      <TextContent>
        <h2>Bihar's <span>First</span> Trading <span>Floor</span></h2>
       
        <p>Experience Bihar’s premier stock market institute where education meets action. Our live trading classes allow students to learn and trade simultaneously in a real market setting. Gain hands-on experience, guided by expert mentors, and master strategies that work. Join us and elevate your trading skills with real-time practice.</p>
      </TextContent>
    </Container>
  );
};

export default Video;
