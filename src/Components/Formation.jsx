import React from 'react';
import { Link } from 'react-router-dom';
import FormationsCols from './2024/FormationCols';
import GalerieFormations from './2024/GalerieFormations';
import Footer from './Footer';
import FormationCols2 from './2025/FormationCols2';
import GalerieFormations2 from './2025/GalerieFormations2';

export default function Formation() {
  return (
    <section className="w-full justify-center items-center bg-white">
      <div className="relative w-full overflow-hidden shadow-lg">
        {/* Background Image */}
        <img
          src="/try.jpg"
          alt="Background"
          className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-white text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Formations TPL ISSATSO 2025/2026
          </h1>
          <p className="mt-3 text-base sm:text-lg md:text-xl font-medium">
            Renforcez vos compétences grâce à nos ateliers spécialisés.
          </p>
        </div>
      </div>
      <div className='mb-7'>
        <FormationCols2/>
        <GalerieFormations2/>
        <FormationsCols/>
        <GalerieFormations/>
      </div>
      <Footer/>
    </section>
  );
}
