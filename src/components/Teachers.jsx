import React from 'react';

const teachers = [
  {
    name: 'Prem Sandesh',
    subject: '8 years Experience',
    bio: 'With eight years of experience in price action trading and a specialization in swing trades, I have developed a profound understanding of market dynamics. My passion lies in sharing trading insights and empowering aspiring traders with the essential knowledge and skills needed for confident and profitable market navigation.',
    image: './images/2.png', // Replace with actual image paths
  },
  {
    name: 'Ankit Kumar',
    subject: '8 years Experience',
    bio: 'Hello People. I am Kumar Ankit your mentor (Certified Researcher, Trader, and Financial Advisor) having market experience close to 10 years. My experience says that mastering one setup is enough for a person to become successful in the stock market. I will make sure to help you find that one setup. See you soon :)',
    image: './images/ankit.jpg', // Replace with actual image paths
  },
  {
    name: 'Prabhash Bansal',
    subject: '8 years Experience',
    bio: 'Coming from a middle-class background, I value determination and relentless pursuit of success. Specializing in index options trading, I thrive in fast-paced markets, using strategic insights to maximize returns. Join me at Stock Archery, where I empower aspiring traders with practical knowledge and proven strategies for success.',
    image: './images/5984.JPG', // Replace with actual image paths
  },
];

const Teachers = () => {
  return (
    <div style={styles.teachersSection}>
      <h1 style={styles.heading}>Know Your Mentors</h1>
      <div style={styles.horizontalLine}></div>
      <div style={styles.teachersContainer}>
        {teachers.map((teacher, index) => (
          <div key={index} style={styles.teacherCard}>
            <div style={styles.teacherImageContainer}>
              <img src={teacher.image} alt={teacher.name} style={styles.teacherImage} />
            </div>
            <div style={styles.teacherInfo}>
              <h2 style={styles.teacherName}>{teacher.name}</h2>
              <p style={styles.teacherSubject}>{teacher.subject}</p>
              <p style={styles.teacherBio}>{teacher.bio}</p>
            </div>
            {index < teachers.length - 1 && (
              <div style={styles.verticalLine}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  teachersSection: {
    background: 'rgba(37,37,37,255)',
    padding: '40px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '3rem',
    color: '#febb12',
    marginBottom: '10px',
    fontWeight: 'bold',
  },
  horizontalLine: {
    width: '100%',
    height: '2px',
    backgroundColor: '#FDD788',
    margin: '20px 0 40px',
  },
  teachersContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '70px',
    background: 'rgba(37,37,37,255)',
    position: 'relative',
  },
  teacherCard: {
    background: 'rgba(37,37,37,255)',
    borderRadius: '15px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    width: '300px',
    overflow: 'hidden',
    transform: 'scale(1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    textAlign: 'center',
    position: 'relative',
  },
  verticalLine: {
    backgroundColor: '#FDD788',
    position: 'absolute',
    top: '0',
    right: '-35px',
    width: '2px',
    height: '50%',
  },
  teacherImageContainer: {
    position: 'relative',
    overflow: 'hidden',
    height: '200px',
  },
  teacherImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  teacherInfo: {
    padding: '20px',
    position: 'relative',
  },
  teacherName: {
    fontSize: '2.6rem',
    margin: '0',
    color: '#febb12',
    fontWeight: '600',
  },
  teacherSubject: {
    fontSize: '1.9rem',
    margin: '10px 0',
    color: '#febb12',
    fontStyle: 'italic',
  },
  teacherBio: {
    fontSize: '1.5rem',
    color: '#febb12',
    lineHeight: '1.5',
    textAlign: 'justify',
  },
  '@media (max-width: 768px)': {
    teachersContainer: {
      flexDirection: 'column',
    },
    teacherCard: {
      marginBottom: '40px',
    },
    verticalLine: {
      display: 'none',
    },
    horizontalLine: {
      display: 'block',
      width: '100%',
      height: '0.5px',
      backgroundColor: '#FDD788',
      margin: '20px 0 0',
    },
  },
};

export default Teachers;
