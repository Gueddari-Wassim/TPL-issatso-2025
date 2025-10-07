import React from 'react';

const members = [
  { name: 'Ahmed Houssem Moussa', role: 'President', image: '/Members/houssem.jpg', year: '2025' },
  { name: 'Aziz Essalah', role: 'Vice President', image: '/Members/aziz.jpg' },
  { name: 'Amen Allah Hsouna', role: 'Treasurer', image: '/Members/hsouna.jpg' },
  { name: 'Aziz Rached', role: 'General Secretary', image: '/Members/aziz_rached.jpg' },
  { name: 'Aya Saoudi', role: 'Marketing Manager', image: '/Members/aya_saoudi.jpg' },
  { name: 'Firas Ben Abdejlil', role: 'RH Manager', image: '/Members/firas.jpg' },
  { name: 'Eya Mezzi', role: 'Event Manager', image: '/Members/mezzi.jpg'},
  { name: 'Mohamed Chebil Mahjoub', role: 'Sponsoring Manager', image: '/Members/chbil.jpg' },
  { name: 'Wassim Gueddari', role: 'Marketing Assistant', image: '/Members/wassim.png' },
  { name: 'Cyrine Saoud', role: 'HR Assistant', image: '/Members/cyrine.jpg' },
  { name: 'Ghofrane El Wed', role: 'Sponsoring Assistant', image: '/Members/ghofrane.jpg' },
  { name: 'Abir Kerkni', role: 'Event Assistant', image:'/Members/abir.jpg'}
];

export default function Members() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-16">
      {members.map((member, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-6 text-center space-y-4 relative hover:shadow-xl transition-shadow duration-300"
        >
          {member.name === 'Ahmed Houssem Moussa' && member.year && (
            <div className="absolute bottom-22 right-20 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-2xl shadow">
              {member.year}
            </div>
          )}

          <div className="flex justify-center items-center">
            <img
              src={member.image || 'logo.png'}
              alt={member.name}
              className="w-27 h-27 object-cover rounded-full border-4 border-emerald-300"
            />
          </div>

          <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
          <p className="text-sm text-emerald-700 font-semibold">{member.role}</p>
        </div>
      ))}
    </div>
  );
}
