import React from "react";
import { prisma } from "@/lib/prisma";
import ProjectsListingClient from "@/components/projects/ProjectsListingClient";

export const metadata = {
  title: "Our Real Estate Projects in Varanasi | VIRASAT",
  description:
    "Explore luxury residential plots, high-rise apartments, and commercial properties by Virasat Developments across Varanasi, including Ring Road and Cantt corridors.",
};

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    where: { isPublished: true },
    orderBy: [{ isFeatured: "desc" }, { order: "asc" }],
    include: {
      category: true,
      configurations: true,
      amenities: true,
    },
  });

  const categories = await prisma.projectCategory.findMany({
    where: { isActive: true },
    orderBy: { order: "asc" },
  });

  return <ProjectsListingClient initialProjects={projects} categories={categories} />;
}
