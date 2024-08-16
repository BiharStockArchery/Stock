import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const TeachersContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background-color: #252525;
  gap: 40px;
`;

const Heading = styled.h1`
  color: #febb12;
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;

  & span {
    color: #ffffff;
  }
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
              <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0077b5" }} />
            </SocialLink>
          )}
          {twitter && (
            <SocialLink href={twitter} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} style={{ color: "#000000" }} />
            </SocialLink>
          )}
          {instagram && (
            <SocialLink href={instagram} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} style={{ color: "#e1306c" }} />
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
      linkedin: "https://www.linkedin.com/in/prem-sandesh-b29927289/",
      twitter: "https://x.com/stockarchery",
      instagram: "https://www.instagram.com/stock.archery/",
    },
    {
      subject: "Kumar Ankit",
      bio: "Hello People. I am Kumar Ankit your mentor (Certified Researcher, Trader, and Financial Advisor) having market experience close to 10 years. My experience says that mastering one setup is enough for a person to become successful in stock market. I will make sure to help you find that one setup. See you soon.",
      image: "./images/ankit.jpg",
      linkedin: "https://www.linkedin.com/in/kumar-ankit-964823323/",
      twitter: "https://x.com/stockarchery",
      instagram: "https://www.instagram.com/stock.archery/",
    },
  ];

  return (
    <TeachersContainer>
      <Heading>
        <span>Meet</span> Our Mentors
      </Heading>
      {teachers.map((teacher, index) => (
        <Teacher key={index} {...teacher} />
      ))}
    </TeachersContainer>
  );
};

export default TeachersList;
