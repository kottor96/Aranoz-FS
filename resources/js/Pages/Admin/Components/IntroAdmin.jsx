import React from 'react'

export default function IntroAdmin({titre,text}) {
  return (
    <section
      className="w-full min-h-[50vh] bg-cover bg-center py-20 px-20 lg:px-16 bg-admin pt-48"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Texte à gauche */}
        <div className="lg:w-1/2 text-left">
          <h2 className="text-5xl font-bold text-gray-700 mb-4">{titre}</h2>
          <p className="text-xl text-gray-600">{text}</p>
        </div>
      </div>
    </section>
  )
}
