import React from 'react';

export default function SectionMap() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="w-full h-96 rounded-xl overflow-hidden">
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
      </div>
    </section>
  );
}
