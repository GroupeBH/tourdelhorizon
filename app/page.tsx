"use client";
import Image from "next/image";
// import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// const services = [
//   {
//     title: "Événementiel",
//     desc: "Organisation d'événements sur-mesure, corporate, privés et culturels.",
//     icon: "🎉",
//   },
//   {
//     title: "Communication",
//     desc: "Stratégie de communication, branding, réseaux sociaux, relations presse.",
//     icon: "💬",
//   },
//   {
//     title: "Marketing",
//     desc: "Campagnes innovantes, influence, activation de marque.",
//     icon: "📈",
//   },
//   {
//     title: "Conseil",
//     desc: "Accompagnement, audit, formation, coaching.",
//     icon: "🧠",
//   },
//   {
//     title: "Production",
//     desc: "Photo, vidéo, digital, supports print & web.",
//     icon: "🎥",
//   },
//   {
//     title: "Gestion de projet",
//     desc: "Suivi, coordination, reporting, gestion agile.",
//     icon: "📋",
//   },
// ];

// const testimonials = [
//   {
//     name: "Sarah M.",
//     role: "Responsable RH",
//     quote:
//       "Une équipe créative et professionnelle, notre événement a été un vrai succès !",
//     avatar: "/avatar1.png",
//   },
//   {
//     name: "Jean K.",
//     role: "Directeur Marketing",
//     quote:
//       "Tour de l’Horizon a boosté notre image de marque avec une campagne remarquable.",
//     avatar: "/avatar2.png",
//   },
//   {
//     name: "Fatou D.",
//     role: "Entrepreneure",
//     quote:
//       "Un accompagnement sur-mesure, à l’écoute et toujours force de proposition.",
//     avatar: "/avatar3.png",
//   },
// ];

// const partners = [
//   "Logo1", "Logo2", "Logo3", "Logo4", "Logo5"
// ];

