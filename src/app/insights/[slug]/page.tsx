import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Calendar, User, Clock, ArrowLeft, ArrowRight, Share2, Tag } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await prisma.blogPost.findUnique({
    where: { slug: resolvedParams.slug },
  });

  if (!post) {
    return { title: "Article Not Found | VIRASAT" };
  }

  return {
    title: post.metaTitle || `${post.title} | Virasat Insights`,
    description: post.metaDescription || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = await prisma.blogPost.findUnique({
    where: { slug: resolvedParams.slug },
  });

  if (!post || !post.isPublished) {
    notFound();
  }

  const relatedPosts = await prisma.blogPost.findMany({
    where: {
      id: { not: post.id },
      isPublished: true,
    },
    take: 2,
  });

  return (
    <div className="bg-virasat-ivory text-virasat-charcoal min-h-screen flex flex-col font-sans">
      <Header />

      {/* Header Banner */}
      <section className="relative pt-36 pb-20 bg-virasat-green-dark text-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Link
            href="/insights"
            className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-widest text-virasat-gold hover:text-white transition-colors mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Insights</span>
          </Link>

          <div className="inline-block bg-virasat-charcoal-dark border border-virasat-gold/30 text-[10px] uppercase font-bold tracking-widest text-virasat-gold px-3 py-1 rounded">
            {post.category}
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-center space-x-4 text-xs text-white/70 pt-2">
            <span>By {post.authorName}</span>
            <span>•</span>
            <span>
              {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span>•</span>
            <span>{post.readTimeMinutes} min read</span>
          </div>
        </div>
      </section>

      {/* Post Cover & Editorial Body */}
      <article className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow space-y-10">
        <div className="rounded-xl overflow-hidden border border-virasat-gold/30 shadow-2xl bg-virasat-charcoal-dark">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-80 sm:h-[450px] object-cover"
          />
        </div>

        {/* Lead Excerpt */}
        <div className="font-serif text-lg sm:text-xl text-virasat-green-dark italic border-l-4 border-virasat-gold pl-6 py-2 leading-relaxed">
          "{post.excerpt}"
        </div>

        {/* Main Content */}
        <div className="text-base sm:text-lg text-virasat-charcoal/85 font-light leading-relaxed whitespace-pre-line space-y-6">
          {post.content}
        </div>

        {/* Bottom Author Bio Box */}
        <div className="p-6 bg-white border border-virasat-gold/30 rounded-lg flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-virasat-gold font-bold block">
              Published by
            </span>
            <h4 className="font-serif text-base font-bold text-virasat-green-dark">
              {post.authorName}
            </h4>
            <p className="text-xs text-virasat-charcoal/60">
              Virasat Real Estate Advisory & Research Desk, Varanasi
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-virasat-green text-virasat-gold text-xs uppercase tracking-wider font-bold px-4 py-2 rounded hover:bg-virasat-green-dark transition-colors"
          >
            Consult Advisory
          </Link>
        </div>

        {/* Related Insights */}
        {relatedPosts.length > 0 && (
          <div className="pt-10 border-t border-virasat-gold/20 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-virasat-green-dark">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white border border-virasat-gold/30 p-5 rounded-lg shadow-sm"
                >
                  <span className="text-[10px] text-virasat-gold uppercase tracking-wider font-bold block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="font-serif text-base font-bold text-virasat-green-dark mb-2 line-clamp-2">
                    <Link href={`/insights/${rel.slug}`}>{rel.title}</Link>
                  </h4>
                  <Link
                    href={`/insights/${rel.slug}`}
                    className="inline-flex items-center space-x-1 text-xs uppercase font-bold text-virasat-green hover:text-virasat-gold"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </article>

      <Footer />
    </div>
  );
}
