import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy | VIRASAT Real Estate Developers",
  description: "Privacy policy and client data protection practices of Virasat Developments.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-virasat-ivory text-virasat-charcoal min-h-screen flex flex-col font-sans">
      <Header />

      <section className="relative pt-36 pb-16 bg-virasat-green-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-virasat-gold font-bold block mb-2">
            Legal & Compliance
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold">Privacy Policy</h1>
          <p className="text-xs text-white/60 mt-2 font-mono">
            [Draft Document — Under Legal Counsel Review] • Effective October 2026
          </p>
        </div>
      </section>

      <div className="py-16 max-w-4xl mx-auto px-4 text-xs sm:text-sm text-virasat-charcoal/80 space-y-8 font-light leading-relaxed flex-grow">
        <div className="bg-white border border-virasat-gold/30 p-6 rounded-lg space-y-3">
          <h2 className="font-serif text-lg font-bold text-virasat-green-dark">
            1. Commitment to Client Confidentiality
          </h2>
          <p>
            VIRASAT DEVELOPMENTS ("VIRASAT", "we", "us") values the confidentiality and privacy of
            its clients, prospective purchasers, and website visitors. This Privacy Policy outlines
            the nature of personal data collected through this digital portal and how it is secured.
          </p>
        </div>

        <div className="bg-white border border-virasat-gold/30 p-6 rounded-lg space-y-3">
          <h2 className="font-serif text-lg font-bold text-virasat-green-dark">
            2. Information We Collect
          </h2>
          <p>
            When you submit an enquiry, request a project brochure, or schedule a site visit, we
            collect:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Your full legal name</li>
            <li>Telephone/mobile contact number</li>
            <li>Electronic mail address</li>
            <li>Property category, configuration, and budget parameters of interest</li>
            <li>IP address and basic browsing telemetry for anti-spam security</li>
          </ul>
        </div>

        <div className="bg-white border border-virasat-gold/30 p-6 rounded-lg space-y-3">
          <h2 className="font-serif text-lg font-bold text-virasat-green-dark">
            3. Use of Personal Data
          </h2>
          <p>
            Your information is utilized strictly to provide project dossiers, coordinate site
            visits, answer regulatory inquiries, and facilitate transaction documentation. We do
            not sell, lease, or monetize your contact information to external marketing agencies or
            third-party brokers.
          </p>
        </div>

        <div className="bg-white border border-virasat-gold/30 p-6 rounded-lg space-y-3">
          <h2 className="font-serif text-lg font-bold text-virasat-green-dark">
            4. Security and Storage
          </h2>
          <p>
            All submitted enquiries are stored in encrypted databases with restricted administrative
            access limited to authorized Virasat relationship managers.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
