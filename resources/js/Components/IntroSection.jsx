import React from "react";

export default function IntroSection({titre,text}) {
  return (
    <section id="intro-section" className="py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Texte à gauche */}
        <div className="lg:w-1/2 text-left">
          <h2 className="text-5xl font-bold text-gray-700 mb-4">
            {titre}
          </h2>
          <p className="text-xl text-gray-600">
            {text}
          </p>
        </div>

        {/* Image à droite */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="/storage/banner/feature_1.png"
            alt="Blog Illustration"
            className="w-full max-w-lg rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
