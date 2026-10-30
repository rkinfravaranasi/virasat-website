import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  ShieldCheck,
  Compass,
  Building,
  Target,
  Eye,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "About Virasat | Luxury Real Estate Developer in Varanasi",
  description:
    "Learn about Virasat Developments' legacy, vision, founder's philosophy, and our commitment to architectural integrity and clear land titles in Varanasi, Uttar Pradesh.",
};

export default function AboutPage() {
  return (
    <div className="bg-virasat-ivory text-virasat-charcoal min-h-screen flex flex-col font-sans">
      <Header />

      {/* Cinematic Banner */}
      <section className="relative pt-36 pb-20 bg-virasat-green-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80"
            alt="About Virasat Developments"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-virasat-green-dark via-virasat-green-dark/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-virasat-gold font-bold mb-4">
            <span className="w-8 h-[1px] bg-virasat-gold" />
            <span>Company Profile & Philosophy</span>
            <span className="w-8 h-[1px] bg-virasat-gold" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            About VIRASAT
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/75 mt-4 font-light leading-relaxed">
            Founded on the eternal spirit of Varanasi, VIRASAT develops master-planned plotted
            communities and luxury spaces designed to appreciate across generations.
          </p>
        </div>
      </section>

      {/* Brand Story & Legacy Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-virasat-green font-bold">
              <span className="w-8 h-[1px] bg-virasat-gold" />
              <span>Our Brand Story</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-virasat-green-dark leading-tight">
              A commitment to architectural majesty and transparent governance.
            </h2>

            <p className="text-sm sm:text-base text-virasat-charcoal/80 font-light leading-relaxed">
              The word <em>"Virasat"</em> translates to heritage—a solemn promise that what we build
              today must stand with dignity, beauty, and value for decades to come. Established in
              Varanasi, Uttar Pradesh, our organization was conceived to bridge the gap between
              traditional Indian reverence for land ownership and world-class master-planning
              standards.
            </p>

            <p className="text-sm sm:text-base text-virasat-charcoal/80 font-light leading-relaxed">
              In a rapidly modernizing Eastern Uttar Pradesh, our team focuses on strategic growth
              nodes: the Ring Road expansions, the Varanasi-Airport arterial corridors, and prime
              cantonment enclaves. Every development we introduce undergoes rigorous title scrutiny,
              statutory municipal vetting, and strict adherence to the UP Real Estate Regulatory
              Authority (UP-RERA) frameworks.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="border-l-2 border-virasat-gold pl-4">
                <span className="font-serif text-2xl font-bold text-virasat-green-dark">100%</span>
                <p className="text-xs text-virasat-charcoal/70">Clear Title Due Diligence</p>
              </div>
              <div className="border-l-2 border-virasat-gold pl-4">
                <span className="font-serif text-2xl font-bold text-virasat-green-dark">Zero</span>
                <p className="text-xs text-virasat-charcoal/70">Compromise on Statutory Approvals</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border border-virasat-gold/40 shadow-xl bg-virasat-green-dark">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Virasat Architecture and Estate Planning"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-virasat-charcoal-dark/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-virasat-green-dark/95 border border-virasat-gold/30 text-white">
                <p className="font-serif text-xs italic">
                  "We do not merely sell plots or square footage; we curate harmonious neighborhoods
                  where families build their life's finest chapters."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-virasat-green-dark text-white border-y border-virasat-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Vision */}
            <div className="bg-virasat-charcoal-dark/80 border border-virasat-gold/30 p-8 rounded-lg space-y-4">
              <div className="w-12 h-12 rounded bg-virasat-green/40 border border-virasat-gold/40 flex items-center justify-center text-virasat-gold">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-virasat-gold-light">Our Vision</h3>
              <p className="text-sm text-white/75 font-light leading-relaxed">
                To be Eastern Uttar Pradesh’s most respected and aspirational real estate developer,
                celebrated for transforming the skyline and plotted landscape of Varanasi through
                timeless architecture, ecological responsibility, and uncompromising ethical
                standards.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-virasat-charcoal-dark/80 border border-virasat-gold/30 p-8 rounded-lg space-y-4">
              <div className="w-12 h-12 rounded bg-virasat-green/40 border border-virasat-gold/40 flex items-center justify-center text-virasat-gold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-virasat-gold-light">Our Mission</h3>
              <p className="text-sm text-white/75 font-light leading-relaxed">
                To consistently deliver gated enclaves and premium residences backed by clear land
                titles, subterranean infrastructure, generous botanical greenery, and transparent
                communication—ensuring every Virasat homeowner reaps lasting generational value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Founder's Message */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-virasat-gold/30 rounded-xl p-8 sm:p-12 shadow-sm">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-virasat-green font-bold">
              <span className="w-8 h-[1px] bg-virasat-gold" />
              <span>Leadership Statement</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-virasat-green-dark">
              Founder’s Message
            </h2>

            <div className="font-serif text-lg text-virasat-gold-dark italic leading-relaxed border-l-4 border-virasat-gold pl-6 py-2">
              "Varanasi is not just a city—it is a spiritual consciousness that has preserved its
              essence for thousands of years. As developers in this sacred land, we shoulder an
              immense duty to build responsibly, ethically, and beautifully."
            </div>

            <p className="text-sm sm:text-base text-virasat-charcoal/80 font-light leading-relaxed">
              When we initiated Virasat Developments, we set a clear charter: we will never compromise
              on land title veracity, we will never cut corners on engineering infrastructure, and we
              will always treat our patrons as long-term partners in city-building.
            </p>

            <p className="text-sm sm:text-base text-virasat-charcoal/80 font-light leading-relaxed">
              Whether you are an NRI looking to re-root your family in Kashi, an entrepreneur
              seeking prime highway commercial space, or a homeowner desiring a sanctuary along the
              Ring Road, Virasat is committed to building a legacy worthy of your family’s trust.
            </p>

            <div className="pt-6 border-t border-virasat-gold/20 flex items-center justify-between">
              <div>
                <h4 className="font-serif text-base font-bold text-virasat-green-dark">
                  Board of Directors & Management
                </h4>
                <p className="text-xs text-virasat-charcoal/60">VIRASAT DEVELOPMENTS</p>
              </div>
              <div className="text-right">
                <span className="text-[11px] uppercase tracking-widest text-virasat-gold font-bold">
                  Varanasi, UP
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach to Development */}
      <section className="py-20 bg-virasat-ivory-dark/50 border-t border-virasat-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-virasat-green-dark">
              Our Development Lifecycle
            </h2>
            <p className="text-sm text-virasat-charcoal/70 mt-2 font-light">
              From land acquisition to handing over registered deeds, our protocol is designed to
              protect customer capital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white border border-virasat-gold/30 p-6 rounded-lg">
              <span className="font-serif text-2xl font-bold text-virasat-gold block mb-2">01</span>
              <h4 className="font-serif text-base font-bold text-virasat-green-dark mb-2">
                Legal & Title Due Diligence
              </h4>
              <p className="text-xs text-virasat-charcoal/70 font-light leading-relaxed">
                30-year revenue records search, encumbrance verification, and ownership chain
                validation by leading real estate advocates.
              </p>
            </div>

            <div className="bg-white border border-virasat-gold/30 p-6 rounded-lg">
              <span className="font-serif text-2xl font-bold text-virasat-gold block mb-2">02</span>
              <h4 className="font-serif text-base font-bold text-virasat-green-dark mb-2">
                Master Planning & RERA
              </h4>
              <p className="text-xs text-virasat-charcoal/70 font-light leading-relaxed">
                Collaboration with urban architects to design wide boulevards, parks, and statutory
                sanctions prior to public launch.
              </p>
            </div>

            <div className="bg-white border border-virasat-gold/30 p-6 rounded-lg">
              <span className="font-serif text-2xl font-bold text-virasat-gold block mb-2">03</span>
              <h4 className="font-serif text-base font-bold text-virasat-green-dark mb-2">
                Subterranean Infrastructure
              </h4>
              <p className="text-xs text-virasat-charcoal/70 font-light leading-relaxed">
                Installation of underground power lines, stormwater drainage, water supply, and
                solar street fixtures.
              </p>
            </div>

            <div className="bg-white border border-virasat-gold/30 p-6 rounded-lg">
              <span className="font-serif text-2xl font-bold text-virasat-gold block mb-2">04</span>
              <h4 className="font-serif text-base font-bold text-virasat-green-dark mb-2">
                Registry & Community Care
              </h4>
              <p className="text-xs text-virasat-charcoal/70 font-light leading-relaxed">
                Smooth stamp duty and sub-registrar assistance, followed by lifetime gated security
                and facility maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-virasat-green-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Discover Our Varanasi Portfolio
          </h2>
          <p className="text-sm text-white/70 mb-8 max-w-xl mx-auto">
            Explore curated residential plots and high-rise apartments backed by Virasat’s quality
            commitment.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/projects"
              className="bg-gold-metallic text-virasat-green-dark text-xs uppercase tracking-widest font-bold px-8 py-3.5 rounded hover:brightness-110 transition-all"
            >
              View Active Projects
            </Link>
            <Link
              href="/contact"
              className="border border-virasat-gold text-virasat-gold text-xs uppercase tracking-widest font-semibold px-8 py-3.5 rounded hover:bg-virasat-gold hover:text-virasat-green-dark transition-all"
            >
              Contact Corporate Office
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
