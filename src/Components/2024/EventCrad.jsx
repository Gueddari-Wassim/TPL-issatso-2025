import { Calendar, CheckCircle, MapPin, Clock } from "lucide-react";

const events = [
  {
    title: "Speak UP !",
    date: "jeu. 24 avr",
    category: "Communauté",
    verifiedText: "Votre voix compte – communication et prise de parole",
    description:
      "Événement pour améliorer votre prise de parole en public, développer vos compétences interpersonnelles et renforcer vos soft skills",
    location: "ISSAT Sousse",
    time: "15h00 • 1 journée",
    extra: "Pour plus d'infos, contactez-nous ou suivez notre page",
    image: "/event/8.jpg",
  },
  {
    title: "رمضان لينا الكل",
    date: "lun. 17 fev.",
    category: "Caritatif",
    verifiedText: "Action solidaire durant le Ramadan",
    description:
      "Événement caritatif visant à collecter et distribuer vêtements et nourriture aux personnes démunies.",
    location: "ISSAT Sousse",
    time: "09h00 • 7 journée",
    extra: "Pour plus d'infos, contactez-nous ou suivez notre page",
    image: "/event/3.jpg",
  },
  {
    title: "TPL VR Experience",
    date: "dim. 12 jan",
    category: "Éducation",
    verifiedText: "Expérimenter Les Technologies De Réalité Virtuelle",
    description:
      "Événement pour découvrir les technologies de la réalité virtuelle. Plongez dans des expériences interactives et explorez le futur du numérique.",
    location: "VR Park Outmind",
    time: "14h00 • 1 journée",
    extra: "Pour plus d'infos, contactez-nous ou suivez notre page",
    image: "/event/2.jpg",
  },
  
  {
    title: "Événement de consolidation d'équipe",
    date: "lun. 4 nov",
    category: "Communauté",
    verifiedText: "Améliorer La Communication Et La Collaboration",
    description:
      "Événement pour renforcer la collaboration, la communication et la confiance entre les membres du club.",
    location: "--",
    time: "15h00 • 1 journée",
    extra: "Pour plus d'infos, contactez-nous ou suivez notre page",
    image: "/event/1.jpg",
  },
];

export default function EventCards() {
  return (
    <section className="px-4 py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
        Programme des <span className="text-emerald-600">Événements</span> 2024/2025
      </h2>
      
      <div className="grid gap-8 max-w-7xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="group rounded-2xl overflow-hidden bg-white shadow hover:shadow-xl transition duration-300"
          >
            <div className="relative h-68">
              <img
                src={event.image}
                alt="event image"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
              <div className=" border-2 absolute top-3 left-3 bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                {event.date}
              </div>
              <div className="absolute top-3 right-3 bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full border-2">
                {event.category}
              </div>
            </div>
            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
              <div className="flex items-center text-green-600 text-sm font-medium">
                <CheckCircle className="w-4 h-4 mr-1" /> {event.verifiedText}
              </div>
              <p className="text-gray-600 text-sm">{event.description}</p>
              <div className="flex items-center gap-2 text-sm text-gray-700 mt-2">
                <MapPin className="w-4 h-4" /> {event.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Clock className="w-4 h-4" /> {event.time}
              </div>
              <p className="text-xs text-center italic text-gray-500 mt-2">{event.extra}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
