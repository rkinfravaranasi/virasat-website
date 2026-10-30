"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EnquiryModal from "@/components/enquiry/EnquiryModal";
import ProjectCard from "@/components/common/ProjectCard";
import {
  MapPin,
  Calendar,
  Layers,
  Trees,
  CheckCircle2,
  FileText,
  Download,
  Share2,
  Phone,
  ShieldCheck,
  ChevronDown,
  Building,
  Maximize2,
  ArrowRight,
  Compass,
  Play,
  X,
} from "lucide-react";

interface ProjectDetailClientProps {
  project: any;
  similarProjects: any[];
}

export default function ProjectDetailClient({
  project,
  similarProjects,
}: ProjectDetailClientProps) {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryType, setEnquiryType] = useState<
    "GENERAL" | "PROJECT_SPECIFIC" | "BROCHURE_DOWNLOAD" | "SITE_VISIT_BOOKING"
  >("PROJECT_SPECIFIC");

  const [activeMediaTab, setActiveMediaTab] = useState<string>("ALL");
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const isPlotted =
    project.propertyType?.toLowerCase().includes("plot") ||
    project.category?.name?.toLowerCase().includes("plot");

  const isApartment =
    project.propertyType?.toLowerCase().includes("apartment") ||
    project.category?.name?.toLowerCase().includes("apartment");

  const handleOpenBrochure = () => {
    setEnquiryType("BROCHURE_DOWNLOAD");
    setIsEnquiryOpen(true);
  };

  const handleOpenSiteVisit = () => {
    setEnquiryType("SITE_VISIT_BOOKING");
    setIsEnquiryOpen(true);
  };

  const faqs = [
    {
      q: `What is the statutory approval and UP-RERA status of ${project.title}?`,
      a: `${project.title} adheres strictly to statutory urban planning regulations. Specific RERA filing details and project registrations are detailed under the project documentation section: ${project.reraNumber || "Registration in progress"}.`,
    },
    {
      q: isPlotted
        ? "What are the plot dimensions and internal road specifications?"
        : "What are the configuration options and possession timelines?",
      a: isPlotted
        ? `The enclave offers curated residential plots ranging from 1,200 sq.ft. to 2,400 sq.ft. with ${project.roadWidth || "40 ft & 60 ft wide"} internal concrete arterial boulevards and ${project.openSpaceRatio || "70% open spaces"}.`
        : `Available configurations include 3 BHK and 4 BHK residences with expansive balconies. Expected possession is targeted for ${project.possessionDate || "Q4 2027"}.`,
    },
    {
      q: "Can I schedule an in-person or chauffeured site visit?",
      a: "Yes. Our private relationship managers provide dedicated site visits including chauffeured pickup across Varanasi (Airport, Cantt Station, or City Center).",
    },
    {
      q: "What infrastructure amenities are included before handover?",
      a: "All Virasat developments are delivered with subterranean electric conduits, dedicated stormwater drainage, underground sewage connection, 24x7 biometric security, and full access to the residents' clubhouse.",
    },
  ];

  return (
    <div className="bg-virasat-ivory text-virasat-charcoal min-h-screen flex flex-col font-sans">
      <Header onOpenEnquiry={() => setIsEnquiryOpen(true)} />

      {/* 1. Cinematic Hero Section */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden bg-virasat-charcoal-dark pt-32 pb-16">
        <div className="absolute inset-0 z-0">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-virasat-charcoal-dark via-virasat-charcoal-dark/60 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs text-white/70 mb-4">
            <Link href="/" className="hover:text-virasat-gold">
              Home
            </Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-virasat-gold">
              Projects
            </Link>
            <span>/</span>
            <span className="text-virasat-gold font-medium">{project.title}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-[11px] uppercase font-bold tracking-widest px-3 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-md">
                  {project.status}
                </span>
                <span className="text-[11px] uppercase font-bold tracking-widest px-3 py-1 rounded bg-white/10 text-white border border-white/20 backdrop-blur-md">
                  {project.propertyType}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                {project.title}
              </h1>

              <div className="flex items-center space-x-2 text-sm text-virasat-gold-light font-medium">
                <MapPin className="w-4 h-4 text-virasat-gold" />
                <span>{project.locationName}</span>
              </div>
            </div>

            {/* Quick Price & Action Box */}
            <div className="bg-virasat-green-dark/90 border border-virasat-gold/30 p-5 rounded-lg backdrop-blur-md flex flex-col sm:flex-row items-center gap-4 text-white">
              <div>
                <span className="text-[10px] text-white/50 uppercase tracking-widest block">
                  Starting Investment
                </span>
                <span className="font-serif text-2xl font-bold text-virasat-gold-light">
                  {project.priceStarting || "Price on Request"}
                </span>
              </div>

              <div className="flex items-center space-x-2.5 w-full sm:w-auto">
                <button
                  onClick={handleOpenSiteVisit}
                  className="w-full sm:w-auto bg-gold-metallic text-virasat-green-dark text-xs uppercase tracking-widest font-bold px-6 py-3 rounded hover:brightness-110 transition-all text-center"
                >
                  Schedule Site Visit
                </button>
                <button
                  onClick={handleOpenBrochure}
                  className="border border-virasat-gold text-virasat-gold hover:bg-virasat-gold hover:text-virasat-green-dark p-3 rounded transition-all"
                  title="Request Brochure"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Ribbon */}
      <section className="bg-virasat-green text-white border-y border-virasat-gold/20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {project.totalArea && (
              <div className="border-r border-white/10 last:border-0">
                <span className="block text-[10px] text-white/60 uppercase tracking-wider">
                  Masterplan Size
                </span>
                <span className="font-serif text-base font-bold text-virasat-gold-light">
                  {project.totalArea}
                </span>
              </div>
            )}
            {project.openSpaceRatio && (
              <div className="border-r border-white/10 last:border-0">
                <span className="block text-[10px] text-white/60 uppercase tracking-wider">
                  Open Space / Greens
                </span>
                <span className="font-serif text-base font-bold text-virasat-gold-light">
                  {project.openSpaceRatio}
                </span>
              </div>
            )}
            {project.possessionDate && (
              <div className="border-r border-white/10 last:border-0">
                <span className="block text-[10px] text-white/60 uppercase tracking-wider">
                  Possession Horizon
                </span>
                <span className="font-serif text-base font-bold text-virasat-gold-light">
                  {project.possessionDate}
                </span>
              </div>
            )}
            {project.reraNumber && (
              <div>
                <span className="block text-[10px] text-white/60 uppercase tracking-wider">
                  RERA Compliance
                </span>
                <span className="text-xs font-semibold text-virasat-gold-light truncate block">
                  {project.reraNumber}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column (Content & Specifications) */}
          <div className="lg:col-span-8 space-y-16">
            {/* Project Overview */}
            <section className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-virasat-green font-bold">
                <span className="w-6 h-[1px] bg-virasat-gold" />
                <span>Executive Overview</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-virasat-green-dark">
                About {project.title}
              </h2>

              <div className="text-sm sm:text-base text-virasat-charcoal/80 font-light leading-relaxed whitespace-pre-line space-y-4">
                {project.fullDescription}
              </div>
            </section>

            {/* Adaptive Configurations Section */}
            {project.configurations && project.configurations.length > 0 && (
              <section className="space-y-6 pt-6 border-t border-virasat-gold/20">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-[0.25em] text-virasat-green font-bold block mb-1">
                      {isPlotted ? "Plot Sizing & Options" : "Unit Configurations"}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-virasat-green-dark">
                      Available Options
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {project.configurations.map((config: any) => (
                    <div
                      key={config.id}
                      className="bg-white border border-virasat-gold/30 rounded-lg p-5 shadow-sm hover:border-virasat-gold transition-all space-y-3"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-serif text-base font-bold text-virasat-green-dark">
                            {config.title}
                          </h4>
                          <span className="text-[11px] text-virasat-charcoal/60 uppercase tracking-wider font-semibold">
                            {config.type}
                          </span>
                        </div>
                        {config.priceEstimate && (
                          <span className="text-xs font-serif font-bold text-virasat-green bg-virasat-gold/20 px-2.5 py-1 rounded">
                            {config.priceEstimate}
                          </span>
                        )}
                      </div>

                      {config.dimensions && (
                        <div className="text-xs text-virasat-charcoal/80 bg-virasat-ivory-dark/40 p-2.5 rounded font-mono">
                          Dimensions: {config.dimensions}
                        </div>
                      )}

                      {config.floorPlanImage && (
                        <div
                          className="relative h-44 rounded overflow-hidden bg-virasat-ivory cursor-pointer group"
                          onClick={() => setLightboxImage(config.floorPlanImage)}
                        >
                          <img
                            src={config.floorPlanImage}
                            alt={config.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs space-x-1">
                            <Maximize2 className="w-4 h-4" />
                            <span>Preview Layout</span>
                          </div>
                        </div>
                      )}

                      <button
                        onClick={handleOpenSiteVisit}
                        className="w-full text-center py-2 border border-virasat-green text-virasat-green hover:bg-virasat-green hover:text-white text-xs uppercase tracking-wider font-bold rounded transition-colors"
                      >
                        Enquire for this Unit
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Amenities Section */}
            {project.amenities && project.amenities.length > 0 && (
              <section className="space-y-6 pt-6 border-t border-virasat-gold/20">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-virasat-green font-bold block mb-1">
                    Signature Amenities
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-virasat-green-dark">
                    World-Class Infrastructure
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {project.amenities.map((amenity: any) => (
                    <div
                      key={amenity.id}
                      className="bg-white border border-virasat-gold/25 p-4 rounded-lg flex items-start space-x-3.5 shadow-sm"
                    >
                      <div className="w-9 h-9 rounded bg-virasat-green/10 border border-virasat-gold/40 flex items-center justify-center text-virasat-green shrink-0 mt-0.5">
                        <CheckCircle2 className="w-5 h-5 text-virasat-green" />
                      </div>
                      <div>
                        <h5 className="font-serif text-xs font-bold text-virasat-green-dark">
                          {amenity.title}
                        </h5>
                        {amenity.description && (
                          <p className="text-[11px] text-virasat-charcoal/70 mt-1 font-light leading-snug">
                            {amenity.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Master Plan / Layout Section */}
            {project.masterPlanImage && (
              <section className="space-y-4 pt-6 border-t border-virasat-gold/20">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-[0.25em] text-virasat-green font-bold block mb-1">
                      Architectural Blueprint
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-virasat-green-dark">
                      Master Plan & Layout
                    </h3>
                  </div>
                  <button
                    onClick={handleOpenBrochure}
                    className="inline-flex items-center space-x-1 text-xs text-virasat-green font-bold hover:underline"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Masterplan PDF</span>
                  </button>
                </div>

                <div
                  className="relative rounded-lg overflow-hidden border border-virasat-gold/40 bg-virasat-charcoal-dark cursor-pointer group"
                  onClick={() => setLightboxImage(project.masterPlanImage)}
                >
                  <img
                    src={project.masterPlanImage}
                    alt={`${project.title} Master Plan`}
                    className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold space-x-2">
                    <Maximize2 className="w-5 h-5" />
                    <span>Click to Zoom Blueprint</span>
                  </div>
                </div>
              </section>
            )}

            {/* Image Gallery */}
            {project.media && project.media.length > 0 && (
              <section className="space-y-4 pt-6 border-t border-virasat-gold/20">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-virasat-green font-bold block mb-1">
                    Visual Showcase
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-virasat-green-dark">
                    Site & Architectural Gallery
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {project.media.map((item: any) => (
                    <div
                      key={item.id}
                      className="relative h-44 rounded overflow-hidden border border-virasat-gold/20 cursor-pointer group"
                      onClick={() => setLightboxImage(item.url)}
                    >
                      <img
                        src={item.url}
                        alt={item.title || project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Location Advantage & Landmarks */}
            {project.nearbyLandmarks && project.nearbyLandmarks.length > 0 && (
              <section className="space-y-6 pt-6 border-t border-virasat-gold/20">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-virasat-green font-bold block mb-1">
                    Connectivity
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-virasat-green-dark">
                    Nearby Landmarks & Transit
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.nearbyLandmarks.map((lm: any) => (
                    <div
                      key={lm.id}
                      className="bg-white border border-virasat-gold/25 p-4 rounded-lg flex items-center justify-between shadow-sm"
                    >
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-4 h-4 text-virasat-gold shrink-0" />
                        <div>
                          <h6 className="font-serif text-xs font-bold text-virasat-green-dark">
                            {lm.name}
                          </h6>
                          <span className="text-[10px] text-virasat-charcoal/60 uppercase tracking-wider">
                            {lm.category}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-serif text-sm font-bold text-virasat-green block">
                          {lm.distanceKm}
                        </span>
                        <span className="text-[10px] text-virasat-charcoal/50">
                          {lm.travelTimeMin}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQs Accordion */}
            <section className="space-y-4 pt-6 border-t border-virasat-gold/20">
              <h3 className="font-serif text-2xl font-bold text-virasat-green-dark">
                Frequently Asked Questions
              </h3>

              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-virasat-gold/30 rounded-lg overflow-hidden bg-white shadow-sm"
                  >
                    <button
                      onClick={() => setActiveFaqIndex(activeFaqIndex === idx ? null : idx)}
                      className="w-full text-left p-4 flex items-center justify-between text-xs sm:text-sm font-serif font-bold text-virasat-green-dark"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-virasat-gold transition-transform ${
                          activeFaqIndex === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeFaqIndex === idx && (
                      <div className="p-4 pt-0 text-xs text-virasat-charcoal/75 leading-relaxed font-light border-t border-virasat-gold/15 bg-virasat-ivory-dark/20">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Consultation / Booking Box */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Concierge Booking Box */}
              <div className="bg-virasat-green-dark border border-virasat-gold/40 rounded-xl p-6 text-white shadow-xl space-y-5">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-virasat-gold font-bold">
                    Official Project Concierge
                  </span>
                  <h4 className="font-serif text-xl font-bold text-white">
                    Experience {project.title}
                  </h4>
                  <p className="text-xs text-white/70 font-light">
                    Book a chauffeured site visit with a dedicated Virasat relationship manager.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    onClick={handleOpenSiteVisit}
                    className="w-full bg-gold-metallic text-virasat-green-dark text-xs uppercase tracking-widest font-bold py-3.5 rounded hover:brightness-110 active:scale-95 transition-all text-center flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book VIP Site Visit</span>
                  </button>

                  <button
                    onClick={handleOpenBrochure}
                    className="w-full border border-virasat-gold/60 text-virasat-gold hover:bg-virasat-gold hover:text-virasat-green-dark text-xs uppercase tracking-widest font-semibold py-3 rounded transition-all text-center flex items-center justify-center space-x-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Request Official Brochure</span>
                  </button>
                </div>

                <div className="pt-4 border-t border-virasat-gold/20 space-y-3 text-xs text-white/80">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-virasat-gold" />
                    <span>Direct Call: +91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-virasat-gold" />
                    <span>Verified Statutory Clearances</span>
                  </div>
                </div>
              </div>

              {/* RERA Notice Box */}
              <div className="bg-white border border-virasat-gold/30 rounded-lg p-5 shadow-sm space-y-2 text-xs">
                <div className="flex items-center space-x-1.5 text-virasat-green font-bold uppercase tracking-wider text-[11px]">
                  <ShieldCheck className="w-4 h-4 text-virasat-gold" />
                  <span>Statutory Disclosures</span>
                </div>
                <p className="text-virasat-charcoal/70 leading-relaxed font-light">
                  {project.reraNumber || "UP-RERA Registration in progress"}. Detailed sanction
                  orders and environmental NOCs available for review during private consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Projects Section */}
      {similarProjects.length > 0 && (
        <section className="py-20 bg-virasat-ivory-dark/40 border-t border-virasat-gold/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-[0.25em] text-virasat-green font-bold block mb-2">
                Discover More
              </span>
              <h3 className="font-serif text-3xl font-bold text-virasat-green-dark">
                Similar Developments
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {similarProjects.map((p) => (
                <ProjectCard
                  key={p.id}
                  project={p}
                  onEnquire={(name) => {
                    setEnquiryType("PROJECT_SPECIFIC");
                    setIsEnquiryOpen(true);
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-virasat-gold p-2"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={lightboxImage}
              alt="Preview"
              className="max-w-full max-h-[85vh] object-contain rounded border border-virasat-gold/40 shadow-2xl"
            />
          </div>
        </div>
      )}

      <Footer />

      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        defaultProject={project.title}
        defaultEnquiryType={enquiryType}
      />
    </div>
  );
}
