"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Compass, ArrowUpRight, CheckCircle2 } from "lucide-react";

export interface ProjectCardData {
  id: string;
  title: string;
  slug: string;
  tagline?: string | null;
  shortDescription: string;
  propertyType: string;
  status: string;
  locationName: string;
  heroImage: string;
  priceStarting?: string | null;
  possessionDate?: string | null;
  totalArea?: string | null;
  totalUnits?: string | null;
  openSpaceRatio?: string | null;
  reraNumber?: string | null;
}

interface ProjectCardProps {
  project: ProjectCardData;
  onEnquire?: (projectName: string) => void;
}

export default function ProjectCard({ project, onEnquire }: ProjectCardProps) {
  const getStatusBadgeClass = (status: string) => {
    switch (status.toLowerCase()) {
      case "new launch":
        return "bg-amber-500/20 text-amber-300 border-amber-500/40";
      case "upcoming":
        return "bg-blue-500/20 text-blue-300 border-blue-500/40";
      case "under development":
        return "bg-emerald-500/20 text-emerald-300 border-emerald-500/40";
      case "ready to move":
        return "bg-teal-500/20 text-teal-300 border-teal-500/40";
      default:
        return "bg-virasat-gold/20 text-virasat-gold border-virasat-gold/40";
    }
  };

  return (
    <div className="group bg-virasat-charcoal-dark border border-virasat-gold/20 rounded-lg overflow-hidden hover:border-virasat-gold/60 transition-all duration-500 flex flex-col h-full shadow-lg hover:shadow-2xl hover:-translate-y-1">
      {/* Image Container with Badges */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-virasat-green-dark">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-virasat-charcoal-dark via-transparent to-black/30" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span
            className={`text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded border backdrop-blur-md ${getStatusBadgeClass(
              project.status
            )}`}
          >
            {project.status}
          </span>

          <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded bg-black/60 text-white border border-white/20 backdrop-blur-md">
            {project.propertyType}
          </span>
        </div>

        {/* Location & Title Preview on Image */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center space-x-1.5 text-virasat-gold-light text-xs font-medium mb-1 drop-shadow">
            <MapPin className="w-3.5 h-3.5" />
            <span>{project.locationName}</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-virasat-gold-light transition-colors drop-shadow">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        {project.tagline && (
          <p className="text-xs font-medium text-virasat-gold tracking-wide italic">
            "{project.tagline}"
          </p>
        )}

        <p className="text-xs text-white/70 line-clamp-3 leading-relaxed font-light">
          {project.shortDescription}
        </p>

        {/* Key Highlights Grid */}
        <div className="grid grid-cols-2 gap-2.5 py-3 border-y border-virasat-gold/15 text-xs text-white/80">
          {project.totalArea && (
            <div>
              <span className="block text-[10px] text-white/40 uppercase tracking-wider">
                Total Masterplan
              </span>
              <span className="font-medium text-white/90">{project.totalArea}</span>
            </div>
          )}

          {project.openSpaceRatio && (
            <div>
              <span className="block text-[10px] text-white/40 uppercase tracking-wider">
                Open Greenery
              </span>
              <span className="font-medium text-white/90">{project.openSpaceRatio}</span>
            </div>
          )}

          {project.priceStarting && (
            <div className="col-span-2 pt-1 flex items-baseline justify-between">
              <span className="text-[10px] text-white/40 uppercase tracking-wider">
                Investment Pricing
              </span>
              <span className="font-serif text-sm font-bold text-virasat-gold-light">
                {project.priceStarting}
              </span>
            </div>
          )}
        </div>

        {/* RERA Placeholder Notice */}
        {project.reraNumber && (
          <div className="text-[10px] text-white/50 flex items-center space-x-1">
            <CheckCircle2 className="w-3 h-3 text-virasat-gold/60 shrink-0" />
            <span className="truncate">{project.reraNumber}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="pt-2 flex items-center space-x-2.5">
          <Link
            href={`/projects/${project.slug}`}
            className="flex-1 border border-virasat-gold/40 hover:border-virasat-gold bg-virasat-green/40 hover:bg-virasat-green text-virasat-gold-light hover:text-white text-xs uppercase tracking-widest font-semibold py-2.5 rounded text-center transition-all flex items-center justify-center space-x-1"
          >
            <span>Explore Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={() => onEnquire && onEnquire(project.title)}
            className="bg-gold-metallic text-virasat-green-dark text-xs uppercase tracking-widest font-bold px-4 py-2.5 rounded hover:brightness-110 active:scale-95 transition-all"
          >
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
}
