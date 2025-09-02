import React from 'react';
import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Mission from '../components/Mission';
import CEOMessage from '../components/CEOMessage';

const Home: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Humanbo - AI That Feels Human"
        description="Intelligence Reimagined. Crafting AI experiences that enhance human potential with sophistication, empathy, and purpose. Discover our suite of human-centered AI products."
        keywords="AI, artificial intelligence, human-centered AI, machine learning, chatbot, automation, productivity, technology, Askify, Mocdt, WebSparks, OwnCents, Time Wallet"
        url="/"
        type="website"
      />
      <Hero />
      <About />
      <Products />
      <Mission />
      <CEOMessage />
    </>
  );
};

export default Home;
