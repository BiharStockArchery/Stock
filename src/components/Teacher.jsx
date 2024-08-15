import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const TeachersContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: #252525;
  gap: 40px;
`;

const TeacherRow = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 30px;
  background-color: #252525;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TeacherImage = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin-right: 30px;
  border: 6px solid #4a90e2;
  transition: transform 0.3s ease;

  ${TeacherRow}:hover & {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const TeacherInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;

  @media (min-width: 769px) {
    text-align: left;
  }
`;

const TeacherName = styled.h2`
  font-size: 1.8rem;
  margin: 0;
  color: #febb12;
  font-weight: bold;
`;

const TeacherSubject = styled.h4`
  font-size: 2rem;
  margin: 5px 0;
  color: #febb12;
  font-weight: 2000;
`;

const TeacherBio = styled.p`
  font-size: 1.5rem;
  color: #fdd788;
  margin: 10px 0;
  line-height: 1.6;
  max-width: 1500px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 15px;
`;

const SocialLink = styled.a`
  color: #febb12;
  font-size: 1.8rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #8ebbf2;
    transform: scale(1.1);
  }
`;

const Teacher = ({ name, subject, bio, image, linkedin, twitter, instagram }) => {
  return (
    <TeacherRow>
      <TeacherImage src={image} alt={`${name}'s portrait`} />
      <TeacherInfo>
        <TeacherName>{name}</TeacherName>
        <TeacherSubject>{subject}</TeacherSubject>
        <TeacherBio>{bio}</TeacherBio>
        <SocialLinks>
          {linkedin && (
            <SocialLink href={linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLink>
          )}
          {twitter && (
            <SocialLink href={twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialLink>
          )}
          {instagram && (
            <SocialLink href={instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialLink>
          )}
        </SocialLinks>
      </TeacherInfo>
    </TeacherRow>
  );
};

const TeachersList = () => {
  const teachers = [
    {
      
      subject: "Prem Sandesh",
      bio: "With eight years of experience in price action trading and a specialization in swing trades, I've developed a deep understanding of market dynamics. My passion is to share insights and empower aspiring traders with the knowledge and skills needed for confident and profitable market navigation.",
      image: "./images/prem.jpg",
      linkedin: "https://www.linkedin.com/in/janedoe",
      twitter: "https://twitter.com/janedoe",
      instagram: "https://instagram.com/janedoe",
    },
    {
      
      subject: "Kumar Ankit",
      bio: "Hello People. I am Kumar Ankit your mentor (Certified Researcher, Trader, and Financial Advisor) having market experience close to 10 years. My experience says that mastering one setup is enough for a person to become successful in stock market. I will make sure to help you find that one setup. See you soon.",
      image: "./images/ankit.jpg",
      linkedin: "https://www.linkedin.com/in/johnsmith",
      twitter: "https://twitter.com/johnsmith",
      instagram: "https://instagram.com/johnsmith",
    },
  ];

  return (
    <TeachersContainer>
      {teachers.map((teacher, index) => (
        <Teacher key={index} {...teacher} />
      ))}
    </TeachersContainer>
  );
};

export default TeachersList;
