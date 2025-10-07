import React from 'react'

export default function AboutSection() {
  return (
    <div className='mt-22 mb-22'>
        <h1 className='text-4xl md:text-5xl font-extrabold text-gray-800 text-center'>À propos de TPL ISSATSO</h1>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-12 bg-white">
          {/* Left side: Logo/Image */}
          <div className="md:w-1/2 flex justify-center md:justify-center">
            <img src="/logo.png" alt="JCI Hammam Sousse Logo" className="max-w-xs w-full h-auto" />
          </div>

        {/* Right side: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-gray-800 mb-6 text-lg">
          Créé en 2024,Tunisian Programming Lovers IssatSO est le club de programmation de l’Institut Supérieur des Sciences Appliquées et de Technologie de Sousse.

          <br />Nous sommes une communauté de passionnés dédiée à l'apprentissage continu et à l'excellence en programmation.

          Notre mission est d’offrir des formations de qualité et des certifications reconnues, afin d’aider nos membres à renforcer leurs compétences techniques et à se préparer aux défis du monde professionnel.

          Tout au long de l’année, nous organisons des ateliers interactifs, des hackathons stimulants et des séminaires animés par des experts du secteur.

          Rejoignez-nous pour partager votre passion pour la technologie, apprendre de nouvelles compétences et élargir votre réseau professionnel.
            <br />
          <span className='text-xl font-semibold'>Ensemble, programmons notre avenir !</span>
          </p>
          <a href='https://www.facebook.com/profile.php?id=61566916355044&locale=fr_FR'
            className="px-6 py-2 bg-black text-white rounded-full hover:border  hover:bg-white hover:text-black transition"
            target='_blank'>
          Plus d'infos
          </a>
        </div>
      </div>
      </div>
  )
}
