// app/layout.tsx
"use client";
import "./globals.css";
import { useState } from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col bg-[var(--light-gray)]">
        {/* HEADER */}
        <header className="fixed top-0 w-full z-50 glass backdrop-blur-lg">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-extrabold tracking-tight" style={{ color: "var(--blue)" }}>
                <span style={{ color: "var(--orange)" }}>TOUR</span> DE L{"'"}HORIZON
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <div className="font-medium hover:text-[var(--orange)] transition-colors">
                <Link href="/" > Accueil</Link>  
              </div>
              <div className="font-medium hover:text-[var(--orange)] transition-colors">
                <Link href="/about">À propos</Link>   
              </div>
              <div  className="font-medium hover:text-[var(--orange)] transition-colors">
                <Link href="/services">Services</Link>
              </div>
              <div className="font-medium hover:text-[var(--orange)] transition-colors">
                <Link href="/contact">Contact</Link>
              </div>
            </div>

            <div className="hidden md:flex gap-3 ml-6">
                <a href="#" aria-label="Instagram" className="rounded-full p-2 hover:bg-[var(--orange)]/20 transition text-xl">
                  <Instagram />
                </a>
                <a href="#" aria-label="Facebook" className="rounded-full p-2 hover:bg-[var(--orange)]/20 transition text-xl">
                  <Facebook />
                </a>
                <a href="#" aria-label="LinkedIn" className="rounded-full p-2 hover:bg-[var(--orange)]/20 transition text-xl">
                  <Linkedin />
                </a>
            </div>
            <div className="md:hidden">
              <button className="focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </nav>
          {menuOpen && (
            <div>
               <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
                  <div className="font-medium hover:text-[var(--orange)] transition-colors">
                    <Link href="/" > Accueil</Link>  
                  </div>
                  <div className="font-medium hover:text-[var(--orange)] transition-colors">
                    <Link href="/about">À propos</Link>   
                  </div>
                  <div  className="font-medium hover:text-[var(--orange)] transition-colors">
                    <Link href="/services">Services</Link>
                  </div>
                  <div className="font-medium hover:text-[var(--orange)] transition-colors">
                    <Link href="/contact">Contact</Link>
                  </div>
                </div>
                <div className="md:hidden flex gap-3 ml-6">
                  <a href="#" aria-label="Instagram" className="rounded-full p-2 hover:bg-[var(--orange)]/20 transition text-xl">
                    <Instagram />
                  </a>
                  <a href="#" aria-label="Facebook" className="rounded-full p-2 hover:bg-[var(--orange)]/20 transition text-xl">
                    <Facebook />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="rounded-full p-2 hover:bg-[var(--orange)]/20 transition text-xl">
                    <Linkedin />
                  </a>
              </div>
            </div>
          )}
        </header>

        {/* Décalage pour le header fixe */}
        <div className="h-20"></div>

        {/* CONTENU DE LA PAGE */}
        <main className="flex-1">{children}</main>

        <footer className="relative z-20 w-full bg-gradient-to-tr from-[#1a223a] via-[#232946] to-[#22223b] backdrop-blur-lg border-t border-[var(--light-gray)] mt-20 text-white">
          <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Bloc 1 : Logo & baseline */}
            <div className="flex flex-col gap-3">
              <span className="text-2xl font-extrabold tracking-tight animated-gradient-text">TOUR DE L{"'"}HORIZON</span>
              <span className="text-[var(--gray)] text-sm">Agence de communication et événementiel à Kinshasa</span>
              <div className="flex gap-3 mt-2">
                {/* Social icons */}
                {/* (copie les mêmes SVG que dans le header, mais en blanc) */}
              </div>
            </div>
            {/* Bloc 2 : Plan du site */}
            <div>
              <h3 className="font-bold mb-3 text-[var(--orange)]">Navigation</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-[var(--orange)] transition-colors">Accueil</Link></li>
                <li><Link href="/about" className="hover:text-[var(--orange)] transition-colors">À propos</Link></li>
                <li><Link href="/services" className="hover:text-[var(--orange)] transition-colors">Services</Link></li>
                <li><Link href="/#portfolio" className="hover:text-[var(--orange)] transition-colors">Réalisations</Link></li>
                <li><Link href="/#contact" className="hover:text-[var(--orange)] transition-colors">Contact</Link></li>
              </ul>
            </div>
            {/* Bloc 3 : Contact rapide */}
            <div>
              <h3 className="font-bold mb-3 text-[var(--orange)]">Contact</h3>
              <ul className="space-y-2 text-[var(--gray)]">
                <li><span className="font-semibold">Adresse :</span><br/> 123 Avenue de la Communication, Gombe, Kinshasa</li>
                <li><span className="font-semibold">Téléphone :</span><br/> <a href="tel:+243900000000" className="hover:text-[var(--orange)]">+243 900 000 000</a></li>
                <li><span className="font-semibold">Email :</span><br/> <a href="mailto:contact@tourdelhorizon.com" className="hover:text-[var(--orange)]">contact@tourdelhorizon.com</a></li>
              </ul>
            </div>
            {/* Bloc 4 : Newsletter */}
            <div>
              <h3 className="font-bold mb-3 text-[var(--orange)]">Newsletter</h3>
              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="rounded-md px-4 py-2 text-[var(--foreground)] bg-white/90 focus:outline-none focus:ring-2 focus:ring-[var(--orange)]"
                />
                <button
                  type="submit"
                  className="bg-[var(--orange)] text-white font-semibold py-2 rounded-md hover:bg-[var(--blue)] transition-colors"
                >
                  S{"'"}inscrire
                </button>
              </form>
              <span className="text-xs text-[var(--gray)] mt-2 block">Recevez nos actus et inspirations événementielles.</span>
            </div>
          </div>
          <div className="text-center text-xs text-[var(--gray)] pb-6">
            &copy; {new Date().getFullYear()} Tour de l{"'"}Horizon. Tous droits réservés.
          </div>
        </footer>
      </body>
    </html>
  );
}