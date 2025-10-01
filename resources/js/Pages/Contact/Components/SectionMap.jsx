import React from 'react';
import {Home,Phone,Mail} from 'lucide-react';

export default function SectionMap() {
  return (
    <section className=" py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
        {/* Map */}
        <div className="w-full h-96 rounded-lg overflow-hidden">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019888378841!2d-122.41941508468179!3d37.77492977975964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a56419eb%3A0x80684f0a0c7c3e3c!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sfr!4v1696130400000!5m2!1sen!2sfr"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
          />
        </div>

        {/* Titre */}

        {/* Formulaire */}
        <form className="w-full  p-8 rounded-lg shadow-none flex flex-col gap-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-start">
            Get in Touch
          </h2>
          {/* Message + infos */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Message 3/4 */}
            <textarea
              placeholder="Votre message"
              className="w-full lg:w-3/4 h-80 p-4 border border-gray-300 rounded-lg resize-none"
            />
            
            {/* Infos contact 1/4 */}
            <div className="lg:w-1/4 flex flex-col justify-start gap-6">
              {/* Adresse */}
              <div className="flex items-start gap-3">
                <Home className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-black font-semibold">123 Rue Exemple</p>
                  <p className="text-gray-500">Paris, 75000</p>
                </div>
              </div>

              {/* Téléphone & horaires */}
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-black font-semibold">+33 1 23 45 67 89</p>
                  <p className="text-gray-500">Lun-Ven: 9h - 18h</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-black font-semibold">contact@example.com</p>
                  <p className="text-gray-500">Sous-texte ici</p>
                </div>
              </div>
            </div>

          </div>

          {/* Nom & Email */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border  rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full p-3 border  rounded-lg"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border  rounded-lg lg:col-span-2"
            />
          </div>

          {/* Message final */}
          <textarea
            placeholder="Message"
            className="w-full h-32 p-4 border  rounded-lg resize-none"
          />

          {/* Bouton */}
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
