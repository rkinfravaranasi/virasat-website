import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ShieldAlert, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Statutory Disclaimer & RERA Compliance | VIRASAT Developments",
  description: "UP-RERA regulatory disclaimer and official disclosures for Virasat Developments.",
};

export default function DisclaimerPage() {
  return (
    <div className="bg-virasat-ivory text-virasat-charcoal min-h-screen flex flex-col font-sans">
      <Header />

      <section className="relative pt-36 pb-16 bg-virasat-green-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-virasat-gold font-bold block mb-2">
            Regulatory Disclosures
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold">Website Disclaimer</h1>
          <p className="text-xs text-white/60 mt-2 font-mono">
            Uttar Pradesh Real Estate Regulatory Authority (UP-RERA) Advisory
          </p>
        </div>
      </section>

      <div className="py-16 max-w-4xl mx-auto px-4 text-xs sm:text-sm text-virasat-charcoal/80 space-y-8 font-light leading-relaxed flex-grow">
        <div className="bg-amber-50 border border-amber-300 p-6 rounded-lg space-y-3">
          <div className="flex items-center space-x-2 text-amber-900 font-bold uppercase tracking-wider text-xs">
            <ShieldAlert className="w-5 h-5 text-amber-700" />
            <span>Statutory Notice Under UP-RERA</span>
          </div>
          <p className="text-amber-950">
            All prospective purchasers are advised to exercise independent due diligence and verify
            all project approvals, sanctions, and registrations directly on the official UP-RERA
            portal (
            <a
              href="https://up-rera.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline text-amber-800"
            >
              www.up-rera.in
            </a>
            ) before entering into any purchase commitment or transaction.
          </p>
        </div>

        <div className="bg-white border border-virasat-gold/30 p-6 rounded-lg space-y-3">
          <h2 className="font-serif text-lg font-bold text-virasat-green-dark">
            1. Conceptual and Artistic Imagery
          </h2>
          <p>
            The 3D artistic impressions, walkthrough videos, landscape photography, elevation views,
            and interior decorative visuals shown across this website are intended solely to convey
            the architectural concept and mood. Actual construction materials, finishes, and
            specifications may vary according to final municipal sanctions and structural
            engineering mandates.
          </p>
        </div>

        <div className="bg-white border border-virasat-gold/30 p-6 rounded-lg space-y-3">
          <h2 className="font-serif text-lg font-bold text-virasat-green-dark">
            2. Dimensions, Plot Areas, and Boundary Coordinates
          </h2>
          <p>
            All plot dimensions (e.g. 1,200 sq.ft., 1,800 sq.ft., 2,400 sq.ft.), carpet areas, and
            super built-up areas indicated on site plans are approximate and subject to minor
            variations upon final revenue demarcation and municipal survey. Final registered
            dimensions will be confirmed in the deed of conveyance.
          </p>
        </div>

        <div className="bg-white border border-virasat-gold/30 p-6 rounded-lg space-y-3">
          <h2 className="font-serif text-lg font-bold text-virasat-green-dark">
            3. Project Timelines & Approvals
          </h2>
          <p>
            Project milestones, construction status updates, and possession dates indicated on this
            digital portal are estimated based on prevailing construction plans and statutory
            clearance cycles. VIRASAT explicitly reserves the right to modify master plans or phase
            deliveries as authorized under UP-RERA norms.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
