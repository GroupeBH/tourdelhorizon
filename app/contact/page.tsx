"use client";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--light-gray)] flex flex-col justify-center py-24">
      <section className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Infos de contact */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold animated-gradient-text mb-6">Contactez-nous</h1>
          <p className="text-lg text-[var(--gray)] mb-8">
            Une question ? Un projet ? Notre équipe vous répond rapidement et avec le sourire.
          </p>
          <ul className="space-y-5 text-lg">
            <li className="flex items-center gap-4">
              <MapPin className="text-[var(--orange)]" />
              123 Avenue de la Communication, Gombe, Kinshasa, RDC
            </li>
            <li className="flex items-center gap-4">
              <Phone className="text-[var(--orange)]" />
              <a href="tel:+243900000000" className="hover:text-[var(--blue)] transition">+243 900 000 000</a>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="text-[var(--orange)]" />
              <a href="mailto:contact@tourdelhorizon.com" className="hover:text-[var(--blue)] transition">contact@tourdelhorizon.com</a>
            </li>
          </ul>
          <div className="flex gap-4 mt-8">
            {/* Réseaux sociaux */}
            {/* Tu peux réutiliser les icônes Lucide ou React-Icons */}
            <a href="#" aria-label="Instagram" className="rounded-full p-2 hover:bg-[var(--orange)]/20 transition text-xl text-[var(--blue)]">
              <svg width="24" height="24" fill="none" stroke="currentColor" className="icon-gradient"><circle cx="12" cy="12" r="4"/><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M17.5 6.5h.01"/></svg>
            </a>
            <a href="#" aria-label="Facebook" className="rounded-full p-2 hover:bg-[var(--orange)]/20 transition text-xl text-[var(--blue)]">
              <svg width="24" height="24" fill="none" stroke="currentColor" className="icon-gradient"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="rounded-full p-2 hover:bg-[var(--orange)]/20 transition text-xl text-[var(--blue)]">
              <svg width="24" height="24" fill="none" stroke="currentColor" className="icon-gradient"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 8a4 4 0 0 1 4 4v6h-4v-6a2 2 0 0 0-4 0v6H8v-6a4 4 0 0 1 4-4z"/><circle cx="8" cy="8" r="1"/></svg>
            </a>
          </div>
        </div>
        {/* Formulaire de contact */}
        <form className="glass rounded-2xl p-10 shadow-xl flex flex-col gap-6 bg-white/80">
          <h2 className="text-2xl font-bold mb-2 text-[var(--blue)]">Écrivez-nous</h2>
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
      </section>
    </main>
  );
}