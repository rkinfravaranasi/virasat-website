import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Compass, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-virasat-ivory text-virasat-charcoal min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-1 flex items-center justify-center py-32 px-4 text-center">
        <div className="max-w-md space-y-6">
          <div className="w-16 h-16 rounded-full bg-virasat-green/10 border border-virasat-gold/40 flex items-center justify-center mx-auto text-virasat-green">
            <Compass className="w-8 h-8 text-virasat-gold animate-spin-slow" />
          </div>

          <span className="font-serif text-6xl font-bold text-virasat-green-dark block">
            404
          </span>

          <h1 className="font-serif text-2xl font-bold text-virasat-green-dark">
            Page Not Found
          </h1>

          <p className="text-xs text-virasat-charcoal/70 leading-relaxed font-light">
            The page or project dossier you requested is unavailable or has been relocated within
            the Virasat master catalog.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto bg-gold-metallic text-virasat-green-dark text-xs uppercase tracking-widest font-bold px-6 py-3 rounded hover:brightness-110 transition-all"
            >
              Return Home
            </Link>
            <Link
              href="/projects"
              className="w-full sm:w-auto border border-virasat-gold text-virasat-green-dark text-xs uppercase tracking-widest font-semibold px-6 py-3 rounded hover:bg-virasat-gold transition-all"
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
