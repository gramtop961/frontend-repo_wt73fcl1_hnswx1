import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Zap } from 'lucide-react';

const Hero = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient vignette to improve text contrast without blocking interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-16 text-center text-white">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium backdrop-blur-md">
          <Zap className="h-4 w-4 text-yellow-300" />
          New: Flames App Backend
        </span>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          🔥 Supercharge Your Flames App!
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/90 sm:text-lg">
          Move beyond a simple game. Introducing the Flames App Backend—the engine that turns your fun app into a powerful platform.
        </p>
        <p className="mt-2 max-w-2xl text-sm text-white/80 sm:text-base">
          Take Your Flames App to the Next Level. Don\'t just calculate relationships. Understand them. Our backend unlocks the data and scalability you need to go viral.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <button
            onClick={() => handleScroll('features')}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-lg shadow-black/20 transition hover:scale-[1.02] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <Rocket className="h-4 w-4" /> Explore Features
          </button>
          <button
            onClick={() => handleScroll('cta')}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-transparent/20 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur-sm transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            Get the Backend
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
