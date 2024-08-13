import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import { useGlobalContext } from './context';
import Teachers from './components/Teachers';
import New from './components/new';

const About = () => {
  const { updateAboutPage } = useGlobalContext();

  useEffect(() => {
    updateAboutPage();
  }, [updateAboutPage]);

  return (
    <div>
     <New/>
      <Teachers />
    </div>
  );
};

export default About;

