import React from 'react'
import EventCards from './EventCrad'
import Footer from './Footer'
import GalerieEvenements from './GalerieEvenements'

export default function Evenements() {
  return (
        <section className="w-full justify-center items-center bg-white">
      <div className="relative w-full overflow-hidden shadow-lg">
        {/* Background Image */}
        <img
          src="/evenement.jpg"
          alt="Background"
          className="w-full h-[300px] sm:h-[500px] md:h-[400px] object-cover"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-white text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Evenements TPL ISSATSO 2024/2025
          </h1>
          <p className="mt-3 text-base sm:text-lg md:text-xl font-medium">
            Des événements efficaces visant à générer un changement réel dans notre milieu
          </p>
        </div>
      </div>
      <div>
        <EventCards/>
        <GalerieEvenements/>
      </div>
      <div>
        <Footer/>
      </div>
      
    </section>
  )
}
