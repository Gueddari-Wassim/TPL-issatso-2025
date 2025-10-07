import React from 'react';

export default function Map() {
  return (
    <section className="w-full px-4 py-10 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-left">On vous attend ici !</h2>
        <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="ISSAT Sousse Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.48818021766!2d10.635733175483834!3d35.812496422752496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302756a7452317b%3A0xfe8bdcb107b21c72!2sInstitut%20Sup%C3%A9rieur%20des%20Sciences%20Appliqu%C3%A9es%20et%20de%20Technologie%20de%20Sousse!5e0!3m2!1sfr!2stn!4v1753911314455!5m2!1sfr!2stn"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
