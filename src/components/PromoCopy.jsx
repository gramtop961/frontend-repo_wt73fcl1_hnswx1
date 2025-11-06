import React from 'react';

const PromoCopy = () => {
  return (
    <section className="relative w-full bg-gray-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">Detailed Promotional Copy</h2>
        <p className="text-white/85">
          Your "Flames App" is fun, but what if it could be smart? Our new backend service instantly transforms your frontend game into a scalable, data-driven application.
        </p>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm">
          <ul className="space-y-4 list-disc list-inside marker:text-orange-300">
            <li>
              <span className="font-semibold">Expand Your Empire with a Central API:</span>
              <span className="text-white/85"> Core FLAMES logic on the server powers every platform from a single source.</span>
            </li>
            <li>
              <span className="font-semibold">Unlock Powerful User Insights:</span>
              <span className="text-white/85"> Log every calculation to reveal trends like most common results and popular name combos.</span>
            </li>
            <li>
              <span className="font-semibold">Update Your Logic Instantly:</span>
              <span className="text-white/85"> Change it once—every user on every platform gets the update instantly.</span>
            </li>
            <li>
              <span className="font-semibold">Built for Scale:</span>
              <span className="text-white/85"> Stay fast and reliable from your first hundred to your first million users.</span>
            </li>
          </ul>
        </div>
        <p className="text-white/80">
          Don't just own a game. Own the platform. Get the Flames Backend and start building your relationship empire today!
        </p>
      </div>
    </section>
  );
};

export default PromoCopy;
