const workshops = [
  {
    image:'/formation/2025/1.jpg'
  },
  {
    image:'/formation/2025/2.jpg'
  },
  {
    image:'/formation/2025/3.jpg'
  },
  {
    image:'/formation/2025/4.jpg'
  },
  {
    image:'/formation/2025/5.jpg'
  },
  {
    image:'/formation/2025/6.jpg'
  },
  {
    image:'/formation/2025/7.jpg'
  },
  {
    image:'/formation/2025/8.jpg'
  },
  {
    image:'/formation/2025/9.jpg'
  },
  {
    image:'/formation/2025/10.jpg'
  },
]
export default function GalerieFormations2() {
  return (
    <section className="px-4 py-12 bg-gray-50">
      <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-10">
        <span className="text-emerald-700 font-extrabold">Galerie</span> des Formations 2025/2026
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
