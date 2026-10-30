"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Shield, Calendar, Building, Phone, Mail, User } from "lucide-react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
  defaultEnquiryType?: "GENERAL" | "PROJECT_SPECIFIC" | "BROCHURE_DOWNLOAD" | "SITE_VISIT_BOOKING";
}

export default function EnquiryModal({
  isOpen,
  onClose,
  defaultProject = "",
  defaultEnquiryType = "GENERAL",
}: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    interestedProjectName: defaultProject,
    propertyType: "Plotted Development",
    budgetRange: "₹50 Lakhs - ₹1 Crore",
    preferredConfiguration: "Curated Villa Plot",
    enquiryType: defaultEnquiryType,
    message: "",
    scheduledVisitDate: "",
    consent: true,
    honeypot: "", // hidden spam trap
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [enquiryRefId, setEnquiryRefId] = useState("");

  useEffect(() => {
    if (defaultProject) {
      setFormData((prev) => ({
        ...prev,
        interestedProjectName: defaultProject,
        enquiryType: defaultEnquiryType,
      }));
    }
  }, [defaultProject, defaultEnquiryType]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.fullName.trim() || formData.fullName.length < 2) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    const cleanPhone = formData.phone.replace(/[\s+-]/g, "");
    if (!/^[6-9]\d{9}$/.test(cleanPhone) && !/^91[6-9]\d{9}$/.test(cleanPhone)) {
      setErrorMessage("Please enter a valid 10-digit Indian phone number.");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!formData.consent) {
      setErrorMessage("Please check the consent box to proceed.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || "Failed to submit enquiry.");
      } else {
        setIsSuccess(true);
        setEnquiryRefId(data.enquiryId || "VIR-" + Math.floor(100000 + Math.random() * 900000));
      }
    } catch (err) {
      setErrorMessage("Network error. Please try again or reach our concierge directly.");
    } finally {
      setLoading(false);
    }
  };

  const resetAndClose = () => {
    setIsSuccess(false);
    setErrorMessage("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-virasat-charcoal-dark/85 backdrop-blur-md transition-all">
      <div className="relative w-full max-w-xl bg-virasat-green-dark border border-virasat-gold/30 rounded-lg shadow-2xl overflow-hidden text-white">
        {/* Header Bar */}
        <div className="bg-virasat-charcoal-dark/60 border-b border-virasat-gold/20 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-serif text-lg font-bold text-virasat-gold tracking-wide">
              VIRASAT
            </span>
            <span className="text-white/40">|</span>
            <span className="text-xs uppercase tracking-widest text-white/80 font-medium">
              Private Concierge
            </span>
          </div>
          <button
            onClick={resetAndClose}
            className="text-white/60 hover:text-virasat-gold transition-colors p-1"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[85vh] overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-8 space-y-5">
              <div className="w-16 h-16 rounded-full bg-virasat-green/80 border border-virasat-gold flex items-center justify-center mx-auto text-virasat-gold">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-2xl font-bold text-virasat-gold-light">
                  Enquiry Registered Successfully
                </h3>
                <p className="text-sm text-white/80 max-w-md mx-auto">
                  Thank you for your interest in VIRASAT. A senior relationship manager has been
                  assigned to your request and will connect with you with verified project details.
                </p>
                <div className="pt-3">
                  <span className="inline-block bg-virasat-charcoal-dark border border-virasat-gold/30 text-xs px-3.5 py-1.5 rounded font-mono text-virasat-gold">
                    Reference ID: {enquiryRefId}
                  </span>
                </div>
              </div>
              <div className="pt-4">
                <button
                  onClick={resetAndClose}
                  className="bg-gold-metallic text-virasat-green-dark text-xs uppercase tracking-widest font-bold px-8 py-3 rounded hover:brightness-110 transition-all"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-virasat-gold-light">
                  {formData.enquiryType === "SITE_VISIT_BOOKING"
                    ? "Schedule a VIP Site Visit"
                    : formData.enquiryType === "BROCHURE_DOWNLOAD"
                    ? "Request Official Project Brochure"
                    : "Express Your Interest"}
                </h3>
                <p className="text-xs text-white/70 mt-1">
                  Connect with our private advisory desk for verified project elevations, plot
                  availability, and pricing schedules.
                </p>
              </div>

              {/* Honeypot Spam Field */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="website_url_hp"
                  tabIndex={-1}
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  autoComplete="off"
                />
              </div>

              {/* Form Tabs */}
              <div className="grid grid-cols-3 gap-2 bg-virasat-charcoal-dark/70 p-1 rounded border border-virasat-gold/20 text-center text-xs">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, enquiryType: "GENERAL" })}
                  className={`py-1.5 rounded transition-all ${
                    formData.enquiryType === "GENERAL"
                      ? "bg-virasat-green text-virasat-gold font-bold shadow"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  General Query
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, enquiryType: "SITE_VISIT_BOOKING" })}
                  className={`py-1.5 rounded transition-all ${
                    formData.enquiryType === "SITE_VISIT_BOOKING"
                      ? "bg-virasat-green text-virasat-gold font-bold shadow"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  Site Visit
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, enquiryType: "BROCHURE_DOWNLOAD" })}
                  className={`py-1.5 rounded transition-all ${
                    formData.enquiryType === "BROCHURE_DOWNLOAD"
                      ? "bg-virasat-green text-virasat-gold font-bold shadow"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  Brochure
                </button>
              </div>

              {/* Error Alert */}
              {errorMessage && (
                <div className="bg-red-900/60 border border-red-500/50 p-3 rounded text-xs text-red-200">
                  {errorMessage}
                </div>
              )}

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-medium mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-white/40 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Singhania"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-virasat-charcoal-dark/90 border border-virasat-gold/30 rounded pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-virasat-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-medium mb-1">
                    Indian Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-white/40 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-virasat-charcoal-dark/90 border border-virasat-gold/30 rounded pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-virasat-gold"
                    />
                  </div>
                </div>
              </div>

              {/* Email & Project */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-medium mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-white/40 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-virasat-charcoal-dark/90 border border-virasat-gold/30 rounded pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-virasat-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-medium mb-1">
                    Interested Project
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-white/40 absolute left-3 top-3" />
                    <select
                      value={formData.interestedProjectName}
                      onChange={(e) =>
                        setFormData({ ...formData, interestedProjectName: e.target.value })
                      }
                      className="w-full bg-virasat-charcoal-dark/90 border border-virasat-gold/30 rounded pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-virasat-gold"
                    >
                      <option value="">General Virasat Portfolio</option>
                      <option value="Virasat Ganga Enclave">
                        Virasat Ganga Enclave (Plots • Ring Road)
                      </option>
                      <option value="The Kashi Grandeur">
                        The Kashi Grandeur (Apartments • Cantt)
                      </option>
                      <option value="Virasat Prime Pavilion">
                        Virasat Prime Pavilion (Commercial • Babatpur)
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Budget Range & Property Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-medium mb-1">
                    Budget Range
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full bg-virasat-charcoal-dark/90 border border-virasat-gold/30 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-virasat-gold"
                  >
                    <option value="₹30 Lakhs - ₹50 Lakhs">₹30 Lakhs - ₹50 Lakhs</option>
                    <option value="₹50 Lakhs - ₹1 Crore">₹50 Lakhs - ₹1 Crore</option>
                    <option value="₹1 Crore - ₹2 Crore">₹1 Crore - ₹2 Crore</option>
                    <option value="₹2 Crore+">₹2 Crore+ / Ultra Luxury</option>
                    <option value="Flexible">Flexible / Open for Proposal</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-medium mb-1">
                    Preferred Category
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full bg-virasat-charcoal-dark/90 border border-virasat-gold/30 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-virasat-gold"
                  >
                    <option value="Plotted Development">Residential Plots</option>
                    <option value="Luxury Apartments">Luxury Apartments (3/4 BHK)</option>
                    <option value="Villas & Estates">Boutique Villas</option>
                    <option value="Commercial">Commercial / Retail Spaces</option>
                  </select>
                </div>
              </div>

              {/* Date picker for Site Visit */}
              {formData.enquiryType === "SITE_VISIT_BOOKING" && (
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-medium mb-1">
                    Preferred Visit Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-white/40 absolute left-3 top-3" />
                    <input
                      type="date"
                      value={formData.scheduledVisitDate}
                      onChange={(e) =>
                        setFormData({ ...formData, scheduledVisitDate: e.target.value })
                      }
                      className="w-full bg-virasat-charcoal-dark/90 border border-virasat-gold/30 rounded pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-virasat-gold"
                    />
                  </div>
                </div>
              )}

              {/* Message */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-medium mb-1">
                  Specific Requirements / Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your preferred plot dimensions, possession horizon, or specific questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-virasat-charcoal-dark/90 border border-virasat-gold/30 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-virasat-gold resize-none"
                />
              </div>

              {/* Consent checkbox */}
              <div className="flex items-start space-x-2 text-[11px] text-white/70">
                <input
                  type="checkbox"
                  id="consent-check"
                  required
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-0.5 accent-virasat-gold rounded"
                />
                <label htmlFor="consent-check" className="cursor-pointer">
                  I authorize VIRASAT DEVELOPMENTS and its authorized representatives to contact me
                  via call, SMS, or WhatsApp regarding project updates.
                </label>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gold-metallic text-virasat-green-dark text-xs uppercase tracking-widest font-bold py-3 rounded hover:brightness-110 active:scale-[0.99] transition-all disabled:opacity-50"
                >
                  {loading
                    ? "Submitting to Concierge..."
                    : formData.enquiryType === "SITE_VISIT_BOOKING"
                    ? "Confirm Site Visit Request"
                    : formData.enquiryType === "BROCHURE_DOWNLOAD"
                    ? "Download Project Brochure"
                    : "Submit Private Enquiry"}
                </button>
              </div>

              <div className="flex items-center justify-center space-x-1 text-[10px] text-white/40 pt-1">
                <Shield className="w-3 h-3 text-virasat-gold/60" />
                <span>Your information is protected under strict privacy protocols. No spam.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
