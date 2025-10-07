import React from 'react'

const workshops = [
  {
    image: '/formation.jpeg',
  },
  {
    image:'/formation/1.jpg'
  },
  {
    image:'/formation/team.jpg'
  },
  {
    image:'/formation/3.jpg'
  },
  {
    image:'/formation/4.jpg'
  },
  {
    image:'/formation/5.jpg'
  },
  {
    image:'/formation/6.jpg'
  },
  {
    image:'/formation/7.jpg'
  },
  {
    image:'/formation/8.jpg'
  },
  {
    image:'/formation/9.jpg'
  },
]


export default function GalerieFormations() {
  return (
    <section className="px-4 py-12 bg-gray-50">
      <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-10">
        <span className="text-emerald-700 font-extrabold">Galerie</span> des Formations
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {workshops.map((workshop, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden relative transition-transform duration-400 hover:scale-106">
            {/* Image */}
            <div className="h-[220px] sm:h-[315px] md:h-[300px] w-full overflow-hidden">
              <img
                src={workshop.image}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
