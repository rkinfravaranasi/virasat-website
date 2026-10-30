"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/common/ProjectCard";
import EnquiryModal from "@/components/enquiry/EnquiryModal";
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  Building,
  Trees,
  Award,
  ChevronDown,
  Layers,
  Sparkles,
  PhoneCall,
  Calendar,
  CheckCircle,
  ExternalLink,
  MapPin,
  TrendingUp,
} from "lucide-react";

interface HomeClientWrapperProps {
  projects: any[];
  articles: any[];
  categories: any[];
}

export default function HomeClientWrapper({
  projects,
  articles,
  categories,
}: HomeClientWrapperProps) {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryProject, setEnquiryProject] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const handleOpenEnquiry = (projectName: string = "") => {
    setEnquiryProject(projectName);
    setIsEnquiryOpen(true);
  };

  const filteredProjects =
    selectedCategory === "ALL"
      ? projects
      : projects.filter((p) => p.category?.slug === selectedCategory);

  return (
    <div className="bg-virasat-ivory text-virasat-charcoal min-h-screen flex flex-col font-sans selection:bg-virasat-gold/30">
      {/* 1. Luxury Sticky Navigation */}
      <Header onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* 2. Full-Screen Cinematic Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-virasat-charcoal-dark">
        {/* Architectural Hero Image with Multi-layer Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90"
            alt="Virasat Luxury Developments Varanasi"
            className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
          />
          {/* Cinematic Vignette Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-virasat-charcoal-dark via-virasat-green-dark/70 to-virasat-charcoal-dark/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,38,32,0.6)_100%)]" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20">
          {/* Subtle Heritage Tagline */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-virasat-gold/40 bg-virasat-green/60 backdrop-blur-md mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-virasat-gold animate-ping" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-virasat-gold-light">
              Architectural Distinction In Varanasi
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-lg">
            Creating Spaces. <br />
            <span className="text-gold-gradient italic font-normal">Building Legacies.</span>
          </h1>

          {/* Supporting Text */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/80 font-light leading-relaxed mb-10 drop-shadow">
            Thoughtfully envisioned spaces where timeless values meet modern living. Developing
            premier plotted enclaves, signature residences, and prime commercial destinations in
            the sacred city of Varanasi.
          </p>

          {/* Dual Call To Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/projects"
              className="w-full sm:w-auto bg-gold-metallic text-virasat-green-dark text-xs uppercase tracking-widest font-bold px-8 py-4 rounded hover:brightness-110 active:scale-95 transition-all shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => handleOpenEnquiry()}
              className="w-full sm:w-auto border border-virasat-gold/60 bg-virasat-green/40 hover:bg-virasat-green/70 text-white text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded backdrop-blur-md transition-all flex items-center justify-center space-x-2"
            >
              <span>Schedule Private Visit</span>
              <Calendar className="w-4 h-4 text-virasat-gold" />
            </button>
          </div>

          {/* Trust Highlights Strip */}
          <div className="mt-14 pt-8 border-t border-virasat-gold/20 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold text-virasat-gold">
                100%
              </span>
              <span className="text-[11px] text-white/70 uppercase tracking-wider font-light">
                Clear Land Titles
              </span>
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold text-virasat-gold">
                Ring Road
              </span>
              <span className="text-[11px] text-white/70 uppercase tracking-wider font-light">
                Strategic Corridors
              </span>
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold text-virasat-gold">
                70%
              </span>
              <span className="text-[11px] text-white/70 uppercase tracking-wider font-light">
                Open Greenery & Parks
              </span>
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold text-virasat-gold">
                UP-RERA
              </span>
              <span className="text-[11px] text-white/70 uppercase tracking-wider font-light">
                Compliant Protocols
              </span>
            </div>
          </div>
        </div>

        {/* Elegant Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-1 text-white/50 animate-bounce">
          <span className="text-[9px] uppercase tracking-[0.25em]">Scroll Down</span>
          <ChevronDown className="w-4 h-4 text-virasat-gold" />
        </div>
      </section>

      {/* 3. Brand Introduction (Editorial Storytelling) */}
      <section className="py-24 bg-virasat-ivory border-b border-virasat-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Heading & Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-virasat-green font-bold">
                <span className="w-8 h-[1px] bg-virasat-gold" />
                <span>The Virasat Heritage</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-virasat-green-dark leading-tight">
                Crafting generational environments rooted in integrity and grandeur.
              </h2>

              <p className="text-sm sm:text-base text-virasat-charcoal/80 leading-relaxed font-light">
                At <strong>VIRASAT</strong>, we believe real estate is more than land and
                concrete—it is an enduring legacy passed down through generations. Drawing
                inspiration from Varanasi’s millennia of cultural architecture, our developments
                pair master-planned urban engineering with serene natural tranquility.
              </p>

              <p className="text-sm sm:text-base text-virasat-charcoal/80 leading-relaxed font-light">
                Whether creating bespoke plotted townships with underground conduits and botanical
                parklands, or signature high-rise residences with panoramic skyline vistas, we
                uphold an unwavering standard of transparency, regulatory compliance, and structural
                excellence.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-6">
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-virasat-green-dark hover:text-virasat-green border-b-2 border-virasat-gold pb-1 transition-all"
                >
                  <span>Read Founder’s Philosophy</span>
                  <ArrowRight className="w-4 h-4 text-virasat-gold" />
                </Link>

                <div className="flex items-center space-x-3 text-xs text-virasat-charcoal/70 pl-4 border-l border-virasat-gold/40">
                  <ShieldCheck className="w-5 h-5 text-virasat-green" />
                  <span>Transparent Documentation & UP-RERA Compliance</span>
                </div>
              </div>
            </div>

            {/* Architecture Imagery Vignette */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-lg overflow-hidden border border-virasat-gold/40 shadow-2xl bg-virasat-green-dark">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85"
                  alt="Virasat Architecture Design"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-virasat-charcoal-dark/90 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-virasat-green-dark/90 border border-virasat-gold/30 backdrop-blur-md text-white">
                  <span className="text-[10px] text-virasat-gold uppercase tracking-widest font-semibold block mb-1">
                    Signature Blueprint
                  </span>
                  <p className="text-xs font-serif font-medium leading-snug">
                    "Every master plan is oriented towards harmony, daylight, and long-term asset
                    appreciation."
                  </p>
                </div>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-virasat-gold -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Projects Section */}
      <section className="py-24 bg-virasat-green-dark text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-virasat-gold font-bold mb-3">
                <span className="w-8 h-[1px] bg-virasat-gold" />
                <span>Curated Developments</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Featured Projects
              </h2>
              <p className="text-sm text-white/70 max-w-xl mt-3 font-light">
                Discover our ongoing and upcoming developments across Varanasi’s most promising
                corridors, built with uncompromising quality.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("ALL")}
                className={`text-xs uppercase tracking-wider px-4 py-2 rounded transition-all font-semibold ${
                  selectedCategory === "ALL"
                    ? "bg-virasat-gold text-virasat-green-dark shadow"
                    : "bg-virasat-charcoal-dark border border-white/10 text-white/70 hover:text-white"
                }`}
              >
                All Projects
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`text-xs uppercase tracking-wider px-4 py-2 rounded transition-all font-semibold ${
                    selectedCategory === cat.slug
                      ? "bg-virasat-gold text-virasat-green-dark shadow"
                      : "bg-virasat-charcoal-dark border border-white/10 text-white/70 hover:text-white"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onEnquire={(name) => handleOpenEnquiry(name)}
              />
            ))}
          </div>

          {/* Bottom Explore Link */}
          <div className="mt-14 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 bg-virasat-charcoal-dark border border-virasat-gold/40 text-virasat-gold text-xs uppercase tracking-widest font-bold px-8 py-3.5 rounded hover:bg-virasat-gold hover:text-virasat-green-dark transition-all"
            >
              <span>View All Projects & Masterplans</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Brand Philosophy & Core Pillars */}
      <section className="py-24 bg-virasat-ivory-dark/60 border-b border-virasat-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-virasat-green font-bold mb-3">
              <span className="w-6 h-[1px] bg-virasat-gold" />
              <span>Built Upon Enduring Values</span>
              <span className="w-6 h-[1px] bg-virasat-gold" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-virasat-green-dark">
              Our Five Pillars of Excellence
            </h2>
            <p className="text-sm text-virasat-charcoal/70 mt-3 font-light">
              Every square yard we develop reflects a disciplined philosophy focused on creating
              generational worth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Pillar 1 */}
            <div className="bg-white border border-virasat-gold/30 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded bg-virasat-green/10 border border-virasat-gold/40 flex items-center justify-center text-virasat-green mb-5">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-bold text-virasat-green-dark mb-2">
                1. Architecture
              </h3>
              <p className="text-xs text-virasat-charcoal/75 leading-relaxed font-light">
                Timeless proportion, cross-ventilation, and wide boulevards ensuring aesthetic
                majesty.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white border border-virasat-gold/30 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded bg-virasat-green/10 border border-virasat-gold/40 flex items-center justify-center text-virasat-green mb-5">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-bold text-virasat-green-dark mb-2">
                2. Uncompromised Quality
              </h3>
              <p className="text-xs text-virasat-charcoal/75 leading-relaxed font-light">
                Underground cabling, RCC drainage, high-spec pavers, and durable civil engineering.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white border border-virasat-gold/30 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded bg-virasat-green/10 border border-virasat-gold/40 flex items-center justify-center text-virasat-green mb-5">
                <Trees className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-bold text-virasat-green-dark mb-2">
                3. Greenery & Wellness
              </h3>
              <p className="text-xs text-virasat-charcoal/75 leading-relaxed font-light">
                Up to 70% open green reserves, botanical gardens, and wellness walkways for all
                generations.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white border border-virasat-gold/30 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded bg-virasat-green/10 border border-virasat-gold/40 flex items-center justify-center text-virasat-green mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-bold text-virasat-green-dark mb-2">
                4. Absolute Trust
              </h3>
              <p className="text-xs text-virasat-charcoal/75 leading-relaxed font-light">
                Transparent statutory approvals, verified titles, and adherence to UP-RERA
                guidelines.
              </p>
            </div>

            {/* Pillar 5 */}
            <div className="bg-white border border-virasat-gold/30 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded bg-virasat-green/10 border border-virasat-gold/40 flex items-center justify-center text-virasat-green mb-5">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-base font-bold text-virasat-green-dark mb-2">
                5. Generational Wealth
              </h3>
              <p className="text-xs text-virasat-charcoal/75 leading-relaxed font-light">
                Positioned strategically along high-growth corridors to ensure robust, sustainable
                appreciation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Lifestyle & Master Planning Story */}
      <section className="py-24 bg-virasat-charcoal-dark text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual Collage */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
                  alt="Clubhouse Recreation"
                  className="rounded-lg object-cover h-56 w-full border border-virasat-gold/30"
                />
                <img
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
                  alt="Botanical Garden Parks"
                  className="rounded-lg object-cover h-72 w-full border border-virasat-gold/30"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Gated Living"
                  className="rounded-lg object-cover h-72 w-full border border-virasat-gold/30"
                />
                <img
                  src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80"
                  alt="Evening Light Ambience"
                  className="rounded-lg object-cover h-56 w-full border border-virasat-gold/30"
                />
              </div>
            </div>

            {/* Lifestyle Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-virasat-gold font-bold">
                <span className="w-8 h-[1px] bg-virasat-gold" />
                <span>Everyday Distinction</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Designed for wellness, privacy, and community harmony.
              </h2>

              <p className="text-sm text-white/70 leading-relaxed font-light">
                Life at a Virasat enclave is envisioned as an oasis of calm. Away from congested
                lanes, our developments offer wide internal tree-shaded boulevards, dedicated
                jogging tracks, meditation decks, and children’s discovery playparks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start space-x-3 bg-virasat-green-dark/70 border border-virasat-gold/20 p-4 rounded">
                  <Sparkles className="w-5 h-5 text-virasat-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-virasat-gold-light">
                      The Virasat Club
                    </h4>
                    <p className="text-[11px] text-white/60 mt-1">
                      Grand banquet hall, indoor sports lounge, library, and pool sundecks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-virasat-green-dark/70 border border-virasat-gold/20 p-4 rounded">
                  <ShieldCheck className="w-5 h-5 text-virasat-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-virasat-gold-light">
                      3-Tier Security
                    </h4>
                    <p className="text-[11px] text-white/60 mt-1">
                      RFID boom barriers, CCTV boundary monitoring, and trained security personnel.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/lifestyle"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-virasat-gold hover:text-white transition-colors"
                >
                  <span>Explore All Amenities & Lifestyle Features</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Varanasi Strategic Location Advantage */}
      <section className="py-24 bg-virasat-ivory border-b border-virasat-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-virasat-green font-bold mb-3">
              <span className="w-6 h-[1px] bg-virasat-gold" />
              <span>Prime Transit Corridors</span>
              <span className="w-6 h-[1px] bg-virasat-gold" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-virasat-green-dark">
              Varanasi: At the Epicenter of Growth
            </h2>
            <p className="text-sm text-virasat-charcoal/70 mt-3 font-light">
              Our projects are intentionally located at the intersection of Varanasi’s major arterial
              expressways, airport hubs, and cultural epicenters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Landmark 1 */}
            <div className="bg-white border border-virasat-gold/30 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider font-bold text-virasat-green">
                  Airport Hub
                </span>
                <span className="font-serif text-lg font-bold text-virasat-gold">20 Mins</span>
              </div>
              <h4 className="font-serif text-base font-semibold text-virasat-green-dark mb-1">
                Lal Bahadur Shastri Int'l Airport
              </h4>
              <p className="text-xs text-virasat-charcoal/60">
                Direct highway connectivity via Babatpur 4-lane expressway.
              </p>
            </div>

            {/* Landmark 2 */}
            <div className="bg-white border border-virasat-gold/30 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider font-bold text-virasat-green">
                  Ring Road
                </span>
                <span className="font-serif text-lg font-bold text-virasat-gold">3 Mins</span>
              </div>
              <h4 className="font-serif text-base font-semibold text-virasat-green-dark mb-1">
                Outer Ring Road Phase-2
              </h4>
              <p className="text-xs text-virasat-charcoal/60">
                Seamless bypass connecting Lucknow, Prayagraj, and Patna highways.
              </p>
            </div>

            {/* Landmark 3 */}
            <div className="bg-white border border-virasat-gold/30 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider font-bold text-virasat-green">
                  Railway Junction
                </span>
                <span className="font-serif text-lg font-bold text-virasat-gold">18 Mins</span>
              </div>
              <h4 className="font-serif text-base font-semibold text-virasat-green-dark mb-1">
                Varanasi Cantt Station
              </h4>
              <p className="text-xs text-virasat-charcoal/60">
                Swift access to premier Indian Railways transit and commercial malls.
              </p>
            </div>

            {/* Landmark 4 */}
            <div className="bg-white border border-virasat-gold/30 p-6 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider font-bold text-virasat-green">
                  Heritage
                </span>
                <span className="font-serif text-lg font-bold text-virasat-gold">25 Mins</span>
              </div>
              <h4 className="font-serif text-base font-semibold text-virasat-green-dark mb-1">
                Kashi Vishwanath Corridor
              </h4>
              <p className="text-xs text-virasat-charcoal/60">
                Direct access to the spiritual heart and sacred Ganga ghats.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/location"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-virasat-green-dark hover:text-virasat-green border-b border-virasat-gold pb-1 transition-colors"
            >
              <span>View Interactive Varanasi Connectivity Map</span>
              <ArrowRight className="w-4 h-4 text-virasat-gold" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Why Virasat Advantage */}
      <section className="py-24 bg-virasat-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-virasat-gold font-bold">
                <span className="w-8 h-[1px] bg-virasat-gold" />
                <span>The Developer Promise</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Why Discerning Families Choose Virasat.
              </h2>

              <p className="text-sm text-white/80 font-light leading-relaxed">
                We believe true distinction lies in details that ordinary developers overlook:
                generous road margins, concealed service corridors, vetted municipal approvals, and
                courteous lifetime assistance.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => handleOpenEnquiry()}
                  className="bg-gold-metallic text-virasat-green-dark text-xs uppercase tracking-widest font-bold px-8 py-3.5 rounded hover:brightness-110 transition-all"
                >
                  Request Consultation Call
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-virasat-green-dark/80 border border-virasat-gold/30 p-6 rounded-lg">
                <div className="text-virasat-gold font-serif text-2xl font-bold mb-2">01</div>
                <h4 className="font-serif text-lg font-bold text-white mb-2">
                  Legally Vetted Land Titles
                </h4>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Every parcel undergoes multi-layered scrutiny by senior property advocates before
                  master planning.
                </p>
              </div>

              <div className="bg-virasat-green-dark/80 border border-virasat-gold/30 p-6 rounded-lg">
                <div className="text-virasat-gold font-serif text-2xl font-bold mb-2">02</div>
                <h4 className="font-serif text-lg font-bold text-white mb-2">
                  Infrastructure First Delivery
                </h4>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  Wide internal roads, underground electrical conduits, and water lines are installed
                  before possession.
                </p>
              </div>

              <div className="bg-virasat-green-dark/80 border border-virasat-gold/30 p-6 rounded-lg">
                <div className="text-virasat-gold font-serif text-2xl font-bold mb-2">03</div>
                <h4 className="font-serif text-lg font-bold text-white mb-2">
                  Transparent Communication
                </h4>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  No hidden clauses. Continuous photo and video progress updates dispatched to every
                  plot and flat owner.
                </p>
              </div>

              <div className="bg-virasat-green-dark/80 border border-virasat-gold/30 p-6 rounded-lg">
                <div className="text-virasat-gold font-serif text-2xl font-bold mb-2">04</div>
                <h4 className="font-serif text-lg font-bold text-white mb-2">
                  Dedicated Concierge Care
                </h4>
                <p className="text-xs text-white/70 font-light leading-relaxed">
                  A personal relationship manager assists you through site visits, documentation,
                  registry, and possession.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Latest Insights / Market Intelligence */}
      <section className="py-24 bg-virasat-ivory border-b border-virasat-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-virasat-green font-bold mb-3">
                <span className="w-8 h-[1px] bg-virasat-gold" />
                <span>Market Intelligence</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-virasat-green-dark">
                Virasat Insights
              </h2>
              <p className="text-sm text-virasat-charcoal/70 max-w-xl mt-2 font-light">
                Authoritative perspectives on Varanasi real estate trends, infrastructure
                milestones, and generational wealth creation.
              </p>
            </div>

            <Link
              href="/insights"
              className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-virasat-green-dark hover:text-virasat-green border-b border-virasat-gold pb-1 transition-colors"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4 text-virasat-gold" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((post) => (
              <article
                key={post.id}
                className="group bg-white border border-virasat-gold/30 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-52 overflow-hidden bg-virasat-green-dark">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-virasat-charcoal-dark/80 backdrop-blur-md border border-virasat-gold/30 text-[10px] text-virasat-gold font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[11px] text-virasat-charcoal/50 font-medium">
                      {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}{" "}
                      • {post.readTimeMinutes} min read
                    </span>

                    <h3 className="font-serif text-lg font-bold text-virasat-green-dark group-hover:text-virasat-gold-dark transition-colors line-clamp-2">
                      <Link href={`/insights/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-xs text-virasat-charcoal/70 line-clamp-3 font-light leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <Link
                    href={`/insights/${post.slug}`}
                    className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider font-bold text-virasat-green-dark hover:text-virasat-gold pt-2"
                  >
                    <span>Read Analysis</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Direct VIP Enquiry Section */}
      <section className="py-20 bg-virasat-charcoal-dark text-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-virasat-gold font-bold">
            <span className="w-8 h-[1px] bg-virasat-gold" />
            <span>Personalized Consultation</span>
            <span className="w-8 h-[1px] bg-virasat-gold" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
            Envision Your Legacy in Varanasi.
          </h2>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/75 font-light leading-relaxed">
            Our private relationship managers are at your disposal to arrange a VIP chauffeured site
            inspection, share verified layout plans, and discuss bespoke plot sizing.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleOpenEnquiry()}
              className="w-full sm:w-auto bg-gold-metallic text-virasat-green-dark text-xs uppercase tracking-widest font-bold px-8 py-4 rounded hover:brightness-110 active:scale-95 transition-all shadow-xl"
            >
              Book Site Visit with Concierge
            </button>

            <a
              href="tel:+919876543210"
              className="w-full sm:w-auto border border-virasat-gold/50 bg-virasat-green/40 hover:bg-virasat-green/70 text-virasat-gold-light text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded transition-all flex items-center justify-center space-x-2"
            >
              <PhoneCall className="w-4 h-4 text-virasat-gold" />
              <span>Direct Assistance: +91 98765 43210</span>
            </a>
          </div>
        </div>
      </section>

      {/* 11. Luxury Corporate Footer */}
      <Footer />

      {/* Global Interactive Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        defaultProject={enquiryProject}
      />
    </div>
  );
}
