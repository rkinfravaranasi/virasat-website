"use client";

import React, { useState } from "react";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { Save, CheckCircle2, Shield, Phone, Mail, MapPin, Share2, Activity } from "lucide-react";

interface SettingsManagerClientProps {
  initialSettings: Record<string, string>;
}

export default function SettingsManagerClient({
  initialSettings,
}: SettingsManagerClientProps) {
  const [settings, setSettings] = useState<Record<string, string>>(initialSettings);
  const [loading, setLoading] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (key: string, value: string) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(false);
    setErrorMsg("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });

      if (!res.ok) {
        setErrorMsg("Failed to save settings.");
      } else {
        setSavedSuccess(true);
        setTimeout(() => setSavedSuccess(false), 4000);
      }
    } catch (err) {
      setErrorMsg("Network error saving settings.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-virasat-charcoal-dark text-white font-sans">
      <AdminSidebar />

      <main className="flex-1 p-8 space-y-6 overflow-y-auto">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-virasat-gold/20 gap-4">
          <div>
            <h1 className="font-serif text-3xl font-bold text-white">Website & Brand Settings</h1>
            <p className="text-xs text-white/60 mt-1">
              Configure corporate credentials, phone numbers, RERA disclaimer, and tracking tags
            </p>
          </div>

          <button
            onClick={handleSave}
            disabled={loading}
            className="bg-gold-metallic text-virasat-green-dark text-xs uppercase tracking-wider font-bold px-6 py-2.5 rounded hover:brightness-110 active:scale-95 transition-all flex items-center space-x-1.5 shadow"
          >
            <Save className="w-4 h-4" />
            <span>{loading ? "Saving Settings..." : "Save All Changes"}</span>
          </button>
        </div>

        {savedSuccess && (
          <div className="bg-emerald-900/60 border border-emerald-500/50 p-3.5 rounded text-xs text-emerald-200 flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Settings updated successfully and applied across the entire digital portal.</span>
          </div>
        )}

        {errorMsg && (
          <div className="bg-red-900/60 border border-red-500/50 p-3.5 rounded text-xs text-red-200">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-6 text-xs max-w-4xl">
          {/* Section 1: Corporate Identity */}
          <div className="bg-virasat-green-dark border border-virasat-gold/30 rounded-xl p-6 space-y-4">
            <div className="flex items-center space-x-2 border-b border-virasat-gold/20 pb-3">
              <span className="font-serif text-base font-bold text-virasat-gold-light">
                1. Corporate Identity
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-bold mb-1">
                  Brand Name
                </label>
                <input
                  type="text"
                  value={settings["company_name"] || ""}
                  onChange={(e) => handleChange("company_name", e.target.value)}
                  className="w-full bg-virasat-charcoal-dark border border-virasat-gold/30 rounded px-3 py-2 text-white"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-bold mb-1">
                  Brand Slogan / Tagline
                </label>
                <input
                  type="text"
                  value={settings["company_tagline"] || ""}
                  onChange={(e) => handleChange("company_tagline", e.target.value)}
                  className="w-full bg-virasat-charcoal-dark border border-virasat-gold/30 rounded px-3 py-2 text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-bold mb-1">
                Corporate Office Address
              </label>
              <textarea
                rows={2}
                value={settings["office_address"] || ""}
                onChange={(e) => handleChange("office_address", e.target.value)}
                className="w-full bg-virasat-charcoal-dark border border-virasat-gold/30 rounded px-3 py-2 text-white resize-none"
              />
            </div>
          </div>

          {/* Section 2: Contact & Concierge Lines */}
          <div className="bg-virasat-green-dark border border-virasat-gold/30 rounded-xl p-6 space-y-4">
            <div className="flex items-center space-x-2 border-b border-virasat-gold/20 pb-3">
              <span className="font-serif text-base font-bold text-virasat-gold-light">
                2. Contact & VIP Concierge Numbers
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-bold mb-1">
                  Primary Phone
                </label>
                <input
                  type="text"
                  value={settings["phone_primary"] || ""}
                  onChange={(e) => handleChange("phone_primary", e.target.value)}
                  className="w-full bg-virasat-charcoal-dark border border-virasat-gold/30 rounded px-3 py-2 text-white"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-bold mb-1">
                  Secondary VIP Line
                </label>
                <input
                  type="text"
                  value={settings["phone_secondary"] || ""}
                  onChange={(e) => handleChange("phone_secondary", e.target.value)}
                  className="w-full bg-virasat-charcoal-dark border border-virasat-gold/30 rounded px-3 py-2 text-white"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-bold mb-1">
                  WhatsApp Concierge (e.g. +919876543210)
                </label>
                <input
                  type="text"
                  value={settings["whatsapp_number"] || ""}
                  onChange={(e) => handleChange("whatsapp_number", e.target.value)}
                  className="w-full bg-virasat-charcoal-dark border border-virasat-gold/30 rounded px-3 py-2 text-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-bold mb-1">
                  General Contact Email
                </label>
                <input
                  type="email"
                  value={settings["email_general"] || ""}
                  onChange={(e) => handleChange("email_general", e.target.value)}
                  className="w-full bg-virasat-charcoal-dark border border-virasat-gold/30 rounded px-3 py-2 text-white"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-bold mb-1">
                  Sales Lead Notification Email
                </label>
                <input
                  type="email"
                  value={settings["email_enquiry"] || ""}
                  onChange={(e) => handleChange("email_enquiry", e.target.value)}
                  className="w-full bg-virasat-charcoal-dark border border-virasat-gold/30 rounded px-3 py-2 text-white"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Statutory Legal & RERA Disclaimer */}
          <div className="bg-virasat-green-dark border border-virasat-gold/30 rounded-xl p-6 space-y-4">
            <div className="flex items-center space-x-2 border-b border-virasat-gold/20 pb-3">
              <span className="font-serif text-base font-bold text-virasat-gold-light">
                3. Statutory RERA & Legal Disclaimer
              </span>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-bold mb-1">
                Footer Disclaimer Text
              </label>
              <textarea
                rows={4}
                value={settings["rera_disclaimer"] || ""}
                onChange={(e) => handleChange("rera_disclaimer", e.target.value)}
                className="w-full bg-virasat-charcoal-dark border border-virasat-gold/30 rounded px-3 py-2 text-white resize-none leading-relaxed"
              />
            </div>
          </div>

          {/* Section 4: Analytics & Tracking IDs */}
          <div className="bg-virasat-green-dark border border-virasat-gold/30 rounded-xl p-6 space-y-4">
            <div className="flex items-center space-x-2 border-b border-virasat-gold/20 pb-3">
              <span className="font-serif text-base font-bold text-virasat-gold-light">
                4. Analytics & Digital Marketing Integrations
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-bold mb-1">
                  Google Analytics 4 (G-XXXXXXX)
                </label>
                <input
                  type="text"
                  placeholder="e.g. G-123456789"
                  value={settings["ga_tracking_id"] || ""}
                  onChange={(e) => handleChange("ga_tracking_id", e.target.value)}
                  className="w-full bg-virasat-charcoal-dark border border-virasat-gold/30 rounded px-3 py-2 text-white"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-bold mb-1">
                  Google Tag Manager (GTM-XXXX)
                </label>
                <input
                  type="text"
                  placeholder="e.g. GTM-ABC123"
                  value={settings["gtm_id"] || ""}
                  onChange={(e) => handleChange("gtm_id", e.target.value)}
                  className="w-full bg-virasat-charcoal-dark border border-virasat-gold/30 rounded px-3 py-2 text-white"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-virasat-gold font-bold mb-1">
                  Meta Pixel ID
                </label>
                <input
                  type="text"
                  placeholder="e.g. 123456789012345"
                  value={settings["meta_pixel_id"] || ""}
                  onChange={(e) => handleChange("meta_pixel_id", e.target.value)}
                  className="w-full bg-virasat-charcoal-dark border border-virasat-gold/30 rounded px-3 py-2 text-white"
                />
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gold-metallic text-virasat-green-dark text-xs uppercase tracking-widest font-bold py-3.5 rounded hover:brightness-110 active:scale-[0.99] transition-all shadow-xl"
            >
              {loading ? "Saving All Settings..." : "Save All Settings"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
