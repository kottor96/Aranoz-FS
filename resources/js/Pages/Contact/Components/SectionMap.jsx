import React from 'react';

export default function SectionMap({ contact }) {
  const mapQuery = encodeURIComponent(
    `${contact.street}, ${contact.state}, ${contact.city}, ${contact.zip_code}, ${contact.country_code}`
  );

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="w-full h-96 rounded-xl overflow-hidden">
          <iframe
            title="Google Map"
            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${mapQuery}`}
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
