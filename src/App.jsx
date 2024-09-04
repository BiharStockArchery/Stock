import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { ThemeProvider } from 'styled-components';
import Review from './components/review';
import Video from './components/Video';
import FAQ from './components/Faq';
import WhatsAppButton from './components/Whatsappbutton';
import Content from './components/content';
import Testimonials from './components/testimonial';
import New from './components/new';
import SectionsPage from './components/sectionpage';
import BlogPage from './components/blogpage';
import Ola from './blog/ola';
import Zerodha from './blog/ref';
import Fest from './blog/fest';
import It from './blog/it';  // Import the new component
import { Helmet } from 'react-helmet';
import Bj from './blog/bjaj';

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
      <WhatsAppButton />
      <BrowserRouter>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Stock Archery - Your Go-To for Live Trading Classes</title>
          <meta name="description" content="Join Stock Archery for the best live trading classes. Learn to trade in a real market setting with expert guidance." />
        </Helmet>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Helmet>
                <title>Home - Stock Archery</title>
                <meta name="description" content="Welcome to Stock Archery. Learn to trade with live classes and expert guidance." />
              </Helmet>
              <Home />
            </>
          } />
          <Route path="/about" element={
            <>
              <Helmet>
                <title>About Us - Stock Archery</title>
                <meta name="description" content="Learn more about Stock Archery and our mission to provide quality trading education." />
              </Helmet>
              <About />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Helmet>
                <title>Contact Us - Stock Archery</title>
                <meta name="description" content="Get in touch with Stock Archery for any inquiries or support." />
              </Helmet>
              <Contact />
            </>
          } />
          <Route path="/review" element={
            <>
              <Helmet>
                <title>Student Reviews - Stock Archery</title>
                <meta name="description" content="Read what our students have to say about their experience at Stock Archery." />
              </Helmet>
              <Review />
            </>
          } />
          <Route path="/video" element={
            <>
              <Helmet>
                <title>Videos - Stock Archery</title>
                <meta name="description" content="Watch our educational videos and learn from our experts." />
              </Helmet>
              <Video />
            </>
          } />
          <Route path="/FAQ" element={
            <>
              <Helmet>
                <title>FAQ - Stock Archery</title>
                <meta name="description" content="Find answers to the most frequently asked questions about Stock Archery." />
              </Helmet>
              <FAQ />
            </>
          } />
          <Route path="/blog" element={
            <>
              <Helmet>
                <title>Blog - Stock Archery</title>
                <meta name="description" content="Read our latest blog posts on trading strategies, market analysis, and more." />
              </Helmet>
              <BlogPage />
            </>
          } />
          <Route path="/content" element={
            <>
              <Helmet>
                <title>Content - Stock Archery</title>
                <meta name="description" content="Explore our educational content and trading resources." />
              </Helmet>
              <Content />
            </>
          } />
          <Route path="/testimonial" element={
            <>
              <Helmet>
                <title>Testimonials - Stock Archery</title>
                <meta name="description" content="See what our students are saying about their learning experience at Stock Archery." />
              </Helmet>
              <Testimonials />
            </>
          } />
          <Route path="/new" element={
            <>
              <Helmet>
                <title>What's New - Stock Archery</title>
                <meta name="description" content="Stay updated with the latest news and updates from Stock Archery." />
              </Helmet>
              <New />
            </>
          } />
          <Route path="/sect" element={
            <>
              <Helmet>
                <title>Sections - Stock Archery</title>
                <meta name="description" content="Explore the various sections and resources available at Stock Archery." />
              </Helmet>
              <SectionsPage />
            </>
          } />
          <Route path="/ola" element={
            <>
              <Helmet>
                <title>Ola Electric - Blog - Stock Archery</title>
                <meta name="description" content="Read our comprehensive blog on the history and growth of Ola Electric." />
              </Helmet>
              <Ola />
            </>
          } />
          <Route path="/ref" element={
            <>
              <Helmet>
                <title>Zerodha Referral Program - Blog - Stock Archery</title>
                <meta name="description" content="Understand the implications of Zerodha's cancellation of its referral program in our latest blog." />
              </Helmet>
              <Zerodha />
            </>
          } />
          <Route path="/fest" element={
            <>
              <Helmet>
                <title>Festive Season Stock Market Analysis - Blog - Stock Archery</title>
                <meta name="description" content="Analyze the stock market behavior during the festive seasons in our detailed blog post." />
              </Helmet>
              <Fest />
            </>
          } />
          <Route path="/it" element={
            <>
              <Helmet>
                <title>IT Stocks - Stock Archery</title>
                <meta name="description" content="Explore IT stocks and understand their impact on the market." />
              </Helmet>
              <It />
            </>
          } />

<Route path="/bj" element={
            <>
              <Helmet>
                <title>Bjaj finance</title>
                <meta name="description" content="bjaj finace recent surge" />
              </Helmet>
              <Bj />
            </>
          } />
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirect to home page for all undefined routes */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;