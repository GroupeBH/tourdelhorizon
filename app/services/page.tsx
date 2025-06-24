"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "Événementiel sur-mesure",
    desc: "Conception, organisation et gestion complète de vos événements professionnels ou privés, avec créativité et rigueur.",
    icon: "🎉",
  },
  {
    title: "Communication globale",
    desc: "Stratégie, branding, identité visuelle, création de contenus, gestion des réseaux sociaux et relations presse.",
    icon: "💡",
  },
  {
    title: "Production & logistique",
    desc: "Scénographie, technique, audiovisuel, gestion des prestataires et logistique terrain pour des événements sans stress.",
    icon: "🚚",
  },
  {
    title: "Conseil & accompagnement",
    desc: "Audit, coaching, formation et accompagnement personnalisé pour booster votre image et vos projets.",
    icon: "🤝",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[var(--light-gray)] py-24">
      <section className="container mx-auto px-6 pb-10">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold animated-gradient-text text-center mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
        >
          Nos Services
        </motion.h1>
        <motion.p
          className="text-center text-lg md:text-xl text-[var(--gray)] max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Découvrez l’ensemble de nos expertises pour sublimer vos projets à Kinshasa et partout en RDC.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className="glass rounded-3xl p-8 flex flex-col items-center shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <span className="text-5xl mb-4">{service.icon}</span>
              <h3 className="text-xl font-bold mb-2 animated-gradient-text group-hover:text-[var(--orange)] transition-colors">{service.title}</h3>
              <p className="text-[var(--gray)] text-center">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="relative py-24 bg-gradient-to-bl from-white via-[#f5faff] to-[var(--light-gray)] overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--blue)] opacity-10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animated-gradient-text text-center">Nos Réalisations</h2>
            <p className="text-center text-lg text-[var(--gray)] mb-12 max-w-2xl mx-auto">
            Découvrez quelques-unes de nos réalisations marquantes : événements, campagnes et projets qui ont marqué nos clients.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {/* Exemple de réalisations, adapte les images/titres selon ton contenu */}
            {[
                { img: "/portfolio1.jpg", title: "Gala des Entreprises", desc: "Un événement corporate d’exception à Kinshasa." },
                { img: "/portfolio2.jpg", title: "Lancement de produit", desc: "Mise en scène innovante pour une nouvelle marque." },
                { img: "/portfolio3.jpg", title: "Conférence internationale", desc: "Gestion logistique et communication globale." },
                { img: "/portfolio4.jpg", title: "Soirée caritative", desc: "Ambiance élégante et mobilisation réussie." },
                { img: "/portfolio5.jpg", title: "Festival urbain", desc: "Scénographie, technique et animation grand public." },
                { img: "/portfolio6.jpg", title: "Séminaire RH", desc: "Organisation sur-mesure pour 200+ participants." },
            ].map((real, i) => (
                <div
                key={real.title}
                className="relative group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
                >
                <img
                    src={real.img}
                    alt={real.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2 animated-gradient-text">{real.title}</h3>
                    <p className="text-white text-sm">{real.desc}</p>
                </div>
                </div>
            ))}
            </div>
            <div className="flex justify-center">
            <a
                href="/services"
                className="inline-block bg-[var(--orange)] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[var(--blue)] transition-colors text-lg"
            >
                Voir tous nos services
            </a>
            </div>
        </div>
</section>
    </main>
  );
}