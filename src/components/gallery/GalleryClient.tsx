"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Maximize2, X, Play, Image as ImageIcon } from "lucide-react";

interface GalleryClientProps {
  initialMedia: any[];
}

export default function GalleryClient({ initialMedia }: GalleryClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeLightbox, setActiveLightbox] = useState<any | null>(null);

  // Fallback items if media list is empty
  const fallbackMedia = [
    {
      id: "m1",
      title: "Virasat Ganga Enclave Entrance Gate",
      caption: "Grand triple-height entrance boulevard and security pavilion",
      category: "Architecture",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "m2",
      title: "Botanical Parkland & Gazebos",
      caption: "Manicured landscaped theme gardens with walking promenades",
      category: "Landscape",
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "m3",
      title: "The Virasat Club Clubhouse",
      caption: "15,000 sq.ft. private recreation lounge and banquet pavilion",
      category: "Clubhouse",
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "m4",
      title: "High-Rise Sky Residences",
      caption: "Panoramic cantilevered balconies at The Kashi Grandeur",
      category: "Architecture",
      url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "m5",
      title: "Wide Internal Boulevards",
      caption: "40 ft and 60 ft concrete arterial roads with concealed utilities",
      category: "Infrastructure",
      url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "m6",
      title: "Evening Reflection Lawns",
      caption: "Sunken seating pavilions and water fountains",
      category: "Landscape",
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const mediaList = initialMedia && initialMedia.length > 0 ? initialMedia : fallbackMedia;

  const categories = ["ALL", "Architecture", "Landscape", "Clubhouse", "Infrastructure"];

  const filteredMedia =
    selectedCategory === "ALL"
      ? mediaList
      : mediaList.filter(
          (m) => m.category?.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="bg-virasat-ivory text-virasat-charcoal min-h-screen flex flex-col font-sans">
      <Header />

      {/* Cinematic Banner */}
      <section className="relative pt-36 pb-20 bg-virasat-green-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80"
            alt="Virasat Gallery"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-virasat-green-dark via-virasat-green-dark/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-virasat-gold font-bold mb-4">
            <span className="w-8 h-[1px] bg-virasat-gold" />
            <span>Visual Portfolio</span>
            <span className="w-8 h-[1px] bg-virasat-gold" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Visual Gallery
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/75 mt-4 font-light leading-relaxed">
            Explore architectural renders, landscaping master plans, internal boulevards, and
            recreation spaces across our Varanasi developments.
          </p>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="py-6 bg-virasat-charcoal-dark border-b border-virasat-gold/30 sticky top-16 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs uppercase tracking-wider px-4 py-2 rounded transition-all font-semibold ${
                  selectedCategory === cat
                    ? "bg-virasat-gold text-virasat-green-dark shadow"
                    : "bg-virasat-green-dark/60 text-white/70 hover:text-white border border-white/10"
                }`}
              >
                {cat === "ALL" ? "All Media" : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className="group relative h-72 rounded-lg overflow-hidden border border-virasat-gold/30 bg-virasat-charcoal-dark cursor-pointer shadow-md hover:shadow-2xl transition-all"
            >
              <img
                src={item.url}
                alt={item.title || "Gallery Item"}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-virasat-charcoal-dark/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Tag & Overlay */}
              <div className="absolute top-4 left-4">
                <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded bg-black/60 text-virasat-gold border border-virasat-gold/30 backdrop-blur-md">
                  {item.category}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h4 className="font-serif text-base font-bold text-white group-hover:text-virasat-gold-light transition-colors mb-1 drop-shadow">
                  {item.title}
                </h4>
                {item.caption && (
                  <p className="text-xs text-white/70 font-light line-clamp-2">{item.caption}</p>
                )}
                <div className="pt-2 flex items-center space-x-1 text-[11px] text-virasat-gold font-semibold uppercase tracking-wider">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to Expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="relative max-w-5xl max-h-[92vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute -top-10 right-0 text-white hover:text-virasat-gold p-2"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeLightbox.url}
              alt={activeLightbox.title}
              className="max-w-full max-h-[75vh] object-contain rounded border border-virasat-gold/40 shadow-2xl"
            />
            <div className="text-center text-white mt-4 space-y-1">
              <h3 className="font-serif text-lg font-bold text-virasat-gold-light">
                {activeLightbox.title}
              </h3>
              {activeLightbox.caption && (
                <p className="text-xs text-white/80 max-w-xl mx-auto">
                  {activeLightbox.caption}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
