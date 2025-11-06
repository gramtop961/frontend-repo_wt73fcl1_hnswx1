import React from 'react';
import { BarChart3, Server, RefreshCw, Globe2 } from 'lucide-react';

const Feature = ({ icon: Icon, title, children }) => (
  <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition hover:bg-white/10">
    <div className="mb-4 inline-flex rounded-lg bg-white/10 p-3 ring-1 ring-white/20">
      <Icon className="h-5 w-5 text-cyan-300" />
    </div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-white/80">{children}</p>
  </div>
);

const WhyBackend = () => {
  return (
    <section id="features" className="relative -mt-8 w-full bg-gradient-to-b from-transparent to-gray-950 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Why Go Backend?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/80">
          Power your game with a central API, unlock analytics, and update logic on the fly—all built for scale.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Feature icon={Server} title="Expand via API">
            Your core FLAMES logic lives on the server. Power web, mobile, Discord bots, and more from one reliable source.
          </Feature>
          <Feature icon={BarChart3} title="User Insights">
            Log every calculation to discover popular names and common results. Turn data into stories.
          </Feature>
          <Feature icon={RefreshCw} title="Instant Updates">
            Tweak the algorithm or add features once—every platform gets it instantly. No frontend redeploys.
          </Feature>
          <Feature icon={Globe2} title="Built for Scale">
            From hundreds to millions of users, keep experiences fast, resilient, and responsive.
          </Feature>
        </div>
      </div>
    </section>
  );
};

export default WhyBackend;
