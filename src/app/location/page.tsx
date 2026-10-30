import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  MapPin,
  Plane,
  Train,
  Car,
  Building,
  GraduationCap,
  Shield,
  Clock,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Location & Varanasi Connectivity | VIRASAT Real Estate",
  description:
    "Explore the strategic location advantage of Virasat developments in Varanasi. Rapid connectivity to Ring Road Phase-2, Babatpur Airport, Cantt, and Kashi Corridor.",
};

export default function LocationPage() {
  const landmarks = [
    {
      category: "Air Travel",
      icon: Plane,
      name: "Lal Bahadur Shastri Int'l Airport (Babatpur)",
      distance: "16.8 Km",
      time: "20 Mins",
      route: "Via 4-Lane Airport Highway (NH-31 / Babatpur Expressway)",
    },
    {
      category: "Transit Corridor",
      icon: Car,
      name: "Varanasi Outer Ring Road (Phase-2 Junction)",
      distance: "1.2 Km",
      time: "3 Mins",
      route: "Immediate access to bypass connecting Lucknow, Prayagraj, and Patna",
    },
    {
      category: "Rail Transit",
      icon: Train,
      name: "Varanasi Cantt Railway Station",
      distance: "9.5 Km",
      time: "18 Mins",
      route: "Via Cantt-Shivpur Arterial Road with dedicated overbridges",
    },
    {
      category: "Spiritual Center",
      icon: Building,
      name: "Kashi Vishwanath Temple Corridor & Ghats",
      distance: "12.5 Km",
      time: "25 Mins",
      route: "Swift access through upgraded city transit boulevards",
    },
    {
      category: "Healthcare",
      icon: Shield,
      name: "Apex Multi-Speciality Hospital & Research Center",
      distance: "6.2 Km",
      time: "12 Mins",
      route: "24/7 emergency medical accessibility",
    },
    {
      category: "Education",
      icon: GraduationCap,
      name: "Delhi Public School & Sunbeam International",
      distance: "4.8 Km",
      time: "10 Mins",
      route: "Direct proximity to premier schooling institutions",
    },
  ];

  return (
    <div className="bg-virasat-ivory text-virasat-charcoal min-h-screen flex flex-col font-sans">
      <Header />

      {/* Cinematic Banner */}
      <section className="relative pt-36 pb-20 bg-virasat-green-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1920&q=80"
            alt="Varanasi Strategic Connectivity"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-virasat-green-dark via-virasat-green-dark/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-virasat-gold font-bold mb-4">
            <span className="w-8 h-[1px] bg-virasat-gold" />
            <span>Strategic Growth Nexus</span>
            <span className="w-8 h-[1px] bg-virasat-gold" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Location & Connectivity
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/75 mt-4 font-light leading-relaxed">
            Positioned along Varanasi’s premier arterial growth corridors to guarantee effortless
            transit, high appreciation, and peaceful residential tranquility.
          </p>
        </div>
      </section>

      {/* Corridor Analysis */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-virasat-green font-bold">
              <span className="w-8 h-[1px] bg-virasat-gold" />
              <span>Varanasi's Growth Axis</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-virasat-green-dark leading-tight">
              Why Ring Road Phase-2 is Varanasi’s Most Coveted Real Estate Hub.
            </h2>

            <p className="text-sm sm:text-base text-virasat-charcoal/80 font-light leading-relaxed">
              With the operationalization of the Varanasi Ring Road bypass, transit patterns across
              Eastern UP have fundamentally shifted. Heavy interstate traffic bypasses inner city
              choke points, creating a pristine corridor of wide green boulevards ideal for luxury
              plotted townships and gated developments.
            </p>

            <p className="text-sm sm:text-base text-virasat-charcoal/80 font-light leading-relaxed">
              Our developments are planned within a 3-minute radius of this artery, delivering a rare
              equilibrium: swift travel to Babatpur International Airport, seamless access to Cantt
              Railway Junction, and tranquil living away from city congestion.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-lg overflow-hidden border border-virasat-gold/40 shadow-xl bg-virasat-charcoal-dark h-96 relative">
              <iframe
                title="Varanasi Strategic Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.24588741364!2d82.9087063!3d25.321684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale contrast-125"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-virasat-green-dark/95 border border-virasat-gold/30 p-3 rounded text-white text-xs flex items-center justify-between">
                <span>Virasat Development Zone: Ring Road & Cantt Corridors</span>
                <span className="text-virasat-gold font-bold">Varanasi, UP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Travel Time Table */}
      <section className="py-20 bg-virasat-ivory-dark/40 border-t border-virasat-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-virasat-green-dark">
              Key Transit & Civic Proximities
            </h2>
            <p className="text-sm text-virasat-charcoal/70 mt-2 font-light">
              Verified road distances and estimated travel times from Virasat’s flagship enclaves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {landmarks.map((lm, idx) => {
              const Icon = lm.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-virasat-gold/30 rounded-lg p-6 shadow-sm hover:border-virasat-gold transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded bg-virasat-green/10 border border-virasat-gold/40 flex items-center justify-center text-virasat-green">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <span className="font-serif text-lg font-bold text-virasat-gold block">
                        {lm.time}
                      </span>
                      <span className="text-[11px] text-virasat-charcoal/50 font-medium">
                        {lm.distance}
                      </span>
                    </div>
                  </div>

                  <h4 className="font-serif text-base font-bold text-virasat-green-dark mb-1">
                    {lm.name}
                  </h4>
                  <p className="text-xs text-virasat-charcoal/70 font-light leading-relaxed">
                    {lm.route}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-virasat-green-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="font-serif text-3xl font-bold text-white mb-3">
            Schedule a Chauffeured Location Tour
          </h3>
          <p className="text-sm text-white/70 mb-8">
            Experience the connectivity firsthand with our private relationship team.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold-metallic text-virasat-green-dark text-xs uppercase tracking-widest font-bold px-8 py-3.5 rounded hover:brightness-110 transition-all"
          >
            Book Site Visit
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
