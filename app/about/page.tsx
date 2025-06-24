"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-[var(--light-gray)] flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 flex flex-col items-center justify-center hero-bg overflow-hidden">
        <motion.h1
          className="hero-title text-4xl md:text-6xl font-extrabold mb-4 animated-gradient-text text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          À propos de <span className="text-[var(--orange)]">Tour de l{"'"}Horizon</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-[var(--gray)] mb-8 text-center max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3 }}
        >
          L{"'"}excellence de la communication et de l{"'"}événementiel à Kinshasa, portée par la créativité, l’innovation et l’humain.
        </motion.p>
        <Image
          src="/about.png"
          alt="Tour Horizon équipe"
          width={520}
          height={340}
          className="rounded-3xl shadow-2xl mx-auto"
        />
      </section>

      {/* Valeurs et mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 animated-gradient-text">Notre mission</h2>
            <p className="text-lg text-[var(--gray)] mb-6">
              Accompagner les entreprises, institutions et particuliers dans la conception, l{"'"}organisation et la réussite de leurs événements et stratégies de communication, en apportant une touche d{"'"}excellence, de créativité et de fiabilité.
            </p>
            <ul className="space-y-3 text-[var(--foreground)]">
              <li>✔️ Écoute active et conseil personnalisé</li>
              <li>✔️ Créativité et innovation au service de vos projets</li>
              <li>✔️ Réseau de partenaires de confiance</li>
              <li>✔️ Respect des délais et des budgets</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 animated-gradient-text">Nos valeurs</h2>
            <ul className="space-y-3 text-lg text-[var(--gray)]">
              <li><span className="font-bold text-[var(--blue)]">Professionnalisme</span> – Un engagement total pour la réussite de chaque projet.</li>
              <li><span className="font-bold text-[var(--orange)]">Créativité</span> – Des solutions innovantes et originales.</li>
              <li><span className="font-bold text-[#8fd3f4]">Transparence</span> – Une relation de confiance, claire et durable.</li>
              <li><span className="font-bold text-[var(--blue)]">Proximité</span> – Une équipe à taille humaine, proche de ses clients.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Historique & équipe */}
      <section className="py-20 bg-[var(--light-gray)]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 animated-gradient-text">Notre histoire</h2>
            <p className="text-lg text-[var(--gray)] mb-4">
              Fondée en 2018 à Kinshasa, Tour de l’Horizon s’est imposée comme une référence dans l’événementiel et la communication en RDC. Notre équipe réunit des experts passionnés, issus de la communication, du marketing et de la production événementielle.
            </p>
            <p className="text-lg text-[var(--gray)]">
              Nous avons accompagné plus de 200 clients, organisé des événements d’envergure et contribué au rayonnement de nombreuses marques et institutions.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex flex-col items-center"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/team.png"
              alt="Équipe Tour de l’Horizon"
              width={420}
              height={320}
              className="rounded-xl shadow-xl"
            />
            <div className="mt-6 text-center text-[var(--gray)]">
              <span className="font-bold text-[var(--blue)]">Une équipe passionnée, créative et engagée</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 animated-gradient-text">Chiffres clés</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-extrabold text-[var(--orange)] mb-2">+200</div>
              <div className="text-[var(--gray)]">Clients accompagnés</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-[var(--blue)] mb-2">+350</div>
              <div className="text-[var(--gray)]">Événements organisés</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-[#8fd3f4] mb-2">15</div>
              <div className="text-[var(--gray)]">Collaborateurs</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold text-[var(--orange)] mb-2">2018</div>
              <div className="text-[var(--gray)]">Année de création</div>
            </div>
          </div>
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="py-20 bg-gradient-to-r from-[var(--blue)] to-[var(--orange)]">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-white mb-6">Envie de collaborer avec nous ?</h2>
          <div className="bg-white text-[var(--blue)] font-bold py-3 px-8 rounded-full hover:bg-[var(--orange)] hover:text-white transition-colors shadow-lg">
            <Link href="/#contact">Contactez-nous</Link>
          </div>
        </div>
      </section>
    </main>
  );
}