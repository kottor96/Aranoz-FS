import React from 'react';
import { Home, Phone, Mail } from 'lucide-react';

export default function FormSection() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <form className="w-full p-8 rounded-lg shadow-none flex flex-col gap-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-start">
            Get in Touch
          </h2>

          <div className="flex flex-col lg:flex-row gap-6">
            <textarea
              placeholder="Votre message"
              className="w-full lg:w-3/4 h-80 p-4 border border-gray-300 rounded-lg resize-none"
            />

            <div className="lg:w-1/4 flex flex-col justify-start gap-6">
              <div className="flex items-start gap-3">
                <Home className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-black font-semibold">123 Rue Exemple</p>
                  <p className="text-gray-500">Paris, 75000</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-black font-semibold">+33 1 23 45 67 89</p>
                  <p className="text-gray-500">Lun-Ven: 9h - 18h</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-black font-semibold">contact@example.com</p>
                  <p className="text-gray-500">Sous-texte ici</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full p-3 border rounded-lg"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border rounded-lg lg:col-span-2"
            />
          </div>

          <textarea
            placeholder="Message"
            className="w-full h-32 p-4 border rounded-lg resize-none"
          />

          <button
            type="submit"
            className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
