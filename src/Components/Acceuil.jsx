import React from 'react';
import { Link } from 'react-router-dom';
import cn from '../lib/utils';
import AboutSection from './AboutSection';
import DiscoverSection from './DiscoverSection';
import Map from './Map';
import Footer from './Footer';

export default function Acceuil() {
  return (
    <section className="w-full h-screen relative">
      {/* Background Image */}
      <img
        src="/img1.JPG"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />


      {/* Centered Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-white text-center max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Bienvenue à TPL ISSATSO
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-medium">
          À plusieurs, on fait bouger les lignes
        </p>
        <div className="mt-6 transition-transform duration-200 hover:scale-110">
          <Link
            to="/formation"
            className={cn(
              'border px-4 py-2 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg md:text-xl font-semibold hover:text-black hover:bg-white'
            )}
          >
            À propos de nos formations
          </Link>
        </div>
      </div>
      {/*about section*/}
      <AboutSection/>
      <DiscoverSection/>
      <Map/>
      <Footer/>
    </section>
  );
}
