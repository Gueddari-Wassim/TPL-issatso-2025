import { MapPin } from 'lucide-react';

const workshops = [
  {
    title: 'JavaScript Pour Les Débutants',
    date: '20 Novembre 2025 à 19h30',
    shortDate: '20 Novembre 2025',
    location: 'Bibliothéque ISSAT Sousse',
    description: 'Formation JavaScript pour les débutants + introduction aux bibliothèque populaire React.js',
        image: '/formation/2025/js.jpg',
        journee: '• 2 journée',
    certification: 'TPL & Horizon Academy Certified',
  },
];

export default function FormationCols2() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-14">
        Nos <span className="text-emerald-700">Ateliers</span> Récents
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {workshops.map((workshop, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transform transition duration-300 hover:-translate-y-1 group overflow-hidden relative flex flex-col"
          >
            
            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow z-10">
              {workshop.certification}
            </div>

            
            <div className="h-[300px] w-full overflow-hidden">
              <img
                src={workshop.image}
                alt={workshop.title}
                className="w-full object-cover transition duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-110"
              />
            </div>

            <div className="p-5 flex flex-col justify-between grow space-y-3">
              <div className="flex items-center text-sm text-gray-500 gap-2">
                <MapPin size={16} />
                <span>{workshop.location}</span>
                <span>{workshop.journee}</span>
              </div>

              <h2 className="text-xl font-bold text-gray-800">
                {workshop.title}
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed">
                {workshop.description}
              </p>

              {workshop.plus && (
                <p className="text-gray-500 text-sm">{workshop.plus}</p>
              )}

              <div className="flex justify-between items-center pt-4 border-t text-sm text-gray-600">
                <span className="text-emerald-700 font-medium">{workshop.shortDate}</span>
                <span className="italic text-gray-500">Places limitées</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

