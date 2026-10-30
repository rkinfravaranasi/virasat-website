import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Terms & Conditions | VIRASAT Developments",
  description: "Terms and conditions governing the use of Virasat Developments website.",
};

export default function TermsPage() {
  return (
    <div className="bg-virasat-ivory text-virasat-charcoal min-h-screen flex flex-col font-sans">
      <Header />

      <section className="relative pt-36 pb-16 bg-virasat-green-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-virasat-gold font-bold block mb-2">
            Legal & Compliance
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold">Terms & Conditions</h1>
          <p className="text-xs text-white/60 mt-2 font-mono">
            [Draft Terms — Under Corporate Legal Review]
          </p>
        </div>
      </section>

      <div className="py-16 max-w-4xl mx-auto px-4 text-xs sm:text-sm text-virasat-charcoal/80 space-y-8 font-light leading-relaxed flex-grow">
        <div className="bg-white border border-virasat-gold/30 p-6 rounded-lg space-y-3">
          <h2 className="font-serif text-lg font-bold text-virasat-green-dark">
            1. Nature of Website Information
          </h2>
          <p>
            The content, images, brochures, floor plans, plot layouts, and specifications presented on
            this website are intended solely for general informational and conceptual purposes. They
            do not constitute an offer, invitation to offer, contract, guarantee, or warranty of any
            kind.
          </p>
        </div>

        <div className="bg-white border border-virasat-gold/30 p-6 rounded-lg space-y-3">
          <h2 className="font-serif text-lg font-bold text-virasat-green-dark">
            2. Intellectual Property Rights
          </h2>
          <p>
            The name VIRASAT, corporate marks, architectural designs, blueprints, rendering assets,
            and written copy published herein are the exclusive intellectual property of VIRASAT
            DEVELOPMENTS. Unauthorized reproduction or commercial distribution without written
            consent is strictly prohibited.
          </p>
        </div>

        <div className="bg-white border border-virasat-gold/30 p-6 rounded-lg space-y-3">
          <h2 className="font-serif text-lg font-bold text-virasat-green-dark">
            3. Final Contractual Terms
          </h2>
          <p>
            The final terms, purchase price, payment schedules, plot boundary dimensions, and handover
            dates shall be governed exclusively by the formal registered Agreement for Sale entered
            into between VIRASAT and the purchaser.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