export default function Home() {
  // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--light-gray)]">
      
      {/* HERO */}
      <section className="relative w-full flex flex-col-reverse md:flex-row items-center justify-between min-h-[80vh] pb-8 overflow-hidden">
        {/* SVG Background */}
        <svg
          className="hero-svg-bg-bg"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          preserveAspectRatio="none"
        >
          <circle cx="1200" cy="100" r="180" fill="#8fd3f4" fillOpacity="0.25"/>
          <circle cx="300" cy="500" r="220" fill="#ff9900" fillOpacity="0.13"/>
          <ellipse cx="900" cy="400" rx="180" ry="80" fill="#2234ae" fillOpacity="0.10"/>
          <ellipse cx="200" cy="100" rx="120" ry="60" fill="#ff9900" fillOpacity="0.19"/>
          <ellipse cx="900" cy="150" rx="100" ry="40" fill="#8fd3f4" fillOpacity="0.18"/>
        </svg>
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center px-6 md:px-16 relative z-10">
          <motion.h1
            className="hero-title text-3xl md:text-5xl font-extrabold mb-6 animated-gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Donnez de l{"'"}ampleur à vos <span className="text-[var(--orange)]">événements</span> <br />
            et à votre <span className="text-[#8fd3f4]">image</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-[var(--gray)] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3 }}
          >
            Agence de communication & organisation d{"'"}événements à Kinshasa – <span className="text-[var(--orange)] font-semibold">Créativité</span>, <span className="text-[#2234ae] font-semibold">élégance</span> et <span className="text-[#8fd3f4] font-semibold">efficacité</span> pour des expériences inoubliables.
          </motion.p>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="hero-cta text-center bg-[var(--blue)] text-white font-semibold py-3 px-8 rounded-full shadow hero-glow hover:bg-[var(--orange)] transition-colors">
              <Link href="/contact">Contactez-nous</Link>
            </div>
            <div className="hero-cta text-center border-2 border-[var(--blue)] text-[var(--blue)] font-semibold py-3 px-8 rounded-full hover:bg-[var(--blue)] hover:text-white transition-colors">
              <Link href="/services">Nos services</Link>
            </div>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="rounded-3xl shadow-2xl bg-white/60 backdrop-blur-lg p-4 hero-glow"
          >
            <Image
              src="/event-hero.png"
              alt="Événement élégant à Kinshasa"
              width={420}
              height={320}
              className="rounded-2xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* À propos */}
      <section id="about" className="relative py-24 bg-gradient-to-br from-white via-[var(--light-gray)] to-[#f5faff] overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[var(--blue)] opacity-10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12 z-10 relative">
          {/* Bloc image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white/70 backdrop-blur-lg transition-transform hover:scale-105 duration-300">
              <Image
                src="/about-img.png"
                alt="Tour de l’Horizon équipe"
                width={420}
                height={320}
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
          {/* Bloc texte */}
          <div className="md:w-1/2 flex flex-col items-start">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animated-gradient-text">À propos de nous</h2>
            <p className="text-lg text-[var(--gray)] mb-6">
              <span className="font-semibold text-[var(--blue)]">Tour de l’Horizon</span> est une agence de communication et d’événementiel basée à Kinshasa, reconnue pour sa créativité, son professionnalisme et son engagement humain. Depuis 2018, nous accompagnons entreprises et institutions dans la réussite de leurs projets, de la stratégie à la réalisation, avec passion et innovation.
            </p>
            <ul className="mb-6 space-y-2 text-[var(--foreground)]">
              <li>✔️ Événementiel sur-mesure et communication 360°</li>
              <li>✔️ Équipe créative & expérimentée</li>
              <li>✔️ Plus de 200 clients satisfaits</li>
            </ul>
            <div className="inline-block bg-[var(--orange)] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[var(--blue)] hover:text-white transition-colors text-lg">
              <Link href="/about">Découvrir l{"'"}agence</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
     <section id="services" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[var(--orange)] opacity-10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animated-gradient-text text-center">Nos Services</h2>
        <p className="text-center text-lg text-[var(--gray)] mb-12 max-w-2xl mx-auto">
          Notre agence propose une offre complète pour faire rayonner vos projets : événementiel, communication, production, conseil et plus encore.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Tu peux réutiliser le même tableau de services que pour la page dédiée */}
          <div className="glass rounded-3xl p-8 flex flex-col items-center shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 group">
            <span className="text-5xl mb-4">🎉</span>
            <h3 className="text-xl font-bold mb-2 animated-gradient-text group-hover:text-[var(--orange)] transition-colors">Événementiel sur-mesure</h3>
            <p className="text-[var(--gray)] text-center">Organisation clé en main de tous vos événements professionnels ou privés.</p>
          </div>
          <div className="glass rounded-3xl p-8 flex flex-col items-center shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 group">
            <span className="text-5xl mb-4">💡</span>
            <h3 className="text-xl font-bold mb-2 animated-gradient-text group-hover:text-[var(--orange)] transition-colors">Communication globale</h3>
            <p className="text-[var(--gray)] text-center">Stratégie, identité visuelle, contenus, réseaux sociaux, relations presse.</p>
          </div>
          <div className="glass rounded-3xl p-8 flex flex-col items-center shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 group">
            <span className="text-5xl mb-4">🚚</span>
            <h3 className="text-xl font-bold mb-2 animated-gradient-text group-hover:text-[var(--orange)] transition-colors">Production & logistique</h3>
            <p className="text-[var(--gray)] text-center">Gestion technique, scénographie, logistique terrain, prestataires.</p>
          </div>
          <div className="glass rounded-3xl p-8 flex flex-col items-center shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 group">
            <span className="text-5xl mb-4">🤝</span>
            <h3 className="text-xl font-bold mb-2 animated-gradient-text group-hover:text-[var(--orange)] transition-colors">Conseil & accompagnement</h3>
            <p className="text-[var(--gray)] text-center">Coaching, audit, formation, accompagnement personnalisé.</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div
            className="inline-block bg-[var(--blue)] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[var(--orange)] transition-colors text-lg"
          >
            <Link href="/services">Découvrir tous nos services</Link>
          </div>
        </div>
      </div>
    </section>

      {/* Portfolio */}
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
            ].map((real) => (
              <div
                key={real.title}
                className="relative group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <Image
                  src={real.img}
                  width={420}
                  height={320}
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
            <div
              className="inline-block bg-[var(--orange)] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[var(--blue)] transition-colors text-lg"
            >
              <Link href="/services">Voir tous nos services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section id="testimonials" className="relative py-24 bg-gradient-to-br from-white via-[#f5faff] to-[var(--light-gray)] overflow-hidden">
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--orange)] opacity-10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animated-gradient-text text-center">Ils nous font confiance</h2>
          <p className="text-center text-lg text-[var(--gray)] mb-12 max-w-2xl mx-auto">
            Découvrez les retours de nos clients et partenaires sur leur expérience avec Tour de l’Horizon.
          </p>
          <div className="flex flex-col md:grid md:grid-cols-3 gap-8 overflow-x-auto pb-4 md:overflow-visible">
            {[
              {
                avatar: "/avatar1.png",
                name: "Fatou M.",
                role: "Directrice Marketing",
                text: "Une équipe créative, réactive et toujours à l’écoute. Nos événements ont pris une nouvelle dimension !",
              },
              {
                avatar: "/avatar2.png",
                name: "Jean K.",
                role: "CEO, StartUp RDC",
                text: "Professionnalisme, rigueur et originalité. Je recommande vivement Tour de l’Horizon.",
              },
              {
                avatar: "/avatar3.png",
                name: "Linda S.",
                role: "Responsable Com.",
                text: "Un accompagnement sur-mesure et des résultats au-delà de nos attentes. Merci !",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="glass rounded-3xl p-8 shadow-xl flex flex-col items-center text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300 group"
              >
                <Image
                  src={t.avatar}
                  width={420}
                  height={320}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg mb-4 group-hover:border-[var(--orange)] transition-colors"
                />
                <blockquote className="italic text-[var(--gray)] mb-4 relative">
                  <svg className="w-6 h-6 absolute -left-7 -top-2 text-[var(--orange)] opacity-40" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 6.17A5.98 5.98 0 0 0 2 12c0 3.31 2.69 6 6 6v-2c-2.21 0-4-1.79-4-4 0-1.86 1.28-3.41 3-3.86V6.17zm9 0A5.98 5.98 0 0 0 11 12c0 3.31 2.69 6 6 6v-2c-2.21 0-4-1.79-4-4 0-1.86 1.28-3.41 3-3.86V6.17z"/></svg>
                  {t.text}
                </blockquote>
                <div className="font-bold text-[var(--blue)]">{t.name}</div>
                <div className="text-sm text-[var(--orange)]">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section id="partners" className="relative py-20 bg-gradient-to-tl from-white via-[#f5faff] to-[var(--light-gray)] overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--blue)] opacity-10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animated-gradient-text text-center">Ils collaborent avec nous</h2>
          <p className="text-center text-lg text-[var(--gray)] mb-12 max-w-2xl mx-auto">
            Entreprises, institutions et marques qui nous font confiance pour leurs projets.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
            {[
              { logo: "/logo1.png", name: "Entreprise A" },
              { logo: "/logo2.png", name: "Institution B" },
              { logo: "/logo3.png", name: "Marque C" },
              { logo: "/logo4.png", name: "ONG D" },
              { logo: "/logo5.png", name: "Startup E" },
            ].map((p) => (
              <div
                key={p.name}
                className="glass rounded-xl p-4 flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300 group w-32 h-24"
                style={{ minHeight: 96 }}
              >
                <Image
                  src={p.logo}
                  width={420}
                  height={320}
                  alt={p.name}
                  className="max-h-16 max-w-[90px] object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  style={{ filter: "grayscale(0.3)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action / Newsletter */}
      <section id="contact" className="py-20 bg-gradient-to-r from-[var(--blue)] to-[var(--orange)]">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-white mb-6">Prêt à collaborer ?</h2>
          <p className="text-lg text-white mb-6">N{"'"}hésitez pas à nous contacter pour toute question ou demande d{"'"}information.</p>
          <a href="#" className="bg-white text-[var(--blue)] font-bold py-3 px-8 rounded-full hover:bg-[var(--orange)] hover:text-white transition-colors shadow-lg">Contactez-nous</a>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Bloc infos agence */}
          <div>
            <h2 className="text-3xl font-bold mb-6 animated-gradient-text">Contact & Infos</h2>
            <div className="space-y-4 text-[var(--gray)] text-lg">
              <div>
                <span className="font-semibold text-[var(--blue)]">Adresse :</span><br />
                123 Avenue de la Communication, Gombe, Kinshasa, RDC
              </div>
              <div>
                <span className="font-semibold text-[var(--blue)]">Téléphone :</span><br />
                <a href="tel:+243900000000" className="hover:text-[var(--orange)] transition">+243 900 000 000</a>
              </div>
              <div>
                <span className="font-semibold text-[var(--blue)]">Email :</span><br />
                <a href="mailto:contact@tourdelhorizon.com" className="hover:text-[var(--orange)] transition">contact@tourdelhorizon.com</a>
              </div>
              <div>
                <span className="font-semibold text-[var(--blue)]">Horaires :</span><br />
                Lundi - Vendredi : 8h30 - 18h<br />
                Samedi : 9h - 13h
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="rounded-full p-2 hover:bg-[var(--orange)]/20 transition">
                <svg width="24" height="24" fill="none" stroke="currentColor" className="icon-gradient"><circle cx="12" cy="12" r="4"/><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M17.5 6.5h.01"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="rounded-full p-2 hover:bg-[var(--orange)]/20 transition">
                <svg width="24" height="24" fill="none" stroke="currentColor" className="icon-gradient"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="rounded-full p-2 hover:bg-[var(--orange)]/20 transition">
                <svg width="24" height="24" fill="none" stroke="currentColor" className="icon-gradient"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 8a4 4 0 0 1 4 4v6h-4v-6a2 2 0 0 0-4 0v6H8v-6a4 4 0 0 1 4-4z"/><circle cx="8" cy="8" r="1"/></svg>
              </a>
            </div>
          </div>
          {/* Bloc formulaire rapide */}
          <form className="glass rounded-xl p-8 shadow-md flex flex-col gap-6">
            <h3 className="text-xl font-bold mb-2 text-[var(--blue)]">Écrivez-nous</h3>
            <input
              type="text"
              placeholder="Votre nom"
              className="border border-[var(--light-gray)] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--orange)]"
              required
            />
            <input
              type="email"
              placeholder="Votre email"
              className="border border-[var(--light-gray)] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--orange)]"
              required
            />
            <textarea
              placeholder="Votre message"
              className="border border-[var(--light-gray)] rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--orange)]"
              rows={4}
              required
            />
            <button
              type="submit"
              className="hero-cta bg-[var(--blue)] text-white font-semibold py-3 px-8 rounded-full shadow hover:bg-[var(--orange)] transition-colors"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}