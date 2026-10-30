"use client";

import React, { useState, useMemo } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/common/ProjectCard";
import EnquiryModal from "@/components/enquiry/EnquiryModal";
import { Search, Filter, SlidersHorizontal, MapPin, Building2, Check } from "lucide-react";

interface ProjectsListingClientProps {
  initialProjects: any[];
  categories: any[];
}

export default function ProjectsListingClient({
  initialProjects,
  categories,
}: ProjectsListingClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [selectedStatus, setSelectedStatus] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isEnquiryOpen, setIsEnquiryOpen] = useState<boolean>(false);
  const [enquiryProject, setEnquiryProject] = useState<string>("");

  const statuses = [
    "ALL",
    "New Launch",
    "Upcoming",
    "Under Development",
    "Ready to Move",
    "Completed",
  ];

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((p) => {
      // Category filter
      if (selectedCategory !== "ALL" && p.category?.slug !== selectedCategory) {
        return false;
      }

      // Status filter
      if (
        selectedStatus !== "ALL" &&
        p.status.toLowerCase() !== selectedStatus.toLowerCase()
      ) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(query);
        const matchesLocation = p.locationName.toLowerCase().includes(query);
        const matchesType = p.propertyType.toLowerCase().includes(query);
        if (!matchesTitle && !matchesLocation && !matchesType) {
          return false;
        }
      }

      return true;
    });
  }, [initialProjects, selectedCategory, selectedStatus, searchQuery]);

  return (
    <div className="bg-virasat-ivory text-virasat-charcoal min-h-screen flex flex-col font-sans">
      <Header onOpenEnquiry={() => setIsEnquiryOpen(true)} />

      {/* Header Banner */}
      <section className="relative pt-36 pb-20 bg-virasat-green-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
            alt="Virasat Real Estate Projects"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-virasat-green-dark via-virasat-green-dark/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] text-virasat-gold font-bold mb-4">
            <span className="w-8 h-[1px] bg-virasat-gold" />
            <span>Master-Planned Developments</span>
            <span className="w-8 h-[1px] bg-virasat-gold" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Our Portfolio
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/75 mt-4 font-light leading-relaxed">
            Discover premier plotted enclaves, signature residences, and high-street commercial hubs
            across Varanasi, built with meticulous engineering and verified RERA credentials.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-virasat-charcoal-dark border-b border-virasat-gold/30 sticky top-16 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-virasat-gold absolute left-3 top-3.5" />
              <input
                type="text"
                placeholder="Search by project, location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-virasat-green-dark/80 border border-virasat-gold/30 rounded pl-9 pr-3 py-2.5 text-xs text-white placeholder-white/50 focus:outline-none focus:border-virasat-gold"
              />
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              <span className="text-[11px] text-virasat-gold uppercase tracking-wider font-semibold mr-1 hidden sm:inline">
                Category:
              </span>
              <button
                onClick={() => setSelectedCategory("ALL")}
                className={`text-xs uppercase tracking-wider px-3.5 py-1.5 rounded transition-all font-medium ${
                  selectedCategory === "ALL"
                    ? "bg-virasat-gold text-virasat-green-dark font-bold shadow"
                    : "bg-virasat-green-dark/60 text-white/70 hover:text-white border border-white/10"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`text-xs uppercase tracking-wider px-3.5 py-1.5 rounded transition-all font-medium ${
                    selectedCategory === cat.slug
                      ? "bg-virasat-gold text-virasat-green-dark font-bold shadow"
                      : "bg-virasat-green-dark/60 text-white/70 hover:text-white border border-white/10"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Status Dropdown */}
            <div className="flex items-center space-x-2 w-full lg:w-auto justify-end">
              <span className="text-[11px] text-virasat-gold uppercase tracking-wider font-semibold">
                Status:
              </span>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="bg-virasat-green-dark/80 border border-virasat-gold/30 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-virasat-gold"
              >
                {statuses.map((st) => (
                  <option key={st} value={st}>
                    {st === "ALL" ? "All Statuses" : st}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Display */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-24 bg-white border border-virasat-gold/20 rounded-xl p-8 max-w-md mx-auto space-y-4">
            <Building2 className="w-12 h-12 text-virasat-gold/60 mx-auto" />
            <h3 className="font-serif text-xl font-bold text-virasat-green-dark">
              No Projects Found
            </h3>
            <p className="text-xs text-virasat-charcoal/70">
              No developments currently match your active filters. Try resetting the category or
              status criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("ALL");
                setSelectedStatus("ALL");
                setSearchQuery("");
              }}
              className="bg-virasat-green text-virasat-gold text-xs uppercase tracking-wider font-bold px-5 py-2.5 rounded hover:bg-virasat-green-dark"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onEnquire={(name) => {
                  setEnquiryProject(name);
                  setIsEnquiryOpen(true);
                }}
              />
            ))}
          </div>
        )}
      </section>

      <Footer />

      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        defaultProject={enquiryProject}
      />
    </div>
  );
}
