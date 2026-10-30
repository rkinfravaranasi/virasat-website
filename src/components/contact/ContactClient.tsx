"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  ShieldCheck,
  Building,
  CheckCircle2,
  Calendar,
} from "lucide-react";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    interestedProjectName: "Virasat Ganga Enclave",
    propertyType: "Plotted Development",
    budgetRange: "₹50 Lakhs - ₹1 Crore",
    message: "",
    consent: true,
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.fullName.trim() || formData.fullName.length < 2) {
      setErrorMsg("Please enter your full name.");
      return;
    }

    const cleanPhone = formData.phone.replace(/[\s+-]/g, "");
    if (!/^[6-9]\d{9}$/.test(cleanPhone) && !/^91[6-9]\d{9}$/.test(cleanPhone)) {
      setErrorMsg("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          enquiryType: "GENERAL",
          leadSource: "CONTACT_PAGE",
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Failed to submit enquiry.");
      } else {
        setSuccess(true);
      }
    } catch (err) {
      setErrorMsg("Network error. Please try again or call our office.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-virasat-ivory text-virasat-charcoal min-h-screen flex flex-col font-sans">
      <Header />

      {/* Cinematic Banner */}
      <section className="relative pt-36 pb-20 bg-virasat-green-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
            alt="Virasat Corporate Office Contact"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-virasat-green-dark via-virasat-green-dark/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-virasat-gold font-bold mb-4">
            <span className="w-8 h-[1px] bg-virasat-gold" />
            <span>Connect with our Leadership</span>
            <span className="w-8 h-[1px] bg-virasat-gold" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Contact Virasat
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/75 mt-4 font-light leading-relaxed">
            Our relationship executives are prepared to guide you through project appointments, site
            inspections, and transparent documentation.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-virasat-green font-bold block mb-2">
                Corporate Headquarters
              </span>
              <h2 className="font-serif text-3xl font-bold text-virasat-green-dark">
                Varanasi Executive Office
              </h2>
              <p className="text-xs text-virasat-charcoal/70 mt-2 font-light leading-relaxed">
                Open Monday to Saturday, 9:30 AM to 6:30 PM. Walk-ins welcomed, prior appointment
                recommended for senior relationship advisory.
              </p>
            </div>

            <div className="space-y-5 text-xs text-virasat-charcoal/80">
              <div className="flex items-start space-x-3.5 bg-white border border-virasat-gold/30 p-4 rounded-lg">
                <MapPin className="w-5 h-5 text-virasat-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-virasat-green-dark block mb-0.5">
                    Address:
                  </span>
                  <span>
                    Virasat Corporate Tower, Outer Ring Road Corridor, Shivpur, Varanasi, Uttar
                    Pradesh - 221002, India
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 bg-white border border-virasat-gold/30 p-4 rounded-lg">
                <Phone className="w-5 h-5 text-virasat-gold shrink-0" />
                <div>
                  <span className="font-bold text-virasat-green-dark block mb-0.5">
                    Phone Numbers:
                  </span>
                  <a href="tel:+919876543210" className="hover:text-virasat-green">
                    +91 98765 43210
                  </a>{" "}
                  /{" "}
                  <a href="tel:+919876543211" className="hover:text-virasat-green">
                    +91 98765 43211
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 bg-white border border-virasat-gold/30 p-4 rounded-lg">
                <Mail className="w-5 h-5 text-virasat-gold shrink-0" />
                <div>
                  <span className="font-bold text-virasat-green-dark block mb-0.5">
                    Official Email:
                  </span>
                  <a
                    href="mailto:enquiry@virasatdevelopments.com"
                    className="hover:text-virasat-green"
                  >
                    enquiry@virasatdevelopments.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 bg-white border border-virasat-gold/30 p-4 rounded-lg">
                <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <div>
                  <span className="font-bold text-virasat-green-dark block mb-0.5">
                    WhatsApp Concierge:
                  </span>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 hover:underline font-semibold"
                  >
                    Chat with Sales Advisory (+91 98765 43210)
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-lg overflow-hidden border border-virasat-gold/30 h-64 shadow-md bg-virasat-charcoal-dark">
              <iframe
                title="Virasat Varanasi Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.24588741364!2d82.9087063!3d25.321684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2db76febcf4d%3A0x68131710853ff0b5!2sVaranasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale contrast-125"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-virasat-gold/30 rounded-xl p-8 sm:p-10 shadow-lg">
              {success ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-virasat-green/10 border border-virasat-gold flex items-center justify-center mx-auto text-virasat-green">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-virasat-green-dark">
                    Enquiry Received
                  </h3>
                  <p className="text-sm text-virasat-charcoal/70 max-w-md mx-auto">
                    Thank you for reaching out to VIRASAT DEVELOPMENTS. An executive relationship
                    manager has been notified and will call you shortly.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="bg-virasat-green text-virasat-gold text-xs uppercase tracking-widest font-bold px-6 py-2.5 rounded hover:bg-virasat-green-dark transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-virasat-green-dark">
                      Request a Consultation
                    </h3>
                    <p className="text-xs text-virasat-charcoal/70 mt-1">
                      Share your preferences and our team will prepare a customized dossier with
                      verified site details.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-xs p-3 rounded">
                      {errorMsg}
                    </div>
                  )}

                  {/* Honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="company_hp_check"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-virasat-green font-bold mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aditya Vardhan"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-virasat-ivory-dark/30 border border-virasat-gold/30 rounded px-3.5 py-2.5 text-xs text-virasat-charcoal focus:outline-none focus:border-virasat-green"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-virasat-green font-bold mb-1">
                        Indian Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-virasat-ivory-dark/30 border border-virasat-gold/30 rounded px-3.5 py-2.5 text-xs text-virasat-charcoal focus:outline-none focus:border-virasat-green"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-virasat-green font-bold mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="aditya@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-virasat-ivory-dark/30 border border-virasat-gold/30 rounded px-3.5 py-2.5 text-xs text-virasat-charcoal focus:outline-none focus:border-virasat-green"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-virasat-green font-bold mb-1">
                        Interested Project
                      </label>
                      <select
                        value={formData.interestedProjectName}
                        onChange={(e) =>
                          setFormData({ ...formData, interestedProjectName: e.target.value })
                        }
                        className="w-full bg-virasat-ivory-dark/30 border border-virasat-gold/30 rounded px-3.5 py-2.5 text-xs text-virasat-charcoal focus:outline-none focus:border-virasat-green"
                      >
                        <option value="Virasat Ganga Enclave">
                          Virasat Ganga Enclave (Plots • Ring Road)
                        </option>
                        <option value="The Kashi Grandeur">
                          The Kashi Grandeur (Apartments • Cantt)
                        </option>
                        <option value="Virasat Prime Pavilion">
                          Virasat Prime Pavilion (Commercial • Babatpur)
                        </option>
                        <option value="General Portfolio Enquiry">
                          General Portfolio Enquiry
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-virasat-green font-bold mb-1">
                        Budget Range
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) =>
                          setFormData({ ...formData, budgetRange: e.target.value })
                        }
                        className="w-full bg-virasat-ivory-dark/30 border border-virasat-gold/30 rounded px-3.5 py-2.5 text-xs text-virasat-charcoal focus:outline-none focus:border-virasat-green"
                      >
                        <option value="₹30 Lakhs - ₹50 Lakhs">₹30 Lakhs - ₹50 Lakhs</option>
                        <option value="₹50 Lakhs - ₹1 Crore">₹50 Lakhs - ₹1 Crore</option>
                        <option value="₹1 Crore - ₹2 Crore">₹1 Crore - ₹2 Crore</option>
                        <option value="₹2 Crore+">₹2 Crore+ / Ultra Luxury</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-virasat-green font-bold mb-1">
                        Property Category
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) =>
                          setFormData({ ...formData, propertyType: e.target.value })
                        }
                        className="w-full bg-virasat-ivory-dark/30 border border-virasat-gold/30 rounded px-3.5 py-2.5 text-xs text-virasat-charcoal focus:outline-none focus:border-virasat-green"
                      >
                        <option value="Plotted Development">Residential Plots</option>
                        <option value="Luxury Apartments">Luxury Apartments</option>
                        <option value="Villas & Estates">Boutique Villas</option>
                        <option value="Commercial">Commercial Properties</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-virasat-green font-bold mb-1">
                      Message / Special Requests
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify your preferred plot dimensions, site visit dates, or investment timelines..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-virasat-ivory-dark/30 border border-virasat-gold/30 rounded px-3.5 py-2.5 text-xs text-virasat-charcoal focus:outline-none focus:border-virasat-green resize-none"
                    />
                  </div>

                  <div className="flex items-start space-x-2 text-[11px] text-virasat-charcoal/70">
                    <input
                      type="checkbox"
                      id="contact-consent"
                      required
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 accent-virasat-green"
                    />
                    <label htmlFor="contact-consent" className="cursor-pointer">
                      I agree to receive communications from VIRASAT DEVELOPMENTS regarding projects
                      in Varanasi.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-virasat-green hover:bg-virasat-green-dark text-virasat-gold text-xs uppercase tracking-widest font-bold py-3.5 rounded transition-all disabled:opacity-50 shadow-md"
                  >
                    {loading ? "Submitting..." : "Submit Consultation Request"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
