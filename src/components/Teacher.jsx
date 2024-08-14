import React from 'react';
import styled from 'styled-components';
import { FaLink } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 40px 20px;
  background-color: rgba(37, 37, 37, 1);

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const TeamMembersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;

const TeamMember = styled.div`
  position: relative;
  text-align: center;
  width: 550px;
  height: 550px;
  background-color: rgba(37, 37, 37, 1);
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }

  @media (min-width: 768px) {
    width: 300px;
  }

  @media (max-width: 767px) {
    width: 90%; /* Reduce the width of the card in mobile view */
    margin: 0 auto; /* Center the card in mobile view */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 60%;
  display: block;
`;

const NameOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(37, 37, 37, 1);
  color: #fdd788;
  padding: 15px 0;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

const Role = styled.div`
  background-color: rgba(37, 37, 37, 1);
  color: #febb12;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px auto;
  width: fit-content;
  font-weight: bold;
  font-size: 18px;
`;

const Bio = styled.p`
  font-size: 14px;
  color: #fdd788;
  padding: 10px 15px;
  text-align: justify;
`;

const TeamDescription = styled.div`
  position: relative;
  max-width: 600px;
  margin-top: 40px;
  padding-left: 30px;
  border-left: 2px solid transparent;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0.5px;
    background-color: #febb12;
  }

  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 100px;
  }

  @media (max-width: 767px) {
    padding-left: 15px;
    
    &::before {
      display: none;
    }
  }
`;

const Heading = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #febb12;
`;

const Description = styled.p`
  font-size: 16px;
  color: #fdd788;
  line-height: 1.6;
  text-align: justify;
`;

const FaLinkIcon = styled(FaLink)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #febb12;
  font-size: 24px;
`;

const TeamPage = () => {
  return (
    <Container>
      <TeamMembersWrapper>
        <TeamMember>
          <Image src="./images/2.png" alt="Prem Sandesh" />
          <NameOverlay>
            <span style={{ color: '#fff' }}>Prem</span> <span style={{ color: '#febb12' }}>Sandesh</span>
          </NameOverlay>
          <Role>Exp:-8 Years</Role>
          <Bio>
            With eight years of experience in price action trading and a specialization in swing trades, I have developed a profound understanding of market dynamics.
          </Bio>
          <FaLinkIcon />
        </TeamMember>
        <TeamMember>
          <Image src="./images/ankit.jpg" alt="Kumar Ankit" />
          <NameOverlay>
            <span style={{ color: '#fff' }}>Kumar</span> <span style={{ color: '#febb12' }}>Ankit</span>
          </NameOverlay>
          <Role>Exp:-10 Years</Role>
          <Bio>
            Hello People. I am Kumar Ankit your mentor (Certified Researcher, Trader, and Financial Advisor) having market experience close to 10 years.
          </Bio>
          <FaLinkIcon />
        </TeamMember>
      </TeamMembersWrapper>
      <TeamDescription>
        <Heading>
          <span style={{ color: '#fff' }}>Meet</span> <span style={{ color: '#febb12' }}>Our</span><span style={{ color: '#fff' }}> Team</span>
        </Heading>
        <Description>
          The team at Stock Archery is composed of seasoned experts dedicated to empowering individuals in the stock market. Our skilled professionals bring a wealth of experience in stock trading, financial analysis, and market strategy. Each member of our team is committed to providing personalized mentorship and high-quality education to help clients navigate the complexities of the stock market. With backgrounds in successful trading and financial management, our team ensures that you receive top-notch guidance and insights. At Stock Archery, we are passionate about delivering results and fostering growth, making us your trusted partner for mastering stock trading and achieving financial success.
        </Description>
      </TeamDescription>
    </Container>
  );
};

export default TeamPage;
