// components/DiscoverSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const cards = [
  {
    label: 'Formations',
    img: '/formation.jpeg',
    route: '/formation',
  },
  {
    label: 'Événements',
    img: '/event.jpg',
    route: '/evenements',
  },
  {
    label: 'Notre équipe',
    img: 'team.jpg',
    route: '/equipe',
  },
];

export default function DiscoverSection() {
  return (
    <div className="bg-teal-100 py-22 px-4">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">À Explorer</h2>
        <p className="text-lg text-gray-600 mt-3">
          Partez à la découverte de TPL ISSATSO
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {cards.map((card, index) => (
          <Link to={card.route} key={index}>
            <div className="relative overflow-hidden bg-teal-500 rounded-2xl shadow-lg group transition-transform duration-400 hover:scale-106">
              <img
                src={card.img}
                alt={card.label}
                className="w-full h-full object-cover text-white  transition-opacity duration-400 hover:opacity-70"
              />
              <div className="absolute bottom-0 w-full bg-black/50 text-white px-4 py-3 text-lg font-semibold">
                {card.label}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
