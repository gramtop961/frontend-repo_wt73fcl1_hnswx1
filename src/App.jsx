import React from 'react';
import Hero from './components/Hero';
import WhyBackend from './components/WhyBackend';
import PromoCopy from './components/PromoCopy';
import CTA from './components/CTA';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black font-inter text-white">
      <Hero />
      <WhyBackend />
      <PromoCopy />
      <CTA />
      <footer className="w-full bg-black px-6 py-10 text-center text-white/60">
        <p>
          Flames App Backend • Built for gaming, entertainment, and playful 3D experiences
        </p>
      </footer>
    </div>
  );
};

export default App;
