import React from 'react';
import { ArrowRightCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section id="cta" className="relative w-full bg-gradient-to-b from-gray-950 to-black px-6 py-20 text-white">
      <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md">
        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Ready to power up your Flames App?</h3>
        <p className="mx-auto mt-3 max-w-2xl text-white/85">
          Integrate our backend to unlock analytics, instant updates, and multi-platform reach.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-lg shadow-black/20 transition hover:scale-[1.02] hover:shadow-xl"
          >
            Get Started <ArrowRightCircle className="h-4 w-4" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg bg-transparent/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur-sm transition hover:bg-white/10"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
