"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EnquiryModal from "@/components/enquiry/EnquiryModal";
import { FileText, Download, ShieldCheck, CheckCircle2, Lock } from "lucide-react";

export default function DownloadsPage() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedDocTitle, setSelectedDocTitle] = useState("");

  const documents = [
    {
      id: "doc-1",
      title: "Virasat Ganga Enclave — Official Master Brochure",
      type: "PDF Document",
      size: "6.8 MB",
      project: "Virasat Ganga Enclave (Ring Road Phase-2)",
      description:
        "Comprehensive project brochure including master plan, 1,200 to 2,400 sq.ft. plot blueprints, 15,000 sq.ft. clubhouse specifications, and connectivity map.",
    },
    {
      id: "doc-2",
      title: "The Kashi Grandeur — Sky Residences Pre-Launch Dossier",
      type: "PDF Document",
      size: "8.2 MB",
      project: "The Kashi Grandeur (Cantt Corridor)",
      description:
        "Architectural drawings for 3 & 4 BHK sky suites, cantilevered balcony details, infinity pool terrace plans, and biometric security systems.",
    },
    {
      id: "doc-3",
      title: "Virasat Corporate Brand Profile & Standards",
      type: "PDF Document",
      size: "4.5 MB",
      project: "Virasat Corporate Profile",
      description:
        "Company philosophy, founder’s mission, engineering benchmarks, and legal title due diligence methodologies across Varanasi.",
    },
    {
      id: "doc-4",
      title: "Virasat Prime Pavilion — Commercial Retail Layouts",
      type: "PDF Document",
      size: "5.1 MB",
      project: "Virasat Prime Pavilion (Babatpur Highway)",
      description:
        "Ground retail floor plate layouts, double-height shop configurations, and highway pedestrian promenade drawings.",
    },
  ];

  const handleDownloadRequest = (title: string) => {
    setSelectedDocTitle(title);
    setIsEnquiryOpen(true);
  };

  return (
    <div className="bg-virasat-ivory text-virasat-charcoal min-h-screen flex flex-col font-sans">
      <Header onOpenEnquiry={() => setIsEnquiryOpen(true)} />

      {/* Cinematic Banner */}
      <section className="relative pt-36 pb-20 bg-virasat-green-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80"
            alt="Downloads and Documentation"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-virasat-green-dark via-virasat-green-dark/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-virasat-gold font-bold mb-4">
            <span className="w-8 h-[1px] bg-virasat-gold" />
            <span>Official Documentation</span>
            <span className="w-8 h-[1px] bg-virasat-gold" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Downloads & Brochures
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/75 mt-4 font-light leading-relaxed">
            Access verified architectural blueprints, master layouts, and detailed project
            dossiers approved by Virasat Developments.
          </p>
        </div>
      </section>

      {/* Documents List */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="space-y-6">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="bg-white border border-virasat-gold/30 rounded-lg p-6 shadow-sm hover:border-virasat-gold hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded bg-virasat-green/10 border border-virasat-gold/40 flex items-center justify-center text-virasat-green shrink-0 mt-1">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] text-virasat-gold uppercase tracking-wider font-bold bg-virasat-green-dark px-2 py-0.5 rounded">
                      {doc.type}
                    </span>
                    <span className="text-[11px] text-virasat-charcoal/50 font-mono">
                      {doc.size}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-virasat-green-dark">
                    {doc.title}
                  </h3>
                  <span className="text-xs text-virasat-green font-medium block">
                    {doc.project}
                  </span>
                  <p className="text-xs text-virasat-charcoal/70 font-light leading-relaxed max-w-xl">
                    {doc.description}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleDownloadRequest(doc.title)}
                className="w-full md:w-auto bg-gold-metallic text-virasat-green-dark text-xs uppercase tracking-widest font-bold px-6 py-3 rounded hover:brightness-110 active:scale-95 transition-all flex items-center justify-center space-x-2 shrink-0 shadow"
              >
                <Download className="w-4 h-4" />
                <span>Instant Download</span>
              </button>
            </div>
          ))}
        </div>

        {/* Security & Verification Disclaimer */}
        <div className="mt-12 bg-virasat-ivory-dark/40 border border-virasat-gold/30 p-5 rounded-lg flex items-start space-x-3 text-xs text-virasat-charcoal/75">
          <ShieldCheck className="w-5 h-5 text-virasat-green shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            All downloadable dossiers are published in strict conformity with statutory UP-RERA
            transparency mandates. For hard-copy presentation binders, please contact the Virasat
            corporate office directly.
          </p>
        </div>
      </section>

      <Footer />

      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        defaultProject={selectedDocTitle}
        defaultEnquiryType="BROCHURE_DOWNLOAD"
      />
    </div>
  );
}
