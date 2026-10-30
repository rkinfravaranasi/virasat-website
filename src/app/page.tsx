import React from "react";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import HomeClientWrapper from "@/components/home/HomeClientWrapper";

export default async function HomePage() {
  // Fetch active featured projects
  const featuredProjects = await prisma.project.findMany({
    where: { isPublished: true },
    orderBy: [{ isFeatured: "desc" }, { order: "asc" }],
    take: 6,
    include: {
      category: true,
      amenities: { take: 4 },
      configurations: { take: 3 },
    },
  });

  // Fetch latest insights/blogs
  const recentArticles = await prisma.blogPost.findMany({
    where: { isPublished: true },
    orderBy: { publishedAt: "desc" },
    take: 3,
  });

  // Fetch active categories
  const categories = await prisma.projectCategory.findMany({
    where: { isActive: true },
    orderBy: { order: "asc" },
  });

  return (
    <HomeClientWrapper
      projects={featuredProjects}
      articles={recentArticles}
      categories={categories}
    />
  );
}
