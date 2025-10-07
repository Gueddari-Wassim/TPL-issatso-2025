import React from 'react'
import Members from './Members'
import Footer from './Footer'


export default function Equipe() {
  return (
    <section className='pt-12 bg-gray-50'> 
      <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-2">
        <span className="text-emerald-700 font-extrabold">Bureau</span> Exécutif 2025
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-green-300 mx-auto mb-4"></div>
      <div className='px-4'>
      <p className='text-center mx-auto max-w-xl text-sm sm:text-base'>
        L'équipe dirigeante de TPL ISSATSO pour l’année 2025 réunit de jeunes talents dynamiques, chacun assumant 
        la responsabilité d’un secteur stratégique afin de contribuer activement à la réalisation des objectifs du club.
      </p>
      </div>

      <div>
        <Members/>
      </div>
      <div>
        <Footer/>
      </div>
    </section>

  )
}
