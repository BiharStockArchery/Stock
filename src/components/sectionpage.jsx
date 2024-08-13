import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background-color: rgba(37,37,37,255);
`;

const PageHeading = styled.h1`
  text-align: center;
  font-size: 50px;
  color: #febb12;
  margin-bottom: 40px; /* Add some space below the heading */

  span {
    color: #fff;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allows wrapping of items */
  gap: 20px; /* Space between items */
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack sections vertically on small screens */
  }
`;

const Section = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  max-width: calc(33.333% - 20px); /* Adjusted for gap */
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 8%; /* Adjust the starting point */
    right: 0;
    width: 1px; /* Thin vertical line */
    height: 90%; /* Reduce the height */
    background-color: #febb12;
    display: block;
  }

  &:last-child::after {
    display: none; /* Remove line after the last section */
  }

  @media (max-width: 768px) {
    max-width: 100%; /* Full width on small screens */
    margin-bottom: 20px; /* Add space between stacked sections */
    
    &::after {
      display: none; /* Remove vertical line on small screens */
    }
  }
`;

const RoundImage = styled.img`
  border-radius: 20px;
  width: 50%; /* Adjust size as needed */
  height: 50%; /* Adjust size as needed */
  object-fit: cover;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 80%; /* Increase width on small screens */
    height: auto; /* Adjust height to maintain aspect ratio */
  }
`;

const Heading = styled.h2`
  margin: 10px 0;
  font-size: 18px;
  color: #febb12;
`;

const Text = styled.p`
  font-size: 14px;
  color: #FDD788;
`;

const HorizontalLine = styled.hr`
  border: none;
  border-top: 1px solid #febb12;
  margin: 20px 0;
  width: 100%;
  display: none; /* Hide by default */

  @media (max-width: 768px) {
    display: block; /* Show on small screens */
  }
`;

const SectionComponent = ({ image, heading, text }) => (
  <>
    <Section>
      <RoundImage src={image} alt={heading} />
      <Heading>{heading}</Heading>
      <Text>{text}</Text>
    </Section>
    <HorizontalLine /> {/* Horizontal line after each section */}
  </>
);

const SectionsPage = () => (
  <Container id="sections-page">
    <PageHeading><span>Our</span> Services</PageHeading> {/* Centered Page Heading */}
    <Row>
      <SectionComponent
        image="./images/4th.jpeg"
        heading={<><strong>Bihar’s First Live Trading Institute</strong></>}
        text="The only institute in Bihar offering real-time trading classes, setting a new standard for stock market education."
      />
      <SectionComponent
        image="./images/2nd.jpeg"
        heading={<><strong>Learn and Trade Simultaneously</strong></>}
        text="Students gain hands-on experience by learning and trading in a live market environment."
      />
      <SectionComponent
        image="./images/3rd.jpeg"
        heading={<><strong>Expert Mentor Guidance</strong></>}
        text="Benefit from personalized instruction and proven strategies from seasoned trading professionals."
      />
    </Row>
    <HorizontalLine />
    <Row>
      <SectionComponent
        image="./images/1st.jpeg"
        heading={<><strong>Real-Time Market Exposure</strong></>}
        text="Develop practical trading skills with immediate application in the live market."
      />
      <SectionComponent
        image="./images/5th.jpeg"
        heading={<><strong>Comprehensive Trading Experience</strong></>}
        text="A unique blend of theoretical knowledge and practical execution, ensuring well-rounded trading expertise."
      />
    </Row>
  </Container>
);

export default SectionsPage;
