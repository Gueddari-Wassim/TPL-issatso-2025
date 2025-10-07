import React from 'react'

const workshops = [
    {
    image:'/event/q.jpg'
  },
  {
    image:'/event/s.jpg'
  },
  {
    image:'/event/d.jpg'
  },
  {
    image:'/event/f.jpg'
  },
  {
    image:'/event/g.jpg'
  },
  {
    image:'/event/h.jpg'
  },
  {
    image:'/event/j.jpg'
  },
  {
    image:'/event/k.jpg'
  },
  {
    image:'/event/l.jpg'
  },
  {
    image:'/event/m.jpg'
  },
  {
    image:'/event/w.jpg'
  },
  {
    image:'/event/x.jpg'
  },
  {
    image:'/event/a.jpg'
  },
  {
    image:'/event/z.jpg'
  },
  {
    image:'/event/e.jpg'
  },
  {
    image:'/event/r.jpg'
  },
  {
    image:'/event/t.jpg'
  },
  {
    image:'/event/y.jpg'
  },
  {
    image:'/event/u.jpg'
  },
  {
    image:'/event/i.jpg'
  },
  {
    image:'/event/o.jpg'
  },
  
]

export default function GalerieEvenements() {
  return (
    <section className="px-4 py-12 bg-gray-50">
      <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-10">
        <span className="text-emerald-700 font-extrabold">Galerie</span> des Événements
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

