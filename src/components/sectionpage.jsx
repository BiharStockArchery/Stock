import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background-color: rgba(37, 37, 37, 255);
`;

const PageHeading = styled.h1`
  text-align: center;
  font-size: 50px;
  color: #febb12;
  margin-bottom: 40px;

  span {
    color: #fff;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Section = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  max-width: calc(33.333% - 20px);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 8%;
    right: 0;
    width: 0.5px; /* Ensure consistent vertical line width */
    height: 90%;
    background-color: #febb12;
    display: block;
  }

  &:last-child::after {
    display: none;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 20px;

    &::after {
      display: none;
    }
  }
`;

const RoundImage = styled.img`
  border-radius: 20px;
  width: 50%;
  height: 50%;
  object-fit: cover;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
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
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const SectionComponent = ({ image, heading, text }) => (
  <>
    <Section>
      <RoundImage src={image} alt={heading} />
      <Heading>{heading}</Heading>
      <Text>{text}</Text>
    </Section>
    <HorizontalLine />
  </>
);

const SectionsPage = () => (
  <Container id="sections-page">
    <PageHeading><span>Our</span> Services</PageHeading>
    <Row>
      <SectionComponent
        image="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152392/4th_-_Copy_bxcdbz.jpg"
        heading={<><strong>Bihar’s First Live Trading Institute</strong></>}
        text="The only institute in Bihar offering real-time trading classes, setting a new standard for stock market education."
      />
      <SectionComponent
        image="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152392/2nd_s04uzo.jpg"
        heading={<><strong>Learn and Trade Simultaneously</strong></>}
        text="Students gain hands-on experience by learning and trading in a live market environment."
      />
      <SectionComponent
        image="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152392/3rd_-_Copy_vredry.jpg"
        heading={<><strong>Expert Mentor Guidance</strong></>}
        text="Benefit from personalized instruction and proven strategies from seasoned trading professionals."
      />
    </Row>
    <HorizontalLine />
    <Row>
      <SectionComponent
        image="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152390/1st_acbapn.jpg"
        heading={<><strong>Real-Time Market Exposure</strong></>}
        text="Develop practical trading skills with immediate application in the live market."
      />
      <SectionComponent
        image="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152393/5th_-_Copy_flkcme.jpg"
        heading={<><strong>Comprehensive Trading Experience</strong></>}
        text="A unique blend of theoretical knowledge and practical execution, ensuring well-rounded trading expertise."
      />
       <SectionComponent
        image="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152409/ind_-_Copy_pgb10b.jpg"
        heading={<><strong>Interactive Learning Enviroment</strong></>}
        text=" Engage in an energetic and collaborative setting where real-time discussions and peer interactions enhance the learning experience."
      />
    </Row>
  </Container>
);

export default SectionsPage;
