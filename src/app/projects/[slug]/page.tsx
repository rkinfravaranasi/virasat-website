import React from "react";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ProjectDetailClient from "@/components/projects/ProjectDetailClient";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = await prisma.project.findUnique({
    where: { slug: resolvedParams.slug },
  });

  if (!project) {
    return { title: "Project Not Found | VIRASAT" };
  }

  return {
    title: project.metaTitle || `${project.title} | Luxury Real Estate Varanasi`,
    description: project.metaDescription || project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [{ url: project.heroImage }],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const project = await prisma.project.findUnique({
    where: { slug: resolvedParams.slug },
    include: {
      category: true,
      configurations: { orderBy: { order: "asc" } },
      amenities: { orderBy: { order: "asc" } },
      media: { orderBy: { order: "asc" } },
      nearbyLandmarks: { orderBy: { order: "asc" } },
      documents: true,
    },
  });

  if (!project || !project.isPublished) {
    notFound();
  }

  // Fetch similar projects
  const similarProjects = await prisma.project.findMany({
    where: {
      id: { not: project.id },
      isPublished: true,
    },
    take: 3,
  });

  return <ProjectDetailClient project={project} similarProjects={similarProjects} />;
}
