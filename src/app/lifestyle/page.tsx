import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Trees,
  ShieldCheck,
  Waves,
  Dumbbell,
  Compass,
  Users,
  Sparkles,
  Building2,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Lifestyle & Amenities | VIRASAT Luxury Living Varanasi",
  description:
    "Experience curated gated community living in Varanasi. Botanical parklands, 15,000 sq.ft. residents clubhouse, 3-tier biometric security, and underground utilities.",
};

export default function LifestylePage() {
  return (
    <div className="bg-virasat-ivory text-virasat-charcoal min-h-screen flex flex-col font-sans">
      <Header />

      {/* Cinematic Banner */}
      <section className="relative pt-36 pb-20 bg-virasat-green-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80"
            alt="Virasat Gated Community Lifestyle"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-virasat-green-dark via-virasat-green-dark/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-virasat-gold font-bold mb-4">
            <span className="w-8 h-[1px] bg-virasat-gold" />
            <span>The Gated Community Experience</span>
            <span className="w-8 h-[1px] bg-virasat-gold" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Lifestyle & Amenities
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/75 mt-4 font-light leading-relaxed">
            Where lush botanical landscaping, private club pavilions, and uncompromised security
            converge to create an oasis of generational serenity.
          </p>
        </div>
      </section>

      {/* Core Lifestyle Narratives */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Narrative 1: The Virasat Club */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-virasat-green font-bold">
              <span className="w-6 h-[1px] bg-virasat-gold" />
              <span>Private Recreation</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-virasat-green-dark">
              The Virasat Club: A Sanctuary for Leisure
            </h2>
            <p className="text-sm sm:text-base text-virasat-charcoal/80 font-light leading-relaxed">
              Designed as the social heartbeat of our communities, The Virasat Club spans over
              15,000 sq.ft. of refined indoor and outdoor recreational spaces. From a temperature-controlled
              swimming pool with private cabanas to acoustic private cinema screening lounges, every
              element is curated for rejuvenating the spirit.
            </p>
            <ul className="space-y-2 text-xs text-virasat-charcoal/80">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-virasat-gold" />
                <span>Olympic-length heated swimming pool and children’s splash pavilion</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-virasat-gold" />
                <span>State-of-the-art gymnasium with personal fitness studio & sauna</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-virasat-gold" />
                <span>Residents' private banquet ballroom for celebratory family occasions</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg overflow-hidden border border-virasat-gold/30 shadow-xl bg-virasat-green-dark">
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80"
              alt="The Virasat Club Recreation"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Narrative 2: Up to 70% Open Botanical Greens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
          <div className="lg:order-2 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-virasat-green font-bold">
              <span className="w-6 h-[1px] bg-virasat-gold" />
              <span>Eco-Conscious Living</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-virasat-green-dark">
              70% Open Space & Botanical Parklands
            </h2>
            <p className="text-sm sm:text-base text-virasat-charcoal/80 font-light leading-relaxed">
              In an age where density dominates urban life, Virasat prioritizes breathing room. Our
              master plans allocate up to 70% of land to curated flora, tranquil reflection water bodies,
              fragrant herb gardens, and tree-lined promenades designed to cool ambient temperatures naturally.
            </p>
            <ul className="space-y-2 text-xs text-virasat-charcoal/80">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-virasat-gold" />
                <span>Dedicated 1.5-km reflexology and jogging trails shaded by native foliage</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-virasat-gold" />
                <span>Rainwater harvesting aquifers maintaining groundwater equilibrium</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-virasat-gold" />
                <span>Zero vehicular traffic on designated central pedestrian lawns</span>
              </li>
            </ul>
          </div>

          <div className="lg:order-1 rounded-lg overflow-hidden border border-virasat-gold/30 shadow-xl bg-virasat-green-dark">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80"
              alt="Virasat Botanical Greens"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Narrative 3: 3-Tier Security & Concealed Infrastructure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-virasat-green font-bold">
              <span className="w-6 h-[1px] bg-virasat-gold" />
              <span>Modern Infrastructure</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-virasat-green-dark">
              Subterranean Engineering & 3-Tier Security
            </h2>
            <p className="text-sm sm:text-base text-virasat-charcoal/80 font-light leading-relaxed">
              We engineer our enclaves with no overhead dangling power cables, messy water meters,
              or uneven roads. High-grade concrete boulevards are coupled with subterranean conduits,
              solar street illumination, and 24x7 biometric monitoring for total peace of mind.
            </p>
            <ul className="space-y-2 text-xs text-virasat-charcoal/80">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-virasat-gold" />
                <span>Concealed electrical, telecom, fiber-optic, and drainage trenches</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-virasat-gold" />
                <span>Perimeter thermal CCTV surveillance with central command station</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-virasat-gold" />
                <span>RFID resident entry gates and digital visitor guest pre-authorizations</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg overflow-hidden border border-virasat-gold/30 shadow-xl bg-virasat-green-dark">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80"
              alt="Virasat Gated Infrastructure"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-virasat-green-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="font-serif text-3xl font-bold text-white mb-3">
            Experience the Virasat Way of Life
          </h3>
          <p className="text-sm text-white/70 mb-8">
            Schedule a guided walkthrough across our Varanasi master plans and club facilities.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold-metallic text-virasat-green-dark text-xs uppercase tracking-widest font-bold px-8 py-3.5 rounded hover:brightness-110 transition-all"
          >
            Schedule Private Visit
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
