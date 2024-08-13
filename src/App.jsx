import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import { ThemeProvider } from 'styled-components';
import Review from './components/review';
import Video from './components/Video';
import FAQ from './components/Faq';
import Prospectus from './components/prospectus';
import WhatsAppButton from './components/Whatsappbutton';
import Content from './components/content';
import Testimonials from './components/testimonial';
import New from './components/new';
import SectionsPage from './components/sectionpage';
import Error from "./Error";


const theme = {
  colors: {
    heading: "rgb(24 24 29)",
    text: "#febb12;",
    white: "#fff",
    yellow: "#febb12",
    black: "#212529",
    helper: "#8490ff",
    bg: "rgb(249 249 255)",
    footer_bg: "#0a1435",
    btn: "rgb(98 84 243)",
    border: "rgba(98, 84, 243, 0.5)",
    hr: "#ffffff",
    gradient: "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
    shadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
    shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  },
  media: { mobile: "768px", tab: "998px" },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
     <WhatsAppButton/>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/review" element={<Review />} />
          <Route path="/video" element={<Video />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Prospectus" element={<Prospectus/>} />
          <Route path="/content" element ={<Content/>}/>
          <Route path="/testimonial" element ={<Testimonials/>}/>
          <Route path="New" element={<New/>}/>
          <Route path="sect" element={<SectionsPage/>}/>
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
